---
layout: page
comments: true
title: 终于等到你来了！ 
type: messages
featured: messages.jpg
featured_position: center
---

欢迎来我的博客做客！  
Welcome to my blog.

**你可以：**
- 下面留言告诉我你来了 😉 Let me know you are here
- 你可以问我一个问题，我会如实回答 🥳 Ask me a question
- 点下面那只熊开始你的博客之旅 👇 Tap that bear to get started

<a href="/"><img style="width:60%" src="/assets/img/posts/rilakkuma.jpg"/></a>

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