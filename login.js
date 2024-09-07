const form = document.getElementById('loginForm');
const userIdInput = document.getElementById('userId');


const users = [
    { userId: '12345', password: 'admin@123' },
    { userId: '17062', password: 'pallavi@123' },
    { userId: '67890', password: 'pass@123' }
];

function login() {
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-message');

    // Validation
    if (!userId || !password) {
        errorMsg.textContent = 'Both User ID and Password are required.';
        return;
    }

    const user = users.find(u => u.userId === userId);

    if (!user) {
        errorMsg.textContent = 'ID not valid';
        return;
    }

    if (user.password !== password) {
        errorMsg.textContent = 'Password not valid';
        return;
    }

    if (userId !== user.userId && password !== user.password) {
        errorMsg.textContent = 'Both ID/password not valid';
        return;
    }

    
    window.location.href = 'home.html';
}
