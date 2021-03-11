function getajaxdata(){
 $.ajax({
   url:"http://xkcd.com/info.0.json",
   type:"GET",
   datatype:"json",
   success: successFun,
   error: errorFun,
   complete: function(xhr,status){
     console.log("the request has been done");

  }
})
function successFun(result){
   console.log(result)
  //$('#ajax_text').append(result);
  // $('#ajax_text').html(result.extract );
 }
function errorFun(xhr,status,strErr){
 console.log("error "+strErr);
}
// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://genius.p.rapidapi.com/artists/16775/songs",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "77f9d9ff88msh9bc93d96fb25dacp1b7291jsn5be61e72cb6e",
// 		"x-rapidapi-host": "genius.p.rapidapi.com"
// 	}
// };
//
// $.ajax(settings).done(function (response) {
//   $('#ajax_text').append("<img src="+response.response.songs[0].song_art_image_url+">");
// 	console.log(response);
// });
 }
//
$('#ajax_get').click(getajaxdata)
