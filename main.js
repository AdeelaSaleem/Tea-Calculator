function toggleDurationFields() {
    var calculationType = document.getElementById('calculationType').value;
    var durationFields = document.getElementById('duration-fields');
    var durationLabel = document.querySelector('#duration-fields label');

    if (calculationType === 'days') {
        durationLabel.textContent = 'Enter number of days:';
    } else {
        durationLabel.textContent = 'Enter number of years:';
    }

    durationFields.style.display = 'flex';
}

function calculateTea() {
    let cupsPerDay = document.getElementById('cupsPerDay').value;
    let calculationType = document.getElementById('calculationType').value;
    let teaDuration = document.getElementById('duration').value;

    let totalNeeded, message;

    if (calculationType === 'days') {
        totalNeeded = cupsPerDay * teaDuration;
        message = `You'll need ${totalNeeded} cups for ${teaDuration} days.`;
    } else {
        totalNeeded = cupsPerDay * 365 * teaDuration;
        message = `You'll need ${totalNeeded} cups until the maximum tea duration of ${teaDuration} years.`;
    }
    

   

    document.getElementById('tea-message').innerHTML = message;
}