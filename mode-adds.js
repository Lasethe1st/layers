const body = document.querySelector('body');
const currentMode = body.getAttribute("data-mode");
const lightElement = document.querySelector('[data-mode="light"]');
const darkElement = document.querySelector('[data-mode="dark"]');

const lightClasses = lightElement.getAttribute("class").split(" ");
const darkClasses = darkElement.getAttribute("class").split(" ");

if (currentMode === "light") {
  body.classList.add(lightClasses[0]);
} else if (currentMode === "dark") {
  body.classList.add(darkClasses[0]);
}
