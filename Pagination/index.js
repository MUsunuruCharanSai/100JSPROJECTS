
const users = [
  { name: "Charan", email: "charan@gmail.com" },
  { name: "Rahul", email: "rahul@gmail.com" },
  { name: "Priya", email: "priya@gmail.com" },
  { name: "Sneha", email: "sneha@gmail.com" },
  { name: "Arjun", email: "arjun@gmail.com" },
  { name: "Divya", email: "divya@gmail.com" },
  { name: "Kiran", email: "kiran@gmail.com" },
  { name: "Pooja", email: "pooja@gmail.com" },
  { name: "Ravi", email: "ravi@gmail.com" },
  { name: "Anu", email: "anu@gmail.com" }
];

const usersPerPage = 3;
let currentPage = 1;

function displayUsers() {
  const start = (currentPage - 1) * usersPerPage;
  const end = start + usersPerPage;

  const currentUsers = users.slice(start, end);

  document.getElementById("userList").innerHTML =
    currentUsers.map(user => `
      <div class="user">
        <strong>${user.name}</strong>
        <p>${user.email}</p>
      </div>
    `).join("");

  const totalPages = Math.ceil(users.length / usersPerPage);

  document.getElementById("pageInfo").textContent =
    `Page ${currentPage} of ${totalPages}`;

  document.getElementById("prevBtn").disabled =
    currentPage === 1;

  document.getElementById("nextBtn").disabled =
    currentPage === totalPages;
}

function changePage(direction) {
  const totalPages = Math.ceil(users.length / usersPerPage);

  currentPage += direction;

  if (currentPage < 1) currentPage = 1;
  if (currentPage > totalPages) currentPage = totalPages;

  displayUsers();
}

displayUsers();
