const elementsWithNeueBg = document.querySelectorAll('[neue-bg]');

// Define a function to update the background color of the neue-bg elements
function updateNeueBgBackground() {
  const bodyBackgroundColor = getComputedStyle(document.body).backgroundColor;
  elementsWithNeueBg.forEach(el => {
    el.style.backgroundColor = bodyBackgroundColor;
  });
}

// Call the function once on page load to set the initial background color
updateNeueBgBackground();

// Listen for changes to the body element's class and update the neue-bg elements accordingly
const bodyObserver = new MutationObserver(updateNeueBgBackground);
bodyObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
