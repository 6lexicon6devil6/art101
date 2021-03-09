//var navBar = document.getElementById("nav");
//navBar.innerHTML= "this is the navigation bar";
function submitBio(){
var nameVar = document.getElementById("name").value;
console.log(nameVar);
var emailVar = document.getElementById("email").value;
console.log(emailVar);
var messageVar = document.getElementById("message").value;
console.log(messageVar);
document.getElementById('name_email_id').innerHTML ="Name: "+ nameVar+" Email: "+emailVar;
document.getElementById('bio_id').innerHTML =messageVar;
}
document.getElementById("submit_bio_id").addEventListener('click',submitBio);

// function colorMe(){
//   //document.getElementById('name_email_id').style.color = "magenta";
//   document.getElementById('name_email_id').classList.add('color_me');
//   //document.getElementById('name_email_id').className += ' color_me';
// }
// document.getElementById("color_me_id").addEventListener('click',colorMe);
$('#color_me_id').click(function(){
  $('#name_email_id').toggleClass("color_me");
 })
