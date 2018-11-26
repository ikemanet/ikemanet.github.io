// 存储服务
var { Query, User, Cloud } = AV;
AV.init('Xi5VsRj4dwyX1J6RpS2GAXQk-gzGzoHsz', '0Ow1AYiqjkG8a9wz41OmP1jz');

function ikeLike(pageUrl){
    if (reward_clicked) return;
    if (pageUrl == null || pageUrl == '') return;
    document.getElementById('rewardText').innerHTML = '...';
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