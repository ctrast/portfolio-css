$(document).ready(function(event){
   // alert("Thanks for Visting!");
    LoadNav();
});

const LoadNav = () => {
    $("#navContent").load("nav.html"); 
    console.log("I am here in the JS FILE");
  };