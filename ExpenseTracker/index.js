let expenses = [];

function addExpense() {
  let name = document.getElementById("name").value;
  let amount = document.getElementById("amount").value;

  if (name == "" || amount == "") {
    alert("Please enter expense details");
    return;
  }

  let expense = {
    name: name,
    amount: Number(amount),
  };

  expenses.push(expense);

  showExpenses();

  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
}

function showExpenses() {
  let list = document.getElementById("list");

  list.innerHTML = "";

  let total = 0;

  for (let i = 0; i < expenses.length; i++) {
    total = total + expenses[i].amount;

    list.innerHTML += `
                    <li>
                        ${expenses[i].name} - ₹${expenses[i].amount}

                        <button onclick="deleteExpense(${i})">
                            Delete
                        </button>
                    </li>
                `;
  }

  document.getElementById("total").innerText = total;
}

function deleteExpense(index) {
  expenses.splice(index, 1);

  showExpenses();
}
