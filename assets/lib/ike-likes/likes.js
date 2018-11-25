// 存储服务
var { Query, User } = AV;
AV.init('Xi5VsRj4dwyX1J6RpS2GAXQk-gzGzoHsz', '0Ow1AYiqjkG8a9wz41OmP1jz');
function ikeLike(pageUrl){
    if (reward_clicked) return;
    if (pageUrl == null || pageUrl == '') return;
    var Likes = AV.Object.extend('Likes');
    var like = new Likes();
    like.set('url', pageUrl);
    like.set('likes', 1);
    like.save().then(function (like) {
        reward_clicked = true;
        ikeGetLikes(pageUrl);
    }, function (error) {
        console.error('Submit like failed, error message: ' + error.message);
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