// Script to toggle editing mode on the profile form

const editButton = document.getElementById('editButton');
const saveButton = document.getElementById('saveButton');
const formFields = document.querySelectorAll('#profileForm input, #profileForm textarea');

editButton.addEventListener('click', () => {
    formFields.forEach(field => {
        field.disabled = false;
        field.style.backgroundColor = 'white';
    });
    editButton.disabled = true;
    saveButton.disabled = false;
});

saveButton.addEventListener('click', () => {
    formFields.forEach(field => {
        field.disabled = true;
        field.style.backgroundColor = 'lightgray';
    });
    editButton.disabled = false;
    saveButton.disabled = true;

    // Logic to save the edited profile data (send to server or update local storage) goes here
    alert('Profile details have been saved!');
});
