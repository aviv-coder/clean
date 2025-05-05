let isHighContrast = false;
let isInverted = false;
let isGrayscale = false;

function increaseFontSize() {
    document.body.style.fontSize = '1.2em';
}

function decreaseFontSize() {
    document.body.style.fontSize = '0.8em';
}

function toggleContrast() {
    isHighContrast = !isHighContrast;
    document.body.style.backgroundColor = isHighContrast ? 'black' : 'white';
    document.body.style.color = isHighContrast ? 'white' : 'black';
}

function invertColors() {
    isInverted = !isInverted;
    document.body.style.filter = isInverted ? 'invert(1)' : 'invert(0)';
}

function grayscale() {
    isGrayscale = !isGrayscale;
    document.body.style.filter = isGrayscale ? 'grayscale(1)' : 'grayscale(0)';
}

function highlightLinks() {
    let links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.backgroundColor = 'yellow';
    });
}

function resetSettings() {
    document.body.style.fontSize = '1em';
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    document.body.style.filter = 'none';
    let links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.backgroundColor = 'transparent';
    });
}
