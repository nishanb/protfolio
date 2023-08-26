// Check if the session storage contains the last execution timestamp
const lastExecutionTimestamp = sessionStorage.getItem('lastExecutionTimestamp');

// Get the current date and time
const currentDate = new Date();

// If there's no stored timestamp or the stored timestamp is from a previous day, execute the fetch and update the stored timestamp in session storage
if (!lastExecutionTimestamp || new Date(lastExecutionTimestamp).getDate() !== currentDate.getDate()) {
    fetch('https://eool6f1uvkdvuh0.m.pipedream.net/?project=website');
    sessionStorage.setItem('lastExecutionTimestamp', currentDate);
}