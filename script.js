document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.

  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");
  let q1 = document.querySelector(".q1");
  let q2 = document.querySelector(".q2");
  let q3 = document.querySelector(".q3");


  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.
  let imgSrc;
  let character;
  let q1Score;
  let q2Score;
  let q3Score;



  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.
    userQ1 = q1.value.toLowerCase();
    userQ2 = q2.value.toLowerCase();
    userQ3 = q3.value.toLowerCase();



   // task 7: create a conditional statement for the responses to Question 1 based on the user input.
  if (userQ1 === "a") {
     q1score = 1
  }
  else if (userQ1 === "b"){
    q1score = 2
  }
  else if (userQ1 === "c"){
    q1score = 3
  }
  else if (userQ1 === "d"){
    q1score = 4
  }
    



    // task 8: create a conditional statement for the responses to Question 2 based on the user input.
    if (userQ2 === "a") {
      q2score = 1
    }
    else if (userQ2 === "b"){
      q2score = 2
    }
    else if (userQ2 === "c"){
      q2score = 3
    }
    else if (userQ2 === "d"){
      q2score = 4
    }




    // task 9: create a conditional statement for the responses to Question 3 based on the user input.
    if (userQ3 === "a"){
      q3score = 1
    }
    if (userQ3 === "b"){
      q3score = 2
    }
    if (userQ3 === "c"){
      q3score = 3
    }
    if (userQ3 === "d"){
      q3score = 4
    }


    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.
    let result = (q1score + q2score + q3score);




    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.
if (result === 3 ){
  displayResult.innerHTML = "You are totally Amy!"
}

if (result === 6 ){
  displayResult.innerHTML = "You are totally Knuckles!"
}
if (result === 9 ){
  displayResult.innerHTML = "You are totally Sonic!"
}    
if (result === 16 ){
  displayResult.innerHTML = "You are totally Tails!"
}  




}

};