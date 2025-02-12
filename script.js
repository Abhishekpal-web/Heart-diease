// Toggle the mobile menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

// Handle the form submission for prediction
document.getElementById("predictionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const age = document.getElementById("age").value;
    const bloodPressure = document.getElementById("bloodPressure").value;
    const cholesterol = document.getElementById("cholesterol").value;
    const heartRate = document.getElementById("heartRate").value;

    // Dummy prediction logic (replace this with actual prediction logic/API call)
    const prediction = Math.random() > 0.5 ? "High Risk" : "Low Risk";

    // Display result
    document.getElementById("result").innerText = `Prediction: ${prediction}`;
});




// Function to show the prediction form and hide home content
function showPredictionForm() {
    document.getElementById("homePageContent").style.display = "none"; // Hide home content
    document.getElementById("predictionFormContainer").style.display = "block"; // Show prediction form
}

// Function to show the home page and hide prediction form
function showHomePage() {
    document.getElementById("homePageContent").style.display = "block"; // Show home content
    document.getElementById("predictionFormContainer").style.display = "none"; // Hide prediction form
}

// Handle the prediction form submission and show result
function showResult(event) {
    event.preventDefault(); // Prevent page reload

    // You can add prediction logic here, for now, just display the form values as the result
    const age = document.getElementById('age').value;
    const bloodPressure = document.getElementById('bloodPressure').value;
    const cholesterol = document.getElementById('cholesterol').value;
    const heartRate = document.getElementById('heartRate').value;

    const result = `Prediction for Age: ${age}, Blood Pressure: ${bloodPressure}, Cholesterol: ${cholesterol}, Heart Rate: ${heartRate}. (Prediction logic goes here!)`;
    
    document.getElementById('result').textContent = result;
}


// Toggle the visibility of the hamburger menu links
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Function to show the prediction form and hide home content
function showPredictionForm() {
    document.getElementById("homePageContent").style.display = "none"; // Hide home content
    document.getElementById("predictionFormContainer").style.display = "block"; // Show prediction form
}

// Function to show the home page and hide prediction form
function showHomePage() {
    document.getElementById("homePageContent").style.display = "block"; // Show home content
    document.getElementById("predictionFormContainer").style.display = "none"; // Hide prediction form
}

// Handle the prediction form submission and show result
function showResult(event) {
    event.preventDefault(); // Prevent page reload

    // You can add prediction logic here, for now, just display the form values as the result
    const age = document.getElementById('age').value;
    const bloodPressure = document.getElementById('bloodPressure').value;
    const cholesterol = document.getElementById('cholesterol').value;
    const heartRate = document.getElementById('heartRate').value;

    const result = `Prediction for Age: ${age}, Blood Pressure: ${bloodPressure}, Cholesterol: ${cholesterol}, Heart Rate: ${heartRate}. (Prediction logic goes here!)`;
    
    document.getElementById('result').textContent = result;
}
