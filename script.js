var availableBalance = document.querySelector("#available-balance");
var inputAmount = document.querySelector("#input-amount");
var transList = document.querySelector("#trans-list");

// Retrieve data from localStorage on page load
var savedData = localStorage.getItem("transactionData");
var totalAmount = parseInt(availableBalance.innerHTML);
if (savedData) {
    transList.innerHTML = savedData;
}

function depoBtn() {
    var converted = inputAmount.value;
    var converting = parseInt(converted);
    var result = totalAmount + converting;

    if (converted.trim() !== "") {
        updateTransaction("Deposit", converting);
        totalAmount = result;
        updateAvailableBalance(totalAmount);
    }

    inputAmount.value = "";
}

function expBtn() {
    var converted = inputAmount.value;
    var converting = parseInt(converted);
    var result = totalAmount - converting;

    if (converted.trim() !== "") {
        updateTransaction("Expense", converting);
        totalAmount = result;
        updateAvailableBalance(totalAmount);
    }

    inputAmount.value = "";
}

function updateTransaction(type, amount) {
    var listItem = document.createElement("li");

    // Add date and time information
    var currentDate = new Date();
    var dateTimeString = currentDate.toLocaleString();

    listItem.textContent = `${type}: ${amount} (${dateTimeString})`;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", function () {
        transList.removeChild(listItem);
        updateAvailableBalance(totalAmount - amount);
        saveDataToLocal();
    });

    listItem.appendChild(deleteButton);
    listItem.classList.add(type.toLowerCase());
    transList.insertBefore(listItem, transList.firstChild);

    // Save updated data to localStorage
    saveDataToLocal();
}

function updateAvailableBalance(amount) {
    availableBalance.innerHTML = amount;
}

function resetBtn() {
    totalAmount = 0;
    availableBalance.innerHTML = totalAmount;
    transList.innerHTML = "";
    inputAmount.value = "";

    // Reset data in localStorage
    saveDataToLocal();
}

function saveDataToLocal() {
    // Save transaction data to localStorage
    localStorage.setItem("transactionData", transList.innerHTML);
}
