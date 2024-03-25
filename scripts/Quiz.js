//Start Section
let start = document.querySelector("#start");

//guide Section
let guide = document.querySelector("#guide");
let exit = document.querySelector("#exit");
let continueBtn = document.querySelector("#continue");

//Quiz Section
let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");

//question Section
let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");

//Multiple Choices Of Questions
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

//correct and next Button
let out  =  document.querySelector("#out");
let total_correct = document.querySelector("#total_correct");
let next_question = document.querySelector("#next_question");

//Result Section
let result = document.querySelector("#result");
let points = document.querySelector("#points");
let quit = document.querySelector("#quit");
let startAgain = document.querySelector("#startAgain");

//Get All 'H4' From Quiz Section (MCQS)
let choice_que = document.querySelectorAll(".choice_que");


let index = 0;
let interval;

//total points
let correct = 0;

//store Answer Value
let UserAns = undefined;


//Creating Timer For Quiz Timer Section

let timer = 120;
let countDown = () => {
  if (timer === 0) {
    clearInterval(interval); // clear the interval
    quiz.style.display = "none"; // hide the quiz section  
    done.innerHTML = `You scored ${correct} out of ${MCQS.length} questions correctly.`;
    wrong.innerHTML =` and ${MCQS.length - correct} questions  was incorrect.`;
    spent.innerHTML = `You completed whole quiz just in ${120 - timer} seconds.`;
    result.style.display = "block";
  } else {
    timer--;
    time.innerText = Math.floor(timer / 60) + ":" + ("0" + (timer % 60)).slice(-2);
  }
};


//what happen when 'Start' Button Will Click
start.addEventListener("click", () => {
    start.style.display = "none";
    guide.style.display = "block";

});

//what happen when 'Exit' Button Will Click
exit.addEventListener("click", () => {
    start.style.display = "block";
    guide.style.display = "none";
});


out.addEventListener("click", () => {
    location.reload();
});



let loadData = () => {
    questionNo.innerText = index + 1 + ". ";
    questionText.innerText = MCQS[index].question;
    option1.innerText = MCQS[index].choice1;
    option2.innerText = MCQS[index].choice2;
    option3.innerText = MCQS[index].choice3;
    option4.innerText = MCQS[index].choice4;

}


//what happen when 'Continue' Button Will Click
continueBtn.addEventListener("click", () => {
    quiz.style.display = "block";
    guide.style.display = "none";

    loadData();

    timer = 120;
    interval = setInterval(countDown, 1000);

    total_correct.innerHTML = `${correct = 0} Out Of ${MCQS.length} Questions`;
});



let correctChoice;
choice_que.forEach((choices, choiceNo) => {
  if (choiceNo === MCQS[index].answer) {
    correctChoice = choices;
  }

  choices.addEventListener("click", () => {
    choices.classList.add("active");
    if (choiceNo === MCQS[index].answer) {
      correct++;
      choices.classList.add("correct");
    } else {
      correctChoice.classList.add("correct");
      choices.classList.add("incorrect");
    }

    //disable All Options When User Select An Option
    for (i = 0; i <= 3; i++) {
      choice_que[i].classList.add("disabled");
    }
  });
});



////what happen when 'Next' Button Will Click
next_question.addEventListener("click", () => {
    //    if index is less then MCQS.length
    if (index !== MCQS.length - 1) {
        index++;
        choice_que.forEach(removeActive => {
            removeActive.classList.remove("active");
        })

        //question
        loadData();

        //result
        total_correct.style.display = "block";
        total_correct.innerHTML = `${correct} Out Of ${MCQS.length} Questions`;
        clearInterval(interval);
        interval = setInterval(countDown, 1000);
    } else {
        index = 0;

        clearInterval(interval);
        quiz.style.display = "none";
        
        done.innerHTML = `You scored ${correct} out of ${MCQS.length} questions correctly.`;
        wrong.innerHTML =` and ${MCQS.length - correct} questions  was incorrect.`;
        spent.innerHTML = `You completed whole quiz just in ${120 - timer} seconds.`;
        result.style.display = "block";

    }
    for (i = 0; i <= 3; i++) {
        choice_que[i].classList.remove("disabled");
    }
})

//what happen when 'Quit' Button Will Click
quit.addEventListener("click", () => {
    start.style.display = "block";
    result.style.display = "none";
});

//Start Again When 'Start Again' Button Will Clicked
startAgain.addEventListener("click", () => {
    guide.style.display = "block";
    result.style.display = "none";

    timer = 120;
    interval = setInterval(countDown, 1000);
    loadData();
});
