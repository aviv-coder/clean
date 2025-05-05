function toggleMenu() {
    const menu = document.getElementById('side-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function toggleAccessibility() {
    document.body.classList.toggle('high-contrast');
    document.body.classList.toggle('inverted');
    document.body.classList.toggle('grayscale');
    document.body.classList.toggle('highlight-links');
}

let textSize = 16;

function changeTextSize(action) {
    if (action === 'increase' && textSize < 24) {
        textSize += 2;
    } else if (action === 'decrease' && textSize > 12) {
        textSize -= 2;
    }
    document.body.style.fontSize = textSize + 'px';
}

function resetAccessibility() {
    document.body.classList.remove('high-contrast', 'inverted', 'grayscale', 'highlight-links');
    textSize = 16;
    document.body.style.fontSize = '16px';
}
