document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    const nameInput = document.querySelector('input[name="name"]');
    const usernameInput = document.querySelector('input[name="username"]');
    const phoneInput = document.querySelector('input[name="phone"]');
    const ageInput = document.querySelector('input[name="age"]');
    const branchInput = document.querySelector('input[name="branch"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const confirmPasswordInput = document.querySelector(
      'input[name="confirmPassword"]'
    );
    const signUpButton = document.querySelector('input[type="submit"]');
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      validateForm();
    });
  
    function validateForm() {
      let isValid = true;
  
      // Validation for Name
      if (!nameInput.value.trim()) {
        isValid = false;
        alert("Name cannot be blank");
      }
  
      // Validation for Username
      if (!usernameInput.value.trim()) {
        isValid = false;
        alert("Username cannot be blank");
      }
  
      // Validation for Phone
      const phoneValue = phoneInput.value.trim();
      if (!phoneValue) {
        isValid = false;
        alert("Phone number cannot be blank");
      } else if (!/^\d+$/.test(phoneValue)) {
        isValid = false;
        alert("Phone number must contain only digits");
      }
  
      // Validation for Age
      const ageValue = ageInput.value.trim();
      if (!ageValue) {
        isValid = false;
        alert("Age cannot be blank");
      } else if (isNaN(ageValue)) {
        isValid = false;
        alert("Age must be a number");
      }
  
      // Validation for Branch
      if (!branchInput.value.trim()) {
        isValid = false;
        alert("Branch cannot be blank");
      }
  
      // Validation for Password
      const passwordValue = passwordInput.value.trim();
      if (!passwordValue) {
        isValid = false;
        alert("Password cannot be blank");
      } else if (passwordValue.length < 8) {
        isValid = false;
        alert("Password must be at least 8 characters long");
      }
  
      // Validation for Confirm Password
      const confirmPasswordValue = confirmPasswordInput.value.trim();
      if (!confirmPasswordValue) {
        isValid = false;
        alert("Confirm password cannot be blank");
      } else if (confirmPasswordValue !== passwordValue) {
        isValid = false;
        alert("Passwords do not match. Please re-enter");
      }
  
      // If form is valid, submit the form
      if (isValid) {
        form.submit();
      }
    }
  });
  