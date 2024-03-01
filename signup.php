<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <title>Course Signup</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <script src="./js/signup.js"></script>
  <link rel="stylesheet" href="./css/signup.css" />

</head>

<body>
  <section>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <span></span> <span></span> <span></span> <span></span> <span></span>
    <div class="signup">
      <div class="content">
        <h2>Sign Up</h2>

        <form action="" method="post" class="form">
          <div class="inputBox">
            <input type="text" required name="uname" /> <i>Name</i>
          </div>

          <div class="inputGroup">
            <div class="inputBox">
              <input type="text" required name="username" /><i>Username</i>
            </div>

            <div class="inputBox">
              <input type="text" required name="phone" /> <i>Phone</i>
            </div>

            <div class="inputBox">
              <input type="text" required name="age" /> <i>Age</i>
            </div>

            <div class="inputBox">
              <input type="text" required name="branch" /> <i>Branch</i>
            </div>

            <div class="inputBox">
              <input type="password" required name="upassword" /> <i>Password</i>
            </div>

            <div class="inputBox">
              <input type="password" required name="confirmPassword" /> <i>Confirm Password</i>
            </div>
          </div>

          <div class="links">
            Already have an account?<a href="./login.html" id="login-link">
              Login</a>
          </div>

          <div class="inputBox">
            <input type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  </section>
  <?php
  error_reporting(E_ALL);
  ini_set('display_errors', 1);
  // Check if the form is submitted
  function validateForm($username, $name, $phone, $age, $branch, $password, $confirmPassword): bool
  {
    // Validate username
    if (!preg_match("/^[a-zA-Z0-9]*$/", $username)) {
      echo '<script>alert("Only characters allowed")</script>';
      return false;
    }

    // Validate name
    if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
      echo '<script>alert("Only letters and white space allowed")</script>';
      return false;
    }

    // Validate phone
    if (!preg_match("/^[0-9]*$/", $phone) || strlen($phone) != 10) {
      echo '<script>alert("Enter 10 digit number")</script>';
      return false;
    }

    // Validate age
    if (!preg_match("/^[0-9]*$/", $age) || $age > 100 || $age < 0) {
      echo '<script>alert("Enter valid age")</script>';
      return false;
    }

    // Validate branch
    if (!preg_match("/^[a-zA-Z ]*$/", $branch)) {
      echo '<script>alert("Only letters and white space allowed")</script>';
      return false;
    }

    // Validate password
    if (strlen($password) < 8) {
      echo '<script>alert("Password must be at least 8 characters long")</script>';
      return false;
    }

    // Validate password confirmation
    if ($password != $confirmPassword) {
      echo '<script>alert("Confirm password do not match")</script>';
      return false;
    }

    // If no errors, return true
    return true;
  }
  if ($_POST) {
    $username = $_POST["username"];
    $uname = $_POST["uname"];
    $phone = $_POST["phone"];
    $age = $_POST["age"];
    $branch = $_POST["branch"];
    $upassword = $_POST["upassword"];
    $confirm_password = $_POST["confirmPassword"];

    if (validateForm($username, $uname, $phone, $age, $branch, $upassword, $confirm_password)) {
      // Connect to MySQL database
      $conn = new mysqli("localhost", "admin", "", "Course");
      // Check connection
      if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
      }
      // Prepare and execute SQL query to insert data into the database
      $sql = "INSERT INTO Student (username, name, phone, age, branch, password) VALUES ('$username', '$uname', '$phone', '$age', '$branch', '$upassword')";
      if (mysqli_query($conn, $sql)) {
        echo '<script>window.location.href = "./login.html"</script>';
      }
      // else {
      //   echo '<script>alert("Error: " . mysqli_error($conn)")</script>';
      // }
      // Close database connection
      mysqli_close($conn);
    }
  }
  ?>

</body>

</html>