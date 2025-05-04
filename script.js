// JavaScript להוספת נגישות

// כפתור ניגודיות גבוהה
const toggleContrast = document.getElementById('toggle-contrast');
toggleContrast.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// כפתור גודל טקסט
const toggleFontSize = document.getElementById('toggle-font-size');
toggleFontSize.addEventListener('click', () => {
    document.body.classList.toggle('large-font');
});
