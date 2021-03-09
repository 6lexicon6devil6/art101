//author: Alexis Schulz
//date: 2021/02/09
//license:
for (var index=0; index<10; index++){
  //block of code
  console.log(inside);
  //create 10 div elements with a class name box inside the container div
  var boxEl = document.createElement("div");
  boxEl.className="box";
  //add an id box_id_0_box_id_1...
  //boxEl.id="box_id_"+(index+1);
  //boxEl.id="box_id_"+(index);
  document.getElementById('container').appendChild(boxEl);
}

//translate to jQuery
for (var index=0; index<10; index++){
  //jQuery block of code
  $('container').append("<div id='box_id_"+(index+1)+"' class= 'box'></div>");
}
