// Open the Modal
function openModal() {
  document.getElementById("exampleModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("exampleModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// function submitButton() {
//    var uZip = document.getElementById("uZip").value;
//    var lat = '';
//    var lng = '';
//     geocoder.geocode( { 'address': uZip}, function(results, status) {
//       if (status == google.maps.GeocoderStatus.OK) {
//          lat = results[0].geometry.location.lat();
//          lng = results[0].geometry.location.lng();
//         });
//       } else {
//         alert("Geocode was not successful for the following reason: " + status);
//       }
//     });
//     alert('Latitude: ' + lat + ' Logitude: ' + lng);
// }
