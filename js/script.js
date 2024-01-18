// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Sample data - replace this with your actual data or fetch it from an API
  var coursesData = [
    { title: "Course 1", description: "Description of Course 1." },
    { title: "Course 2", description: "Description of Course 2." },
    { title: "Course 3", description: "Description of Course 3." },
  ];

  // Function to create a course card element
  function createCourseCard(course) {
    var card = document.createElement('div');
    card.className = 'col-md-4 course';

    card.innerHTML = `
      <div class="card">
        <img src="https://via.placeholder.com/300" class="card-img-top" alt="Course Image">
        <div class="card-body">
          <h5 class="card-title">${course.title}</h5>
          <p class="card-text">${course.description}</p>
          <button class="btn btn-primary">Learn More</button>
        </div>
      </div>
    `;

    return card;
  }

  // Function to render courses on the page
  function renderCourses(courses) {
    var coursesContainer = document.getElementById('courses');

    // Clear existing content
    coursesContainer.innerHTML = '';

    // Create and append course cards
    courses.forEach(function (course) {
      var card = createCourseCard(course);
      coursesContainer.appendChild(card);
    });
  }

  // Initial rendering of courses
  renderCourses(coursesData);

  // Sample event listener for course buttons (replace with actual functionality)
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-primary')) {
      var courseTitle = event.target.closest('.course').querySelector('.card-title').textContent;
      alert('You clicked on: ' + courseTitle);
      // Add logic to display detailed information or navigate to a course page
    }
  });

  // Add more dynamic functionalities as needed
});
