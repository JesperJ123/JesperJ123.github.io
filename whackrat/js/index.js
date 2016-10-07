//ADD JQUERY AND JQUERY UI BEFORE YOU WRITE YOUR JS CODE


  //ALL your JS code goes here!

  //What happens when you click an enemy
 

  

 //closing bracket for document.ready

$(document).ready(function() {
  //all code goes here
  var score = 0;

  $('.rat').click(function() {
    //this code runs when f1 clicked
    score = score + 1;
    document.getElementById('points').innerHTML = score;
  });

  $('.#').click(function() {
    //this code runs when f1 clicked
    score = score - 1;

    document.getElementById('points').innerHTML = score;
  });

  //this is for the reset button

  document.getElementById('points').innerHTML = score;
  $('.rat').hide();
  //the this keyword refers to the element that was clicked to the function

  //setTimeout function means that the function will not run after a delay -to this case it's after 2000ms/2 (miliesconds)//
  setTimeout(function() {
    $(',sun').fadeIn();
  }, 2000);

});