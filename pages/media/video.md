---
layout: page
title: 影音播放
permalink: /media/video
---

<h3>網站影片</h3>
<p></p>

{% for video in site.static_files %}
{% if video.path contains 'static_files/video' %}
<video width="560" height="315" controls>
  <source src="{{video.path}}" type="video/mp4">
Your browser does not support the video tag.
</video>
{% endif %}
{% endfor %}

<br>

{% if site.youtube_videos.size > 0 %}

<h3>Youtube 影片</h3>

{% for video in site.youtube_videos %}
<div>
<p>{{video.name}}</p>
<iframe width="560" height="315" src="{{video.url}}" frameborder="0" allowfullscreen></iframe>
</div>
{% endfor %}ope

{% endif %}
