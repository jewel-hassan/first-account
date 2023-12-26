// var availableBalance = document.querySelector("#available-balance");
// var inputAmount = document.querySelector("#input-amount");
// var transList = document.querySelector("#trans-list");

// var totalAmount = parseInt(availableBalance.innerHTML);

// function depoBtn() {
//     var converted = inputAmount.value;
//     var converting = parseInt(converted);
//     var result = totalAmount + converting;

//     if (converted.trim() !== "") {
//         updateTransaction("Deposit", converting);
//         totalAmount = result;
//         updateAvailableBalance(totalAmount);
//     }

//     inputAmount.value = "";
// }

// function expBtn() {
//     var converted = inputAmount.value;
//     var converting = parseInt(converted);
//     var result = totalAmount - converting;

//     if (converted.trim() !== "") {
//         updateTransaction("Expense", converting);
//         totalAmount = result;
//         updateAvailableBalance(totalAmount);
//     }

//     inputAmount.value = "";
// }

// function updateTransaction(type, amount) {
//     var listItem = document.createElement("li");
//     listItem.textContent = `${type}: ${amount}`;


//     var deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.classList.add("delete-btn");
//     deleteButton.addEventListener("click", function () {
//         transList.removeChild(listItem);

//     });

//     listItem.appendChild(deleteButton);
//     listItem.classList.add(type.toLowerCase());
//     transList.insertBefore(listItem, transList.firstChild);
// }

// function updateAvailableBalance(amount) {
//     availableBalance.innerHTML = amount;
// }

// function resetBtn() {
//     totalAmount = 0;
//     availableBalance.innerHTML = totalAmount;
//     transList.innerHTML = "";
//     inputAmount.value = "";

// }



var availableBalance = document.querySelector("#available-balance");
var inputAmount = document.querySelector("#input-amount");
var transList = document.querySelector("#trans-list");

var totalAmount = parseInt(availableBalance.innerHTML);

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

    // Get the current date and time
    var now = new Date();
    var dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
    var timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };

    var dateString = now.toLocaleDateString(undefined, dateOptions);
    var timeString = now.toLocaleTimeString(undefined, timeOptions);

    listItem.textContent = `${type}: ${amount} (Date: ${dateString}, Time: ${timeString})`;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", function () {
        transList.removeChild(listItem);
        updateAvailableBalance(totalAmount - amount);
    });

    listItem.appendChild(deleteButton);
    listItem.classList.add(type.toLowerCase());
    transList.insertBefore(listItem, transList.firstChild);
}

function updateAvailableBalance(amount) {
    availableBalance.innerHTML = amount;
}

function resetBtn() {
    totalAmount = 0;
    availableBalance.innerHTML = totalAmount;
    transList.innerHTML = "";
    inputAmount.value = "";
}
