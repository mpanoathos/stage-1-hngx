const body=document.body;
const modeToogle=document.getElementById('mode-toogle')

function updateDateTime() {
    const currentDate = new Date();
    const dateElement = document.getElementById('current-date');
    const timeElement = document.getElementById('current-time');

    const optionsDate = { weekday: 'long' }; // Specify 'long' for the full day name
    dateElement.textContent = currentDate.toLocaleDateString(undefined, optionsDate);

    const optionsTime = { timeZone: 'UTC', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    timeElement.textContent = currentDate.toLocaleTimeString(undefined, optionsTime);
}

// Call the updateDateTime function to display the initial day and time
updateDateTime();

// Set up a timer to update the day and time every second (1000 milliseconds)
setInterval(updateDateTime, 1000);
function toggleMode() {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    }
}
// Event listener for the mode toggle button
modeToogle.addEventListener('click', toggleMode);
