function validateForm() {
    // Clear previous error messages
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.textContent = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate fields
    if (!name || !email || !phone || !password || !confirmPassword) {
        errorMessageElement.textContent = 'All fields are required.';
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessageElement.textContent = 'Please enter a valid email address.';
        return false;
    }

    const phonePattern = /^\d{10}$/; // Adjust this pattern according to your phone number format
    if (!phonePattern.test(phone)) {
        errorMessageElement.textContent = 'Please enter a valid phone number.';
        return false;
    }

    if (password !== confirmPassword) {
        errorMessageElement.textContent = 'Passwords do not match.';
        return false;
    }

    // If all validations pass
    return true; // Allow form submission
}
