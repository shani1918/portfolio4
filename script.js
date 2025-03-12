const typingText = document.querySelector('.typing-text');
const words = ['Frontend Designer', 'UI/UX Designer', 'Web Developer'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeDelay = 200;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeDelay = 100;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typeDelay = 200;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeDelay = 2000; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(type, typeDelay);
}

// Start the typing animation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
});
