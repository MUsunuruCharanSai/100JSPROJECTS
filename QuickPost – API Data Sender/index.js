function postData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let data = {
    name: name,
    email: email,
  };
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (datafromserver) {
      console.log(datafromserver);
      document.getElementById("result").innerHTML =
        `<h3>Data Posted Successfully</h3>
                    <p>
                        <b>ID:</b> ${datafromserver.id}
                    </p>
                    <p>
                        <b>Name:</b> ${datafromserver.name}
                    </p>
                    <p>
                        <b>Email:</b> ${datafromserver.email}
                    </p>`;
    })
    .catch(function (error) {
      document.getElementById("result").innerText = "Something went wrong";
    });
}
