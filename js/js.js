$(document).ready(function (event) {
  $("#navContent").load("nav.html");

  $("a").on("click", function () {
    console.log("a click happened");
  });
});

// const loadNav = () => {
//   $("#navContent").load("nav.html");
//   console.log("I am here in the JS FILE");
// };
