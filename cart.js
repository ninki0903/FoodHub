document.addEventListener("DOMContentLoaded", function() {
    const order = JSON.parse(localStorage.getItem("order"));

    if (order) {
        const cartTableBody = document.querySelector("#cart-table tbody");
        cartTableBody.innerHTML = `
            <tr>
                <td>${order.food}</td>
                <td>${order.quantity}</td>
                <td>${order.price.toFixed(2)}</td>
            </tr>
        `;

        // Update total price
        document.getElementById("total-price").innerText = `Total: ${order.price.toFixed(2)}`;

        // Add a cancel button
        const cancelButton = document.createElement("button");
        cancelButton.innerText = "Cancel Order";
        cancelButton.classList.add("cancel-order-btn");
        cancelButton.onclick = function() {
            if (confirm("Are you sure you want to cancel the order?")) {
                localStorage.removeItem("order"); // Remove order from storage
                cartTableBody.innerHTML = ""; // Clear cart table
                document.getElementById("total-price").innerText = "Total: 0.00"; // Reset total price
            }
        };

        document.querySelector(".cart-container").appendChild(cancelButton);
    }
});
