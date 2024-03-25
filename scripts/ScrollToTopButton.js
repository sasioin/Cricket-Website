const scrollToTopBtn= document.getElementById("scroll-to-top");

// Function to unhide the scroll-to-top button when the user scrolls down the page
function unhideButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// Add a scroll event listener to the window object
window.addEventListener("scroll", unhideButton);

// Function to scroll the page to the top when the user clicks on the scroll-to-top button
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Add a click event listener to the scroll-to-top button
scrollToTopBtn.addEventListener("click", scrollToTop);
