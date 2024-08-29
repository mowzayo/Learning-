// Add event listener for form submission
document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get input elements and values
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim(); // Remove any leading/trailing whitespace
    const emailError = document.getElementById('emailError'); 
    const successMessage = document.getElementById('successMessage');
    const userEmailElement = document.getElementById('userEmail');

    // Validate the email
    if (validateEmail(email)) {
        // Clear previous errors and styles
        emailError.textContent = ''; 
        emailError.style.display = 'none'; 
        emailInput.classList.remove('input-error'); 
        emailInput.style.color = ''; // Reset text color

        // Show success message and reset the form
        successMessage.classList.add('visible'); // Use CSS class for visibility
        document.querySelector('.wrapper1').classList.add('visible'); // Ensure wrapper is shown
        userEmailElement.textContent = email; 
        emailInput.value = ''; // Clear the email input
    } else {
        // Show error message and apply error styles
        emailError.textContent = 'Valid email required.';
        emailError.style.display = 'inline'; 
        emailInput.classList.add('input-error'); 
        emailInput.style.color = 'red'; 
    }
});

// Function to validate the email using a regular expression
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Add event listener for dismiss button
document.getElementById('dismissButton').addEventListener('click', function() {
    // Hide success message and wrapper
    document.getElementById('successMessage').classList.remove('visible');
    document.querySelector('.wrapper1').classList.remove('visible');
});
