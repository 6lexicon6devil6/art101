/**
 * Author: Alexis Schulz
 * Created: 03.10.2021
 * License: Public Domain
 **/

//function getJokesFromAjax(){
  $.ajax({
      // The URL for the request (from the api docs)
      url: "http://xkcd.com/info.0.json",
      // The data to send (will be converted to a query string)
      data: {
              // here is where any data required by the api
              //   goes (check the api docs)
          //    id: 123,
          //    api_key: "blahblahblah",
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
          $("#results p").append("<h3>"+data.title+"</h3>");
          $("#results p").append("<img src="+data.img+">");
      },
      // What we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) {
          // do stuff
          console.log("Error:", textStatus, errorThrown);
      }
  })
//}

//$("#activate").click(getJokesFromAjax);
