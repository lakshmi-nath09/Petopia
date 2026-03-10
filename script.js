function createHub() {
    const name = document.getElementById('petName').value;
    const type = document.getElementById('petType').value;

    if(name && type) {
        // Update the display text
        document.getElementById('resName').innerText = name;
        document.getElementById('resType').innerText = type;
        
        // Show the passport card
        document.getElementById('passport').style.display = 'block';
        
        // Clear the mood status for a fresh start
        document.getElementById('moodStatus').innerText = "";
    } else {
        alert("Arey! Please fill out the Pet Name and Breed first.");
    }
}

function logMood(mood) {
    const name = document.getElementById('petName').value || "Your pet";
    document.getElementById('moodStatus').innerText = `${name} is feeling ${mood} today!`;
}
