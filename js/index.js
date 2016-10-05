function quiz() {

  var question1 = prompt("wat is 2 +3?");
  if (question1 === "5") {
    alert("correct");
  } else {
    alert("incorrect");
  }

  var question2 = prompt("do you like meatballs");
  if (question2 === "yes") {
    alert("correct");
  } else {
    alert("incorrect everyone likes meatballs");
  }

  var question3 = prompt("what is the capital of Austria?");
  if(question3 === "vien") {
    alert("correct");
  }else{
      alert("incorrect, correct answer is Vien");
  }
  
var question4 = prompt("what is the capital of Sweden");
  if(question4 === "stockholm") {
    alert("correct");
  }else{
      alert("incorrect, correct answer is Stockholm");
  }


var question5 = prompt("what is the capital of Australia");
if (question5 === "Canberra"){
  alert("correct")
}else{
  alert("incorrect, correct answer is Canberra")
}
}