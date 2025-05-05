document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("accessibility-toggle");
    const menu = document.getElementById("accessibility-menu");
  
    toggleButton.addEventListener("click", () => {
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
  
    document.getElementById("increase-text").addEventListener("click", () => {
      document.body.style.fontSize = "larger";
    });
  
    document.getElementById("decrease-text").addEventListener("click", () => {
      document.body.style.fontSize = "smaller";
    });
  
    document.getElementById("high-contrast").addEventListener("click", () => {
      document.body.classList.toggle("high-contrast");
    });
  
    document.getElementById("invert-colors").addEventListener("click", () => {
      document.body.classList.toggle("invert-colors");
    });
  
    document.getElementById("grayscale").addEventListener("click", () => {
      document.body.classList.toggle("grayscale");
    });
  
    document.getElementById("highlight-links").addEventListener("click", () => {
      document.body.classList.toggle("highlight-links");
    });
  
    document.getElementById("reset-accessibility").addEventListener("click", () => {
      document.body.style.fontSize = "";
      document.body.classList.remove("high-contrast", "invert-colors", "grayscale", "highlight-links");
    });
  });
  