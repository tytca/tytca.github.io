---
layout: page
title: 電子相簿
permalink: /media/album
---

<div class="row">
{% for image in site.static_files %}
{% if image.path contains 'static_files/album' %}
  <div class="col-1-6" style="padding:30px">
    <div class="embed-container">
    <img width="300px" src="{{image.path}}"/>
    </div>
  </div>
{% endif %}
{% endfor %}
</div>
