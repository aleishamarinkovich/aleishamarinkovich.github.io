document.addEventListener('DOMContentLoaded', () => {
  // Select the element containing the text
  const magsElement = document.getElementById('mags');

  const wordsClass = magsElement.getElementsByClassName('words');

  if (!magsElement || !wordsClass) {
    console.error('Element with ID \'mags\' or Class \'words\' not found.');
    return;
  }

  // Wrap each character in a <span> for individual animation
  function wrapTextInSpans(element) {
    const textContent = element.innerHTML;
    const wrappedText = [...textContent].map(char => {
      // Preserve spaces by converting them to non-breaking spaces
      return char === ' ' ? ' ' : `<span class="letter">${char}</span>`;
    }).join('');
    element.innerHTML = wrappedText;
  }

  wrapTextInSpans(wordsClass);

  // Add mouse event listeners
  wordsClass.addEventListener('mouseenter', () => {
    const letters = wordsClass.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
      letter.style.transition = `transform 0.3s ease ${index * 0.05}s`;
      letter.style.transform = `translate(${randomOffset()}px, ${randomOffset()}px)`;
    });
  });

  // magsElement.addEventListener('mouseleave', () => {
  //   const letters = magsElement.querySelectorAll('.letter');
  //   letters.forEach(letter => {
  //     letter.style.transition = 'transform 0.3s ease';
  //     letter.style.transform = 'translate(0, 0)';
  //   });
  // });

  // Generate a random offset for animation
  function randomOffset() {
    return Math.floor(Math.random() * 20 - 10); // Random value between -10 and 10
  }
});