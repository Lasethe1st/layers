const stopScrollEls = document.querySelectorAll('[nw-stop-scroll]');
let isScrollingStopped = false;

stopScrollEls.forEach(stopScrollEl => {
  stopScrollEl.addEventListener('click', () => {
    const bodyEl = document.querySelector('body');
    if (isScrollingStopped) {
      bodyEl.style.overflow = 'visible';
    } else {
      bodyEl.style.overflow = 'hidden';
    }
    isScrollingStopped = !isScrollingStopped;
  });
});
