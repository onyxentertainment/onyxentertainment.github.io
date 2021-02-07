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

function submitButton() {
   var uName = document.getElementById("uName").value;
   var uEmail = document.getElementById("uEmail").value;
   var uPhone = document.getElementById("uPhone").value;
   var uEventType = document.getElementById("uEventType").value;
   var uEventDate = document.getElementById("uEventDate").value;
   var uEventLocation = document.getElementById("uEventLocation").value;
   var uHeard = document.getElementById("uHeard").value;
   var uComment = document.getElementById("uComment").value;
   var uDJ = document.getElementById("uDJ").value;
   var uHair = document.getElementById("uHair").value;
   var uLighting = document.getElementById("uLighting").value;
   var uPhotobooth = document.getElementById("uPhotobooth").value;
   var uPhotography = document.getElementById("uPhotography").value;
   var uVideography = document.getElementById("uVideography").value;
   var uYardGames = document.getElementById("uYardGames").value;
   var boxes=document.getElementsByTagName("input")
   var checkarr=[]
    for (var d=0; d<boxes.length; d++) {
    if((boxes[d].type=="checkbox")&&(boxes[d].checked==true))
      checkarr.push(' ' + boxes[d].value)
   		      }
   var services=checkarr.toString();
   var emailSubject="Inquiry: Onyx Entertainment Services"
   var emailBody="Name: " + uName + "\n" + "Email: " + uEmail + "\n" + "Phone: " + uPhone + "\n" + "Event Type: " + uEventType + "\n" + "Event Date: " + uEventDate + "\n" + "Event Location: " + uEventLocation + "\n" + "Heard About Onyx: " + uHeard + "\n" + "Services: " + services + "\n" + "Comments & Questions: " + uComment;
   // alert(emailSubject);
   // alert(emailBody);
   window.open("mailto:onyx.entertains@gmail.com?subject=" + encodeURIComponent(emailSubject) + "&body=" + encodeURIComponent(emailBody));

}
