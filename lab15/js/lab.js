/**
 * Author: Alexis Schulz
 * Created: 03.10.2021
 * License: Public Domain
 **/

function getJokesFromAjax(){
  $.ajax({
      // The URL for the request (from the api docs)
      url: "https://api.chucknorris.io/jokes/random",
      // The data to send (will be converted to a query string)
      data: {
              // here is where any data required by the api
              //   goes (check the api docs)
          //    id: 123,
              //api_key: "A1Qc4dwgGFNcdDdCO7DFPdC5CqIok0pS1VFkVHRV",
            },
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType : "json",
      // What do we do when the api call is successful
      //   all the action goes in here
      success: function(data) {
          // do stuff
          console.log(data);
          $("#results p").html(data.value);
      },
      // What we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) {
          // do stuff
          console.log("Error:", textStatus, errorThrown);
      }
  })
}
//function getNasaImage(){
  $.ajax({
      // The URL for the request (from the api docs)
      url: "https://api.nasa.gov/planetary/apod?api_key=A1Qc4dwgGFNcdDdCO7DFPdC5CqIok0pS1VFkVHRV",
      // The data to send (will be converted to a query string)
      data: {
              // here is where any data required by the api
              //   goes (check the api docs)
          //    id: 123,
              api_key: "A1Qc4dwgGFNcdDdCO7DFPdC5CqIok0pS1VFkVHRV",
            },
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType : "json",
      // What do we do when the api call is successful
      //   all the action goes in here
      success: function(data) {
          // do stuff
          console.log(data);
          $("#results p").append("<img src="+data.hdurl+">");
      },
      // What we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) {
          // do stuff
          console.log("Error:", textStatus, errorThrown);
      }
  })
//}




$("#activate").click(getJokesFromAjax);
