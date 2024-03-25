const feedbackForm = document.getElementById("feedback-form");
const ratingInputs = document.getElementsByName("rating");
const reasoningInput = document.getElementById("reasoning");
const wantMethodSelect = document.getElementById("wantMethod");
const preferMethodSelect = document.getElementById("preferMethod");
const commentsInput = document.getElementById("comments");
const warningRating = document.getElementById("warning-rating");
const warningReasoning = document.getElementById("warning-reasoning");
const thanksPage = document.getElementById("thanks-page");

// Function to get the selected rating value from radio buttons
function getRadioValue() {
  for (let i = 0; i < ratingInputs.length; i++) {
    if (ratingInputs[i].checked) {
      return ratingInputs[i].value;
    }
  }
  return ""
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  const ratingValue = getRadioValue();

  // Validate form input
  if (ratingValue === "") {
    warningRating.style.display = "flex";
    document.getElementById("question-1").style.border = "1px solid red";
    window.scrollTo(0, 0);
    return;
  } else {
    warningRating.style.display = "none";
    document.getElementById("question-1").style.border = "none";
  }
  if (reasoningInput.value === "") {
    warningReasoning.style.display = "flex";
    document.getElementById("question-2").style.border = "1px solid red";
    window.scrollTo(0, 0);
    return;
  } else {
    warningReasoning.style.display = "none";
    document.getElementById("question-2").style.border = "none";
  }
  
  const emailBody = "Rating: " + ratingValue + "%0D%0AReasoning: " + reasoningInput.value + "%0D%0AWant Method: " + wantMethodSelect.value + "%0D%0APrefer Method: " + preferMethodSelect.value + "%0D%0AAdditional Comments: " + commentsInput.value;
  const subject = "Comments Form Submission";

  const mailToLink = "mailto:chamika20221406.iit.ac.lk?subject=" + subject + "&body=" + emailBody;
  window.open(mailToLink);

  feedbackForm.style.display = "none";
  thanksPage.style.display = "flex";

  setTimeout(function() {
    window.location.href = "Home.html";
  }, 5000);
}

// Add event listener to the form submission
feedbackForm.addEventListener("submit", handleSubmit);
