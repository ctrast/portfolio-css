$(document).ready(function (event) {
  $("li").on("click", function () {
    menuBars();
  });
});

function menuBars() {
  var x = document.getElementById("menu");
  console.log("Hello", x.className)
  if (x.className === "topnav") {
    x.className += " responsive";
  } else{
    x.className = "topnav"
  }
}
