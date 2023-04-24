// Get the element with the attribute wl-time
const wlTimeElement = document.querySelector('[wl-time]');

// Function to update the time on the element
function updateTime() {
  // Get the current time in Nigeria
  const date = new Date();
  const options = { timeZone: 'Africa/Lagos', hour: 'numeric', minute: 'numeric' };
  const nigeriaTime = date.toLocaleString('en-US', options);

  // Update the element with the Nigeria time
  wlTimeElement.textContent = nigeriaTime;
}

// Update the time every second
setInterval(updateTime, 1000);
