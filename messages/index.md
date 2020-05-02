---
layout: page
comments: true
title: 留言板 Messages
type: messages
featured: messages.jpg
featured_position: center
---

欢迎来我的博客做客！  
Welcome to my blog.

## 老马有问必答时间

你可以问我**一个**问题，问什么都行，只要你问我就会回答你 🥳。  
You can ask me **one** question of whatever, I promise I will answer it 😉.

## 讲述你的故事

你也可以给我讲一个小故事，或者单纯的跟我打个招呼 🥳。  
You could also tell me a story, or simply say hello 😉.

![轻松熊](/assets/img/posts/rilakkuma.jpg)

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