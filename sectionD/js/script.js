console.log("javascript loaded");
var nameVar = "Alexis";
var numVar = 5;
console.log(numVar);
numVar = 25;
console.log(numVar);

//How to declare a Function
function myFirstFunction (){
  console.log("this is my first function!!!");
}
//myFirstFunction();

function comparingNumbers(firstNum, secondNum){
  console.log("First Number: "+firstNum+" second Number: "+secondNum");
  console.log("First Number is great than second Number" + (firstNum>secondNum));
  console.log(numVar);
  firstNum = 11;
  secondNum = 12;
  console.log("First Number: "+firstNum+" second Number: "+secondNum");
  console.log("First Number is greater than second Number " + (firstNum>secondNum));
  numVar=numVar+3;


}
comparingNumbers(2,1);
console.log(numVar);
numVar = numVar + 40;//68
comparingNumbers(12, 18);
console.log(numVar);
//console.log(firstNum);
