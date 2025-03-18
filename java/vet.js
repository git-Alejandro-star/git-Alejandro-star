document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('animated-text');
    const text = textElement.innerText;
    
    // Clear the original text
    textElement.innerHTML = '';
    
    // Loop through each letter and wrap it in a span
    Array.from(text).forEach((letter, index) => {
        const span = document.createElement('span');
        span.classList.add('letter');
        span.innerText = letter;
        textElement.appendChild(span);
    });
});