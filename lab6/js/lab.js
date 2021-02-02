/**
 * Author: Alexis Schulz
 * Created: 02.01.2021
 * License: Public Domain
 **/

 //Define Variables
 myTransport = ["Truck", "Rides from friends"];

 myMainRide = {
   make: "Dodge",
   model: "Dakota",
   color: "White",
   year: 1997,
   age : function() {
     return 2021 - age;
   }
 }

 //output
 document.writeln("Kinds of transportation I use: ", myTransport, "</br>)");
 document.writeln("My Main Ride: <pre>",
      JSON.stringify(myMainRide, null, '\t'), "</pre>");
