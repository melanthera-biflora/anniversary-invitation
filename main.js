const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionX = offset*(-0.3)-100 + "px";
})


window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=3100;
    parallax1.style.backgroundPositionY = offset*(0.1) + "px";
})

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=4800;
    parallax2.style.backgroundPositionY = offset*(-0.1) + "px";
})

window.addEventListener("DOMContentLoaded", () => {
  const audio = window.getElementById("myAudio");
  audio.play().catch(error => console.log("Autoplay failed:", error));
});

// Set the starting date
const startDate = new Date("2024-01-15"); // Replace with your start date (YYYY-MM-DD)

function updateTimeCounter() {
  const now = new Date();
  const timeDiff = now - startDate; // Difference in milliseconds

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Display the time
  document.getElementById("timeCounter").textContent = 
      `${days} days: ${hours} hours: ${minutes} minutes: ${seconds} seconds`;
}

// Update the counter every second
setInterval(updateTimeCounter, 1000);

// Call the function initially
updateTimeCounter();

function myFunction() {
    document.getElementById("check").checked = false;
  }


  
function reveal() {
var reveals = document.querySelectorAll(".reveal");
  
for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
  
window.addEventListener("scroll", reveal);