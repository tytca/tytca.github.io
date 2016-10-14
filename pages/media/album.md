---
layout: page
title: 電子相簿
permalink: /media/album
---

<div class="row">

{% for image in site.static_files %}
{% if image.path contains 'static_files/album' %}

<div class="col-lg-2 col-md-3 col-sm-3 col-xs-3">
    <a style="cursor: pointer" onclick="openImage(this)" data-img="{{image.path}}">
    <div class="img-div" style="background-image: url('{{image.path}}');">
    </div>
    </a>
</div>

{% endif %}
{% endfor %}

</div>

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- The Close Button -->
  <span class="close" onclick="document.getElementById('myModal').style.display='none'">&times;</span>

  <!-- Modal Content (The Image) -->
  <img class="modal-content" id="img01">

  <!-- Modal Caption (Image Text) -->
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
function openImage(a){
    modal.style.display = "block";
    modalImg.src = a.getAttribute("data-img");
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

modal.onclick = function() {
  modal.style.display = "none";
};

</script>
