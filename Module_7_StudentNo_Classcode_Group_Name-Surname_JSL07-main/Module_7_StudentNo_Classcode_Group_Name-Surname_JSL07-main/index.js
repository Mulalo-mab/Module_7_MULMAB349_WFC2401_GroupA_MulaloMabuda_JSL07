// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
  // Get references to DOM elements
  const cardForm = document.getElementById('cardForm'); // Form element
  const modal = document.getElementById('modal'); // Modal element
  const certificateContent = document.getElementById('certificateContent'); // Certificate content element
  const closeModal = document.querySelector('.close'); // Close button element within modal

  // Hide the modal initially
  modal.style.display = 'none';

  // Add event listener for the form submission
  cardForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // 🚨 Get input values
    const studentNameInput = document.getElementById('studentName'); // Student name input
    const personalMessageInput = document.getElementById('personalMessage'); // Personalized message input
    const courseNameInput = document.getElementById('courseName'); // Course name input

    // Extract values from input elements
    const studentName = studentNameInput.value; // Student name
    const personalMessage = personalMessageInput.value; // Personalized message
    const courseName = courseNameInput.value || "a course"; // Course name with fallback

    // Validate inputs
    if (studentName.trim() === '' || personalMessage.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    // 🚨 Generate certificate content dynamically
    certificateContent.innerHTML = `
        <div class="certificate">
          <h3>Certificate of Achievement</h3>
          <p>This certifies that</p>
          <h2>${studentName}</h2>
          <p>has successfully completed the course</p>
          <h2>${courseName}</h2>
          <p>with distinction.</p>
          <p>${personalMessage}</p>
          <img src="logo.png" alt="Logo"> <!-- Image element for logo -->
        </div>
      `;
  
    //  Display the modal
    modal.style.display = 'block';

    // Clear the form inputs
    studentNameInput.value = '';
    personalMessageInput.value = '';
    if(courseNameInput) courseNameInput.value = '';
  });

  //  🚨 Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });
});
