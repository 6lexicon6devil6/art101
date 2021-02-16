/**
 * Author: Alexis Schulz
 * Created: 02.09.2021
 * License: Public Domain
 **/
var outputEl = document.getElementById("output");
var new1El = document.createElement("p");
new1El.innerHTML = "I have changed.";
var new2El = document.createElement("h1");
new2El.innerHTML = "What is different?";
document.body.appendChild(new1El);
document.body.appendChild(new2El);
