/**
 * Author: Alexis Schulz
 * Created: 02.01.2021
 * License: Public Domain
 **/

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

    //  Output
    document.writeln("Oh hey, I've fixed your name: ",
      sortUserName(), "</br>");
