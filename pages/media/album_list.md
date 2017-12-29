---
layout: page
title: 電子相簿
permalink: /media/album_list
empty_array: []
---


{% assign album_folders = page.empty_array %}
{% assign album_covers = page.empty_array %}

{% for image in site.static_files reversed %}
{% if image.path contains 'static_files/album' %}

{% assign album_path = image.path | replace: '/static_files/album/', '' %}
{% assign album_path = album_path | split: '/' %}
{% assign album_path = album_path[0] %}

{% if album_folders contains album_path %}
{% else %}
{% assign album_folders = album_folders | push: album_path %}
{% assign album_covers = album_covers | push: image.path %}
{% endif %}

{% endif %}
{% endfor %}


<div class="row">
{% for cover_image in album_covers %}

{% assign index = forloop.index | minus:1 %}
{% assign album_folder = album_folders[index] %}
{% assign album_page = album_folder | prepend: '/media/album/' %}



<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6" style="margin-bottom: 10px; height: 210px">
    <a href="{{album_page}}">
    <div class="img-div" style="background-image: url('{{cover_image}}');">
    </div>
    </a>
    <div class="album-title"><a href="{{album_page}}">{{album_folder}}</a></div>
</div>

{% endfor %}
</div>
