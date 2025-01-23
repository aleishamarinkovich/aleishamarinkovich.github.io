import DOMpurify from 'dompurify';

document.addEventListener('DOMContentLoaded', () => {
  // Select the element containing the text and
  // Wrap each character in a <span> for individual animation
  function wrapTextInSpans(ids) {
    ids.forEach((id) => {
      const getElement = document.getElementById(id);
      if (!getElement) {
        console.error(`Element with ID ${id} not found.`);
      }
      const wrappedText = getElement.textContent
        .split('')
        .map((char) => {
          // Preserve spaces by converting them to non-breaking spaces
          return char === ' ' ? ' ' : `<span class="letter">${char}</span>`;
        })
        .join('');
      // DOMpurify library used to sanitize the HTML content & prevent XSS attacks.
      const cleanText = DOMpurify.sanitize(wrappedText);
      getElement.innerHTML = cleanText;
    });
  }

  wrapTextInSpans(['name', 'bio', 'italic']);

  // Add mouse event listeners
  const letters = document.querySelectorAll('.letter');
  letters.forEach((letter) => {
    letter.addEventListener('mouseenter', () => {
      letter.style.transition = 'transform 0.3s ease';
      letter.style.transform = `translate(${randomOffset()}px, ${randomOffset()}px)`;
    });
  });

  // Generate a random offset for animation
  function randomOffset() {
    return Math.floor(Math.random() * 300 - 150); // Random value between -10 and 10
  }
});
