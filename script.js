// script.js
const facts = [
    "Being 20 years old and having an affinity for mountains suggests you're likely an adventurous young adult who values outdoor experiences and physical challenges.",
    "Your interest in mountains at this age indicates you're probably someone who appreciates nature and might be pursuing outdoor-related activities.",
    "As a mountain enthusiast in your early twenties, you're likely someone who values personal growth and challenge.",
    "Your connection to mountains suggests you might be environmentally conscious and possibly involved in nature conservation efforts.",
    "Being 20 and drawn to mountains indicates you might prefer meaningful experiences over material possessions."
];

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

document.getElementById('generateBtn').addEventListener('click', () => {
    const factDisplay = document.getElementById('factDisplay');
    factDisplay.textContent = getRandomFact();
});

// Display initial fact when page loads
window.onload = () => {
    document.getElementById('factDisplay').textContent = getRandomFact();
};
