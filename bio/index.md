---
layout: page
comments: true
title: 我的签名档
type: messages
featured: messages.jpg
featured_position: center
---

<a href="/"><img style="width:40%" src="/assets/img/posts/rilakkuma.jpg"/></a>

嘿！小伙伴，终于等到你啦。快去看看我的新作品吧👇

**微信公众号：老马同学的相册**

打开微信，点右上角的“+”，然后搜索``老马同学的相册``的公众号关注我哦！

你可以在公众号获取专属福利，还可以下载我的作品做手机锁屏壁纸！

**Instagram：_foreverike**

打开IG，搜索``_foreverike``就可以找到我啦，别忘了给我点❤️ 也可以跟我聊天！

（请自行寻找科学上网方法）

**给我留言**

你也可以在这里给我留言，我会及时回复的！

<script>
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
    localStorage.setItem("ike.today.q2a.lasttime", nowDateStr);
</script>