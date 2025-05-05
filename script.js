// הפעלת כפתור המבורגר
function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
  }
  
  // פונקציות נגישות
  function toggleAccessibility() {
    const menu = document.getElementById('accessibility-menu');
    menu.classList.toggle('active');
  }
  
  function increaseText() {
    document.body.style.fontSize = '18px';
  }
  
  function decreaseText() {
    document.body.style.fontSize = '14px';
  }
  
  function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
  }
  
  function toggleInvertColors() {
    document.body.classList.toggle('invert-colors');
  }
  
  function toggleGrayScale() {
    document.body.classList.toggle('gray-scale');
  }
  
  function highlightLinks() {
    const links = document.querySelectorAll('a');
    links.forEach(link => link.classList.toggle('highlighted'));
  }
  
  function resetAccessibility() {
    document.body.style.fontSize = '16px';
    document.body.classList.remove('high-contrast', 'invert-colors', 'gray-scale');
    const links = document.querySelectorAll('a');
    links.forEach(link => link.classList.remove('highlighted'));
  }
  