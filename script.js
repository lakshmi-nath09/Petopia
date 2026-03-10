function createHub() {
    const name = document.getElementById('petName').value;
    if(name) {
        document.getElementById('resName').innerText = name;
        document.getElementById('passport').style.display = 'block';
    } else {
        alert("Arey! Enter pet name first.");
    }
}

function bookAppointment(serviceName) {
    const petName = document.getElementById('petName').value || "My Pet";
    
    // This creates a custom message
    const message = `Hello ${serviceName}, I would like to book an appointment for my pet, ${petName}!`;
    
    // This opens the user's email app with the message ready!
    // In a real app, this would go to a database.
    window.location.href = `mailto:care@petopiahub.com?subject=Booking for ${petName}&body=${message}`;
    
    alert(`Arey! Opening your mail to book with ${serviceName}.`);
}
