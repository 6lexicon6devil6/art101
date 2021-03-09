/**
 * Author: Alexis Schulz
 * Created: 02.17.2021
 * License: Public Domain
 **/

 // Return the houses
function.sortingHat(str) {
  length = str.length;
  mod = length % 4;
  if (mod == 0){
    return "Gryffindor"
  }
  else if (mod == 1){
    return "Ravenclaw"
  }
  else if (mod == 2){
    return "Slytherin"
  }
  else if (mod == 3){
    return "Hufflepuff"
  }
}

//create an event listener attached to #button
var myButton = document.getElementById("button");
myButton.addEventListener("click", function(){
//that gets the value of #input and assigns it to a variable name
  var name = document.getElementById("input").value;
//appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into" + house
  var house = sortingHat(name);
//appends a new styled paragraph to output that says "The Sorting Hat has sorted you"
  newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})
