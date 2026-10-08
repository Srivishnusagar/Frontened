// Predefined static credentials
const CORRECT_USER = "admin";
const CORRECT_PASS = "password123";

// DOM Elements
const loginContainer = document.getElementById("login-container");
const dashboardContainer = document.getElementById("dashboard-container");
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");
const logoutBtn = document.getElementById("logout-btn");
const userDisplay = document.getElementById("user-display");

// Check if user is already logged in on page load
window.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        showDashboard(loggedInUser);
    }
});

// Handle Login Form Submission
loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page refresh

    const enteredUser = usernameInput.value.trim();
    const enteredPass = passwordInput.value;

    if (enteredUser === CORRECT_USER && enteredPass === CORRECT_PASS) {
        // Save session in localStorage
        localStorage.setItem("loggedInUser", enteredUser);
        errorMessage.classList.add("hidden");
        showDashboard(enteredUser);
        
        // Clear inputs
        loginForm.reset();
    } else {
        // Show error message
        errorMessage.classList.remove("hidden");
    }
});

// Handle Logout
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    dashboardContainer.classList.add("hidden");
    loginContainer.classList.remove("hidden");
});

// Helper function to switch view to Dashboard
function showDashboard(username) {
    loginContainer.classList.add("hidden");
    dashboardContainer.classList.remove("hidden");
    userDisplay.textContent = username;
}function startWorkout() {
    alert("🔥 Workout started! Let's get stronger!");
}

function openWorkout(workoutName) {
    alert("💪 Starting " + workoutName + " workout!");
}

// Smooth scrolling
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
