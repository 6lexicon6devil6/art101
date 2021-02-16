//author: Alexis Schulz
//date: 2021/02/09
//license:

var divEl = document.getElementbyId("div_1");
divEl.innerHTML="This is annoying";
console.log(divEl.innerHTML);
var buttonEl = document.createElement("button");
divEl.body.appendChild(buttonEl);
buttonEl.innerHTML="Press Me!";

buttonEl.onclick=function(){
  divEl.innerHTML="this is more annoying than I thought";
}
