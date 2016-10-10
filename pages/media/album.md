---
layout: page
title: 電子相簿
permalink: /media/album
---

<div class="img-grid">

{% for image in site.static_files %}
{% if image.path contains 'static_files/album' %}
<a href="#" onclick="openImage(this)">
  <figure>
    <img src="{{image.path}}" alt="">
  </figure>
</a>
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
    console.log(a);
    var img = a.getElementsByTagName('img')[0];
    console.log(img);
    modal.style.display = "block";
    modalImg.src = img.src;
    // captionText.innerHTML = this.alt;
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
