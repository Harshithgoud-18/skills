/* =========================================
   REGISTER FORM VALIDATION
   ========================================= */

// A utility function to show an error message
function showError(errorElementId, message) {
  const errorElement = document.getElementById(errorElementId);
  errorElement.textContent = message;
}

// A utility function to clear an error message
function clearError(errorElementId) {
  const errorElement = document.getElementById(errorElementId);
  errorElement.textContent = '';
}

// A utility function to validate email format
function isValidEmail(email) {
  // A simple regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateRegister() {
  // Read the input values (trim removes extra spaces)
  const name     = document.getElementById('reg-name').value.trim();
  const email    = document.getElementById('reg-email').value.trim();
  const password = document.getElementById('reg-password').value;
  const confirm  = document.getElementById('reg-confirm').value;

  // Clear all previous error messages
  clearError('reg-name-error');
  clearError('reg-email-error');
  clearError('reg-password-error');
  clearError('reg-confirm-error');

  let isValid = true; // Flag to track if the whole form is valid

  // --- Validate Name ---
  if (name === '') {
    showError('reg-name-error', '⚠️ Full name is required.');
    isValid = false;
  } else if (name.length < 3) {
    showError('reg-name-error', '⚠️ Name must be at least 3 characters.');
    isValid = false;
  }

  // --- Validate Email ---
  if (email === '') {
    showError('reg-email-error', '⚠️ Email address is required.');
    isValid = false;
  } else if (!isValidEmail(email)) {
    showError('reg-email-error', '⚠️ Please enter a valid email address.');
    isValid = false;
  }

  // --- Validate Password ---
  if (password === '') {
    showError('reg-password-error', '⚠️ Password is required.');
    isValid = false;
  } else if (password.length < 6) {
    showError('reg-password-error', '⚠️ Password must be at least 6 characters.');
    isValid = false;
  }

  // --- Validate Confirm Password ---
  if (confirm === '') {
    showError('reg-confirm-error', '⚠️ Please confirm your password.');
    isValid = false;
  } else if (confirm !== password) {
    showError('reg-confirm-error', '⚠️ Passwords do not match.');
    isValid = false;
  }

  // If all validations passed, show success
  if (isValid) {
    document.getElementById('reg-success').textContent =
      '✅ Registration successful! Welcome to skills, ' + name + '!';
    alert('✅ Registration successful! Welcome to skills, ' + name + '!');
  }
}
