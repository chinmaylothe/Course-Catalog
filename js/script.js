//write a javascript code for validation of user for course registration website

//function to validate the form

function validateForm() {
    //get the value of the name field
    var name = document.getElementById('name').value;
    //get the value of the email field
    var email = document.getElementById('email').value;
    //get the value of the password field
    var password = document.getElementById('password').value;
    //get the value of the confirm password field
    var confirm_password = document.getElementById('confirm_password').value;
    //get the value of the phone number field
    var phone = document.getElementById('phone').value;
    //get the value of the address field
    var address = document.getElementById('address').value;
    //get the value of the city field
    var city = document.getElementById('city').value;
    //get the value of the state field
    var state = document.getElementById('state').value;
    //get the value of the zip code field
    var zip = document.getElementById('zip').value;
    //get the value of the country field
    var country = document.getElementById('country').value;
    //get the value of the course field
    var course = document.getElementById('course').value;
    //get the value of the course duration field
    var course_duration = document.getElementById('course_duration').value;
    //get the value of the course fee field
    var course_fee = document.getElementById('course_fee').value;
    //get the value of the course start date field
    var course_start_date = document.getElementById('course_start_date').value;
    //get the value of the course end date field
    var course_end_date = document.getElementById('course_end_date').value;
    //get the value of the course start time field
    var course_start_time = document.getElementById('course_start_time').value;
    //get the value of the course end time field
    var course_end_time = document.getElementById('course_end_time').value;
    //get the value of the course description field
    var course_description = document.getElementById('course_description').value;
    //get the value of the course instructor field
    var course_instructor = document.getElementById('course_instructor').value;
    //get the value of the course instructor email field
    var course_instructor_email = document.getElementById('course_instructor_email').value;
    //get the value of the course instructor phone field
    var course_instructor_phone = document.getElementById('course_instructor_phone').value
}

//function to validate name field
function validateName() {
    //get the value of the name field
    var name = document.getElementById('name').value;
    //check if the name field is empty
    if (name == "") {
        //display error message
        document.getElementById('name_error').innerHTML = "Name is required";
        //set the focus on the name field
        document.getElementById('name').focus();
        //return false
        return false;
    }
    //check if the name field is less than 3 characters
    if (name.length < 3) {
        //display error message
        document.getElementById('name_error').innerHTML = "Name must be at least 3 characters";
        //set the focus on the name field
        document.getElementById('name').focus();
        //return false
        return false;
    }
    //check if the name field is greater than 20 characters
    if (name.length > 20) {
        //display error message
        document.getElementById('name_error').innerHTML = "Name must be less than 20 characters";
        //set the focus on the name field
        document.getElementById('name').focus();
        //return false
        return false;
    }
    //check if the name field is valid
    if (!name.match(/^[a-zA-Z]+$/)) {
        //display error message
        document.getElementById('name_error').innerHTML = "Name must contain only alphabets";
        //set the focus on the name field
        document.getElementById('name').focus();
        //return false
        return false;
    }
    //if the name field is valid, return true
    else {
        return true;
    }
}

//function to validate email field

function validateEmail() {
    //get the value of the email field
    var email = document.getElementById('email').value;
    //check if the email field is empty
    if (email == "") {
        //display error message
        document.getElementById('email_error').innerHTML = "Email is required";
        //set the focus on the email field
        document.getElementById('email').focus();
        //return false
        return false;
    }
    //check if the email field is valid
    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        //display error message
        document.getElementById('email_error').innerHTML = "Email is invalid";
        //set the focus on the email field
        document.getElementById('email').focus();
        //return false
        return false;
    }
    //if the email field is valid, return true
    else {
        return true;
    }
}

//function to validate password field

function validatePassword() {
    //get the value of the password field
    var password = document.getElementById('password').value;
    //check if the password field is empty
    if (password == "") {
        //display error message
        document.getElementById('password_error').innerHTML = "Password is required";
        //set the focus on the password field
        document.getElementById('password').focus();
        //return false
        return false;
    }
    //check if the password field is less than 8 characters
    if (password.length < 8) {
        //display error message
        document.getElementById('password_error').innerHTML = "Password must be at least 8 characters";
        //set the focus on the password field
        document.getElementById('password').focus();
        //return false
        return false;
    }
    //check if the password field is greater than 20 characters
    if (password.length > 20) {
        //display error message
        document.getElementById('password_error').innerHTML = "Password must be less than 20 characters";
        //set the focus on the password field
        document.getElementById('password').focus();
        //return false
        return false;
    }
    //if the password field is valid, return true
    else {
        return true;
    }
}
