---
layout: page
title: 最新公告
permalink: /news/
---

{% assign seconds_of_a_week = 604800 %}
{% assign now = site.time | date: '%s' | plus: 0 %}

<ul class="indent-list">
  {% for post in site.posts %}

  {% assign post_date = post.date | date: '%s' | plus: 0 %}
  {% assign time_span = now | minus: post_date %}

  <li style="padding: 5px 0">
    <a href="{{ post.url }}">
      <span>{{ post.date | date: '%Y-%m-%d' }}</span>
      <span style="margin-left:5px">{{ post.title }}</span>
    </a>
    {% if forloop.index == 1 %}
      <span style="margin-left:5px" class="label label-danger">最新</span>
    {% endif %}
    </li>
  {% endfor %}
</ul>
