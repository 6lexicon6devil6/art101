/**
 * Author: Alexis Schulz
 * Created: 02.17.2021
 * License: Public Domain
 **/


$("#challenge").append("<button id=challengebutton>I am the button</button>");
$("#challengebutton").click(function(){
  $("#challenge").toggleClass("special");
})


$("#problems").append("<button id=problembutton>I am the button</button>");
$("#problembutton").click(function(){
  $("#problems").toggleClass("special");
})

$("#results").append("<button id=resultbutton>I am the button</button>");
$("#resultbutton").click(function(){
  $("#results").toggleClass("special");
})
