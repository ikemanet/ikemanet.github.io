// 存储服务
var { Query, User, Cloud } = AV;
AV.init('Xi5VsRj4dwyX1J6RpS2GAXQk-gzGzoHsz', '0Ow1AYiqjkG8a9wz41OmP1jz');

function ikeLike(pageUrl){
    if (reward_clicked) return;
    if (pageUrl == null || pageUrl == '') return;
    $.getJSON("https://jsonip.com?callback=?", function(data) {
        var myIP = data.ip;
        AV.Object.extend('Likes');
        AV.Query.doCloudQuery('select likes from Likes where url = "'+pageUrl+'" and ip = "'+myIP+'"').then(function (data1) {
            if (data1.results.length == 0) {
                var Likes = AV.Object.extend('Likes');
                var like = new Likes();
                like.set('url', pageUrl);
                like.set('likes', 1);
                like.set('ip', myIP);
                like.save().then(function (like) {
                    reward_clicked = true;
                    ikeGetLikes(pageUrl);
                }, function (error) {
                    console.error('Submit like failed, error message: ' + error.message);
                });
            } else {
                document.getElementById('rewardText').innerHTML = '已赞过';
            }
        }, function (error) {
            
        });
    });
}

function ikeGetLikes(pageUrl){
    AV.Object.extend('Likes');
    AV.Query.doCloudQuery('select likes from Likes where url = "'+pageUrl+'"').then(function (data) {
        document.getElementById('rewardText').innerHTML = '+' + data.results.length;
    }, function (error) {
        console.error('Get like count failed, error message: ' + error.message);
    });
}

function ikeGetAllQuestions(){
    AV.Object.extend('Comment');
    var nowDateStr = localStorage.getItem("ike.today.q2a.lasttime");
    if (nowDateStr == null || nowDateStr == "" || nowDateStr.length < 24) {
        console.log("ike.today: previous date format is wrong, reset the date")
        nowDateStr = "1900-01-01T00:00:00.000Z";
        localStorage.setItem("ike.today.q2a.lasttime", nowDateStr);
    }
    try {
        AV.Query.doCloudQuery('select pid from Comment where url = "/messages/" and createdAt > date("'+nowDateStr+'")').then(function (data) {
            if (data.results.length > 0) {
                $( "li.menu-item-q2a" ).find("a").html("有问必答 <sup style='color:#d1697c'>"+data.results.length+"</sup>");
            }
        }, function (error) {
            console.error('Get reply count failed, error message: ' + error.message);
        });
    } catch (e) {}
}

function ikeGetSiteCommentsCount(){
    AV.Object.extend('Comment');
    var totalReplies = 0;
    try {
        AV.Query.doCloudQuery('select pid from Comment').then(function (data) {
            totalReplies = data.results.length;
            AV.Object.extend('Counter');
            var totalViews = 0;
            try {
                AV.Query.doCloudQuery('select time from Counter').then(function (data) {
                    for (var index = 0; index < data.results.length; index++) {
                        totalViews = totalViews + data.results[index].attributes.time;
                    }
                    $( "#site_analytics" ).html("&nbsp;&nbsp;💜&nbsp;&nbsp;" + totalViews + "次浏览，" + totalReplies + "条留言");
                }, function (error) {
                    console.error('Get views count failed, error message: ' + error.message);
                });
            } catch (e) {}
        }, function (error) {
            console.error('Get reply count failed, error message: ' + error.message);
        });
    } catch (e) {}
}

ikeGetAllQuestions();
ikeGetSiteCommentsCount();