---
layout: page
comments: true
title: 午夜拾零 第2集 巧雕石狮
type: ikema
featured: the-midnight-tales.jpg
featured_position: center
---
<img src="/assets/img/posts/midnight-tales/story/02/01.jpg"/><br/>
<a style="cursor:pointer" onclick="showVideo()" title="去收看 午夜拾零 第2集 巧雕石狮"><img src="/assets/img/posts/midnight-tales/story/02/03.jpg"/></a><br/>
<img src="/assets/img/posts/midnight-tales/story/02/04.jpg"/><br/>
<img src="/assets/img/posts/midnight-tales/qr.gif" alt="扫码关注午夜拾零"/>

<script language="javascript">
function showVideo(){
    dialog({
        title: '午夜拾零',
	    content: '请选择观看平台',
        quickClose: true,
        button: [
            {
                value: '去B站观看',
                callback: function () {
                    window.open("https://www.bilibili.com/video/av51235585/");
                    this.content('正在跳转，请稍候...');
                    var that = this;
                    setTimeout(function () {
                        that.close().remove();
                    }, 2000);
                    return false;
                },
                autofocus: true
            },
            {
                value: '去Youtube观看',
                callback: function () {
                    window.open("https://www.youtube.com/watch?v=ETrvgt1E77M&list=PL5TIvm2gr37JVHe9RY1ErZV1dnsbn-DkQ&index=2");
                    this.content('正在跳转，请稍候...');
                    var that = this;
                    setTimeout(function () {
                        that.close().remove();
                    }, 2000);
                    return false;
                }
            }
        ]
    }).show();
}
</script>