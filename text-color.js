function updateTextColors() {
  // Get the body element
  var body = document.getElementsByTagName('body')[0];

  // Check if the body has the class 'light-mode'
  if (body.classList.contains('light-mode')) {
    // Get all elements with the attribute 'neue-dark-text' and value '1d1d1f'
    var darkElements = document.querySelectorAll('[neue-dark-text="1d1d1f"]');

    // Set the text color of each dark element to its attribute value
    for (var i = 0; i < darkElements.length; i++) {
      setTextColor(darkElements[i], '#' + darkElements[i].getAttribute('neue-dark-text'));
    }
  }

  // Check if the body has the class 'dark-mode'
  if (body.classList.contains('dark-mode')) {
    // Get all elements with the attribute 'neue-white-text' and value 'f0f0f0'
    var whiteElements = document.querySelectorAll('[neue-white-text="f0f0f0"]');

    // Set the text color of each white element to its attribute value
    for (var i = 0; i < whiteElements.length; i++) {
      setTextColor(whiteElements[i], '#' + whiteElements[i].getAttribute('neue-white-text'));
    }
  }
}

// Call the function when the page loads
updateTextColors();

// Watch for changes in the class of the body element
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.attributeName === 'class') {
      updateTextColors();
    }
  });
});

observer.observe(document.body, { attributes: true });

function setTextColor(element, color) {
  // Check if the element is a text node
  if (element.nodeType === Node.TEXT_NODE) {
    // Create a new span element to wrap the text node
    var span = document.createElement('span');
    span.style.color = color;
    span.textContent = element.textContent;
    element.parentNode.replaceChild(span, element);
  } else {
    // Recursively set the text color of child elements
    var children = element.childNodes;
    for (var i = 0; i < children.length; i++) {
      setTextColor(children[i], color);
    }
  }
}
