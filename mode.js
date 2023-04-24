const lightElements = document.querySelectorAll('[light-toggle]');
const darkElements = document.querySelectorAll('[dark-toggle]');
const body = document.querySelector('body');

lightElements.forEach(element => {
  element.addEventListener('click', () => {
    body.setAttribute("data-mode", "light");
    localStorage.setItem('mode', 'light');
    const lightClasses = element.getAttribute("class").split(" ");
    body.classList.remove(...body.classList);
    body.classList.add(lightClasses[0]);
  });
});

darkElements.forEach(element => {
  element.addEventListener('click', () => {
    body.setAttribute("data-mode", "dark");
    localStorage.setItem('mode', 'dark');
    const darkClasses = element.getAttribute("class").split(" ");
    body.classList.remove(...body.classList);
    body.classList.add(darkClasses[0]);
  });
});

const currentMode = localStorage.getItem('mode');
if (currentMode === 'light') {
  body.setAttribute("data-mode", "light");
  const lightClasses = lightElements[0].getAttribute("class").split(" ");
  body.classList.remove(...body.classList);
  body.classList.add(lightClasses[0]);
} else if (currentMode === 'dark') {
  body.setAttribute("data-mode", "dark");
  const darkClasses = darkElements[0].getAttribute("class").split(" ");
  body.classList.remove(...body.classList);
  body.classList.add(darkClasses[0]);
}
