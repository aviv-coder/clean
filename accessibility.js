function toggleMenu() {
    document.getElementById('sideMenu').classList.toggle('open');
}

function toggleAccessibility() {
    document.body.classList.toggle('high-contrast');
    document.body.classList.toggle('inverted');
    document.body.classList.toggle('grayscale');
}

// אפשרויות נגישות נוספות
document.body.addEventListener('keypress', function(e) {
    if (e.key === '1') { // ניגודיות גבוהה
        toggleAccessibility();
    }
    if (e.key === '2') { // היפוך צבעים
        document.body.classList.toggle('inverted');
    }
    if (e.key === '3') { // גווני אפור
        document.body.classList.toggle('grayscale');
    }
    if (e.key === '4') { // הדגשת קישורים
        document.querySelectorAll('a').forEach(link => link.classList.toggle('highlighted'));
    }
});
