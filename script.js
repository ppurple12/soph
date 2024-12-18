const face = document.getElementById('face');

// Function to move the face to a random position
function moveFace() {
  const x = Math.random() * (window.innerWidth - face.offsetWidth);
  const y = Math.random() * (window.innerHeight - face.offsetHeight);
  face.style.left = `${x}px`;
  face.style.top = `${y}px`;
}

// Event listener to detect mouse proximity
face.addEventListener('mouseenter', moveFace);

// Initial random position
window.addEventListener('load', () => {
  moveFace();
});

// Add mousemove event listener to body
document.body.addEventListener('mousemove', function(event) {
    // Get mouse position
    const x = event.clientX;
    const y = event.clientY;
  
    // Create sparkle element
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    document.body.appendChild(sparkle);
  
    // Set sparkle position at mouse coordinates
    sparkle.style.left = `${x - 5}px`;  // Centering the sparkle on cursor
    sparkle.style.top = `${y - 5}px`;
  
    // Remove sparkle after animation ends (0.5s)
    setTimeout(() => {
      sparkle.remove();
    }, 500); // Remove sparkle after 0.5 seconds
  });

// Get the title element
const title = document.getElementById('curved-title');

// Function to generate small hearts
function generateSmallHearts(e) {
  const heartCount = 4; // Number of small hearts to appear
  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement('div');
    heart.classList.add('small-heart');
    
    // Randomly position the heart around the title
    const x = (Math.random() - 0.5) * 100; // Random horizontal spread
    const y = (Math.random() - 0.5) * 100; // Random vertical spread
    
    heart.style.left = `${e.clientX + x}px`;
    heart.style.top = `${e.clientY + y}px`;
    
    // Append the heart to the body
    document.body.appendChild(heart);
    
    // Remove the heart after animation is complete
    setTimeout(() => heart.remove(), 2000);
  }
}

// Add event listener to title
title.addEventListener('mouseenter', generateSmallHearts);
