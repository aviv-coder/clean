document.getElementById('accessibility-button').addEventListener('click', function() {
    let menu = document.getElementById('accessibility-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });
  
  document.getElementById('toggle-contrast').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
  });
  
  document.getElementById('toggle-font-size').addEventListener('click', function() {
    document.body.classList.toggle('large-font');
  });
  