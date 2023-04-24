// Click the appropriate toggle button based on the user's color scheme preference
function clickToggleButton() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // User prefers dark mode, click element with dark-toggle attribute
    const darkToggle = document.querySelector('[dark-toggle]');
    if (darkToggle) {
      darkToggle.click();
    }
  } else {
    // User prefers light mode, click element with light-toggle attribute
    const lightToggle = document.querySelector('[light-toggle]');
    if (lightToggle) {
      lightToggle.click();
    }
  }
}

// Call the function once on page load to set the initial state
clickToggleButton();

// Add an event listener to handle changes to the user's color scheme preference
if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', clickToggleButton);
}
