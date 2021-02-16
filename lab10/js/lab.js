/**
 * Author: Alexis Schulz
 * Created: 02.15.2021
 * License: Public Domain
 **/

//find the button element
buttonEl = document.getElementById("submit-button");
console.log("button element:", buttonEl);

//add an event listener to buttonEl
buttonEl.addEventListener("click", function(){
  //var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  //find the name element
  nameEl = document.getElementById("name");
  //get value from name element
  var userName = nameEl.value;
  //modify the name
  userName.toLowerCase().split('').sort().reverse().join('');
  console.log("user name:", userName);
  //find the title element
  titleEl = document.getElementById("title");
  //change that element
  titleEl.innerText = userName;
});


function sortUsername() {
     var userName = window.prompt("Tell me your name so I can fix it.");
     console.log("userName =", userName);
     // split string to array
     var nameArray = userName.split('');
     console.log("nameArray =", nameArray);
     // sort the nameArray
     var nameArraySort = nameArray.sort();
     console.log("nameArraySort =", nameArraySort);
     // join array back to a string
     var nameSorted = nameArraySort.join('');
     console.log("nameSorted =", nameSorted);
     return nameSorted;
}
