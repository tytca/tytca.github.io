---
layout: page
title: 最新公告
permalink: /news/
---

<ul>
  {% for post in site.posts %}
  <li><a href="{{ post.url }}"><span>{{ post.date | date: '%Y-%m-%d' }}</span><span style="margin-left:10px">{{ post.title }}</span></a></li>
  {% endfor %}
</ul>
