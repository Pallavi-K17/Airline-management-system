function submitRegistration() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;
    const errorMessage = document.getElementById('error-message');

    const dobDate = new Date(dob);
    const minimumDate = new Date('1924-01-01');

    if (!firstName || !lastName || !dob || !email || !address || !contact) {
        errorMessage.textContent = "All fields are mandatory.";
        return;
    }

    if (dobDate < minimumDate) {
        errorMessage.textContent = "Choose a date greater than 1/1/1924.";
        return;
    }

    if (!/^\d{10}$/.test(contact)) {
        errorMessage.textContent = "Enter a valid contact number.";
        return;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = "Enter a valid email id.";
        return;
    }

    const passengerId = Math.floor(Math.random() * 100000);
    const password = firstName.slice(0, 4) + "@123";
    alert(`Passenger Registration is successful. Your ID: ${passengerId}, Password: ${password}`);
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

function confirmReset(event) {
    const confirmReset = confirm("Is it Okay to reset?");
    if (!confirmReset) {
        event.preventDefault();
    }
}
