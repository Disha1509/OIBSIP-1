// pro.js

// Change navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.style.backgroundColor = window.scrollY > 50 ? "rgba(0, 0, 0, 0.8)" : "transparent";
});

// Show dynamic content based on menu item
function showContent(section) {
  const content = document.getElementById("content");
  const sections = {
    home: "This is the home page.",
    about: "This is the about page.",
    services: "This is the services page.",
    contact: "This is the contact page."
  };
  const title = section.charAt(0).toUpperCase() + section.slice(1);
  const message = sections[section] || "Welcome to my website.";

  content.innerHTML = `
    <h1>${title}</h1>
    <p>${message}</p>
  `;
}
