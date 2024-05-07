// Get the scroll-up button element
var scrollUpBtn = document.getElementById("scrollUpBtn");

// Show the scroll-up button when scrolling down
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpBtn.classList.add("show");
  } else {
    scrollUpBtn.classList.remove("show");
  }
};

// Scroll to the top when the button is clicked
scrollUpBtn.addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});