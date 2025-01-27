import DOMpurify from 'dompurify';

document.addEventListener('DOMContentLoaded', () => {
  // Select the element containing the text and
  // wrap each character in a <span> for individual animation
  function getElementsById(ids) {
    ids.forEach((id) => {
      const getElement = document.getElementById(id);
      if (!getElement) {
        console.error(`Element with ID ${id} not found.`);
      }
      const formatedText = getElement.textContent
        .replace(/\s*\n\s*/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      const wrappedText = wrapWords(formatedText);

      // DOMpurify library used to sanitize the HTML content & prevent XSS attacks.
      const cleanText = DOMpurify.sanitize(wrappedText);
      getElement.innerHTML = cleanText;
    });
  }
  // wrapWords handles the destructuring of each word into individual characters.
  // Each character is wrapped in its own a span element for individual animation.
  // Each group of characters that forms a word is then wrapped in a span.
  // This is so the words can be laid out correctly while still allowing for individual character animation.
  function wrapWords(text) {
    // The words are split and put into an array.
    return text.split(' ').map(wrapWord).join(' ');
  }
  // Destructure each character in the word and wrap it in a span element.
  function wrapWord(wordsToWrap) {
    // The SPREAD operator destructures the words into individual characters.
    const words = [...wordsToWrap].map(wrapCharacters).join('');
    return `<span class="word">${words}</span>`;
  }

  function wrapCharacters(char) {
    return `<span class="letter">${char}</span>`;
  }

  // Generate a random offset for animation
  function randomOffset() {
    let randomDigit = Math.random();
    console.log(randomDigit);
    return Math.floor(randomDigit * 300 - 150);
  }

  // Add mouse-enter event-listeners to each letter.
  function addEventListeners() {
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter) => {
      letter.addEventListener('mouseenter', () => {
        letter.style.transition = 'transform 1s ease';
        letter.style.transform = `translate(${randomOffset()}px, ${randomOffset()}px)`;
      });
    });
  }

  getElementsById(['name', 'bio', 'italic']);
  addEventListeners();
});
