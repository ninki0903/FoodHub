function placeOrder() {
    alert("Redirecting to the order placement page...");
    window.location.href = "#"; // Replace with actual order page link
}
function trackOrder() {
    let orderId = document.getElementById("order-id").value;
    let statusDiv = document.getElementById("order-status");

    if (orderId === "12345") {
        statusDiv.innerHTML = "🚚 Your order is <b>Out for Delivery</b>. Estimated arrival: 30 mins.";
        statusDiv.style.color = "green";
    } else if (orderId === "67890") {
        statusDiv.innerHTML = "✅ Your order has been <b>Delivered</b>.";
        statusDiv.style.color = "blue";
    } else {
        statusDiv.innerHTML = "⚠️ Order Not Found. Please check your Order ID.";
        statusDiv.style.color = "red";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const statusButtons = document.querySelectorAll(".status-btn");

    statusButtons.forEach(button => {
        button.addEventListener("click", function () {
            let row = this.closest("tr");  // Get the row where the button is clicked
            let statusCell = row.querySelector(".status"); // Find status cell

            if (statusCell.textContent.trim() === "Pending") {
                statusCell.textContent = "Out for Delivery";
                statusCell.className = "status out-for-delivery";
                this.textContent = "Mark as Delivered";
            } else if (statusCell.textContent.trim() === "Out for Delivery") {
                statusCell.textContent = "Delivered";
                statusCell.className = "status delivered";
                this.remove(); // Remove button after delivery is complete
            }
        });
    });
});
function showIngredients() {
    const foodItem = document.getElementById("food-item").value;
    const ingredientsText = document.getElementById("ingredients-text");
    const ingredientsBox = document.getElementById("ingredients-display");

    // Ingredient data
    const ingredients = {
        burger: ["Beef Patty", "Lettuce", "Cheese"],
        pizza: ["Tomato Sauce", "Mozzarella", "Pepperoni"],
        pasta: ["Pasta", "Garlic", "Parmesan Cheese"]
    };

    // Show ingredients
    if (ingredients[foodItem]) {
        ingredientsText.innerHTML = ingredients[foodItem].join(", ");
        ingredientsBox.style.display = "block"; // Show box
    } else {
        ingredientsText.innerHTML = "Select a food item to see ingredients.";
        ingredientsBox.style.display = "none"; // Hide if no selection
    }
}
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let userType = document.getElementById("userType").value;

    // Sample login validation (Replace with real authentication logic)
    if ((email === "admin@foodhub.com" && password === "admin123" && userType === "admin") ||
        (email === "customer@foodhub.com" && password === "customer123" && userType === "customer")) {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to home page
    } else {
        alert("Invalid credentials! Please try again.");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    let adminPassword = "admin123"; // Change this to your preferred password

    let enteredPassword = localStorage.getItem("adminAuthenticated");

    if (!enteredPassword || enteredPassword !== adminPassword) {
        let userInput = prompt("🔑 Enter Admin Password:");

        if (userInput === adminPassword) {
            localStorage.setItem("adminAuthenticated", adminPassword);
            alert("✅ Access Granted!");
        } else {
            alert("⛔ Access Denied! Redirecting...");
            window.location.href = "index.html"; // Redirect to home or another page
        }
    }
});
