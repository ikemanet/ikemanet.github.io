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
        AV.Query.doCloudQuery('select pid from Comment where url = "/message/" and createdAt > date("'+nowDateStr+'")').then(function (data) {
            if (data.results.length > 0) {
                $( "li.menu-item-q2a" ).find("a").html("留言 <sup style='color:#d1697c'>"+data.results.length+"</sup>");
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
                    $( "#site_analytics" ).html("&nbsp;&nbsp;💜&nbsp;&nbsp;" + totalViews + "次浏览，<a href='/comments/'>" + totalReplies + "条留言</a>");
                }, function (error) {
                    console.error('Get views count failed, error message: ' + error.message);
                });
            } catch (e) {}
        }, function (error) {
            console.error('Get reply count failed, error message: ' + error.message);
        });
    } catch (e) {}
}

function readAllUnreadComments(){
    if (confirm("是否全部已读？")) {
        var nowDate = new Date();
        var nowYear = nowDate.getUTCFullYear();
        var nowMonth = nowDate.getUTCMonth()+1;
        if (nowMonth < 10) nowMonth = "0"+nowMonth;
        var nowDay = nowDate.getUTCDate();
        if (nowDay < 10) nowDay = "0"+nowDay;
        var nowHour = nowDate.getUTCHours();
        if (nowHour < 10) nowHour = "0"+nowHour;
        var nowMinute = nowDate.getUTCMinutes();
        if (nowMinute < 10) nowMinute = "0"+nowMinute;
        var nowSecond = nowDate.getUTCSeconds();
        if (nowSecond < 10) nowSecond = "0"+nowSecond;
        
        
        var nowDateStr = nowYear + '-' + nowMonth + '-' + nowDay + 'T' + nowHour + ':' + nowMinute + ':' + nowSecond + '.000Z';
        console.log("ike.today: new date is " + nowDateStr)
        localStorage.setItem("ike.today.unread.lasttime", nowDateStr);
        alert("已读全部留言。");
        showPostsWithUnreadComments();
    }
}

function showPostsWithUnreadComments(){
    AV.Object.extend('Comment');
    var nowDateStr = localStorage.getItem("ike.today.unread.lasttime");
    if (nowDateStr == null || nowDateStr == "" || nowDateStr.length < 24) {
        console.log("ike.today: previous date format is wrong, reset the date")
        nowDateStr = "1900-01-01T00:00:00.000Z";
        localStorage.setItem("ike.today.unread.lasttime", nowDateStr);
    }
    try {
        $(".leancloud-visitors-count").text("很多");
        AV.Query.doCloudQuery('select nick, url from Comment where createdAt > date("'+nowDateStr+'")').then(function (data) {
            if (data.results.length > 0) {
                $("#unreadCommentsList").html('<p>' + data.results.length + ' 未读留言：</p>')
                for (var index = 0; index < data.results.length; index++) {
                    $("#unreadCommentsList").html($("#unreadCommentsList").html() + '<p><strong>'+data.results[index].attributes.nick+'</strong> 留言了 <a target="_blank" href="'+data.results[index].attributes.url+'">'+data.results[index].attributes.url+'</a></p>');
                }
                $("#unreadCommentsList").html($("#unreadCommentsList").html() + '<p><a href="#" onclick="javascript:readAllUnreadComments()">全部已读</a></p>');
            } else {
                $("#unreadCommentsList").html("<strong>没有新的留言啦 🐰 </strong>");
            }
        }, function (error) {
            console.error('Get reply count failed, error message: ' + error.message);
        });
    } catch (e) {}
}

function rewardDialog(){
    var d = dialog({
        title: '您的支持就是我努力的动力',
        fixed: true,
        quickClose: true,
        content: `
        <div id="rewardQR">
            <div id="wechat" style="display: inline-block">
                <img id="wechat_qr" src="/assets/images/wechat-pay.jpg" alt="WeChat Pay"/>
                <p style="color: #0fc336; text-align:center">微信 · 赏一杯咖啡</p>
            </div>
            <div id="alipay" style="display: inline-block">
                <img id="alipay_qr" style="padding-bottom:5px;" src="/assets/images/alipay.jpg" alt="Alipay"/>
                <p style="color: #0ba8e4; text-align:center">支付宝 · 赏一块煎饼</p>
            </div>
        </div>`
        });
    d.show();
}

$(window).resize(function() {
    if ($('#sidebar').css("width") == "0px" || $('#sidebar').css("display") == "none") {
        $('.header-inner').css("padding-right", "0px");
        $('.main-inner').css("padding-right", "0px");
    } else if ($('#sidebar').css("width") == "0px"){
        $('.header-inner').css("padding-right", "0px");
        $('.main-inner').css("padding-right", "0px");
    } else {
        $('.header-inner').css("padding-right", "320px");
    }
});

ikeGetAllQuestions();
ikeGetSiteCommentsCount();