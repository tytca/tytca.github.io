---
layout: page
title: 電子相簿
permalink: /gallery/
---

{% for image in site.static_files %}
{% if image.path contains 'files/gallery' %}
<img width="300px" src="{{image.path}}"/>

{% endif %}
{% endfor %}
