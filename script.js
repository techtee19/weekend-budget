const budgetDisplay = document.querySelector(".budgetDisplay");
const expenseDisplay = document.querySelector(".expenseDisplay");
const remainingDisplay = document.querySelector(".remainingDisplay");
const expenseInput = document.querySelector(".expenseInput");

const budget = 1000;

let expense = 0;

const spending = {
  budget: budget,
  expense: expense,
  getRemaining: function () {
    return this.budget - this.expense;
  },
};

function updateDisplay() {
  budgetDisplay.textContent = `Budget: $${spending.budget}`;
  expenseDisplay.textContent = `Spent: $${spending.expense}`;
  remainingDisplay.textContent = `Remaining: $${spending.getRemaining()}`;
}

function addExpense() {
  let inputField = expenseInput;
  let newExpense = parseFloat(inputField.value);

  if (!isNaN(newExpense) && newExpense > 0) {
    spending.expense += newExpense;
    updateDisplay();
  } else {
    alert("enter valid expense amount");
  }

  inputField.value = ""; // clears input field
}

updateDisplay();
