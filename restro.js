

const API_KEY = 'OOWXpoUEONXfPKhYRwT7vd6WbQSySDXYWeyJMBpMjMthbe40KbNMZomD';

// Function to fetch video from Pexels API
async function fetchVideo(query, videoElementId) {
  try {
    const response = await fetch(`https://api.pexels.com/videos/search?query=${query}&per_page=1`, {
      headers: {
        Authorization: API_KEY
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch video for query: ${query}`);
    }

    const data = await response.json();
    const videoUrl = data.videos[0]?.video_files?.find(file => file.width >= 1280)?.link || data.videos[0]?.video_files[0]?.link;

    if (videoUrl) {
      const videoElement = document.getElementById(videoElementId);
      if (videoElement) {
        videoElement.innerHTML = `<source src="${videoUrl}" type="video/mp4">`;
      } else {
        console.warn(`Video element with ID "${videoElementId}" not found.`);
      }
    }
  } catch (error) {
    console.error(error);
  }
}

// Fetch videos for both sections
fetchVideo('indian food top view vegetable cut', 'bg-video'); 
fetchVideo('wheat farm hand slow green 4k', 'bg-resources'); 




let lastScrollY = window.scrollY; // Store last scroll position
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling Down -> Hide Navbar
        navbar.classList.add("hide");
    } else {
      navbar.classList.remove("hide");
        
    }
    lastScrollY = window.scrollY; // Update last scroll position
});
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Toggle menu on click
  menuToggle.addEventListener("click", (event) => {
      navLinks.classList.toggle("active");
      event.stopPropagation(); // Prevent this click from bubbling to the document
  });

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
      if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
          navLinks.classList.remove("active");
      }
  });

  // Smooth scrolling for menu links
  document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent default anchor behavior
          const targetId = link.getAttribute('data-target');
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
          }

          // Hide menu after clicking a link
          navLinks.classList.remove("active");
      });
  });
});
