


document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.count');

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const duration = 2000; // total animation duration in ms
    const frameRate = 60; // frames per second
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const easeOutQuad = t => t * (2 - t); // easing function

    const updateCount = () => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      const current = Math.round(target * progress);
      counter.innerText = current + '+';
      if(frame < totalFrames){
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target + '+';
      }
    };

    updateCount();
  });
});

const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const heroHeight = hero.offsetHeight;
  if(window.scrollY > heroHeight - 80){ // adjust 80px for navbar height
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navItems = navLinks.querySelectorAll('a'); // Select all links inside navbar

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


  function copyEmail() {
    const email = "your.email@example.com";
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied to clipboard!");
    });
  }




 document.addEventListener("DOMContentLoaded", function() {
  const hireMeBtn = document.getElementById("hireMeBtn");
  const emailContainer = document.getElementById("emailTextContainer");
  const copyBtn = document.getElementById("copyEmailBtn");
  const closeBtn = document.getElementById("closeEmailBtn");
  const emailText = document.getElementById("emailText").textContent;

  hireMeBtn.addEventListener("click", function(e) {
    e.preventDefault();
    // Toggle visibility instead of just showing
    if (emailContainer.style.display === "flex") {
      emailContainer.style.display = "none";
    } else {
      emailContainer.style.display = "flex";
    }
  });

  copyBtn.addEventListener("click", function(e) {
    e.stopPropagation(); // prevent triggering container click
    navigator.clipboard.writeText(emailText).then(() => {
      alert("Email copied!");
    });
  });

  closeBtn.addEventListener("click", function(e) {
    e.stopPropagation(); // prevent triggering container click
    emailContainer.style.display = "none";
  });
});


