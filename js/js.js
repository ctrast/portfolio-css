$(document).ready(function (event) {
  // $("#navContent").load("nav.html");

  $("a").on("click", function () {
    console.log("a click happened");
  });
});

function menuBars() {
  var x = document.getElementById("navLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
