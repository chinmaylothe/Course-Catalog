<?php
// Check if the form is submitted
if ($_POST) {
    // Retrieve form data
    $uname = $_POST["uname"];
    $username = $_POST["username"];
    $phone = $_POST["phone"];
    $age = $_POST["age"];
    $branch = $_POST["branch"];
    $upassword = $_POST["upassword"];

    // $uname = "chinmay";
    // $username = "chinmay";
    // $phone = "1234567890";
    // $age = "20";
    // $branch = "CSE";
    // $upassword = "123";
    // $adipass = "";
    // Validate form data (you can add more validation as per your requirements)
    // if (empty($uname) || empty($username) || empty($phone) || empty($age) || empty($branch) || empty($upassword)) {
    //     echo "Please fill in all the fields.";
    // } else {
        // Connect to MySQL database
        $conn = new mysqli("localhost", "adi", "", "Course");
        
        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }
        else{
            echo "Connected successfully";

        }

        echo "Going for connection";
        // Prepare and execute SQL query to insert data into the database
        $sql = "INSERT INTO Student (username, name, phone, age, branch, password) VALUES ('$username', '$uname', '$phone', '$age', '$branch', '$upassword')";
        echo "Command created";
        if (mysqli_query($conn, $sql)) {
            echo "User registered successfully.";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }

        // Close database connection
        mysqli_close($conn);
    // }
}