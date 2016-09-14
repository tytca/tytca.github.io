---
layout: page
title: 最新公告
permalink: /news/
---

<ul>
  {% for post in site.categories.news %}
  <li><a href="{{ post.url }}">{{ post.date | date: '%Y-%m-%d' }} {{ post.title }}</a></li>
  {% endfor %}
</ul>
