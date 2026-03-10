const tips = [
    "Fresh water is a must!",
    "Playtime reduces stress.",
    "Check paws after walks.",
    "Healthy food = Happy pet."
];

function createHub() {
    const name = document.getElementById('petName').value;
    const type = document.getElementById('petType').value;

    if(name && type) {
        document.getElementById('resName').innerText = name;
        document.getElementById('resType').innerText = type;
        
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        document.getElementById('dailyTip').innerText = randomTip;

        document.getElementById('passport').style.display = 'block';
    } else {
        alert("Arey, please fill the details!");
    }
}

function logMood(mood) {
    document.getElementById('moodStatus').innerText = "Status: " + mood;
}
