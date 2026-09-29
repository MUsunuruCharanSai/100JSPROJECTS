async function getUser() {

    let response = await fetch("https://randomuser.me/api/");
    let data = await response.json();

    let user = data.results[0];

    document.getElementById("user").innerHTML = `
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>Name: ${user.name.first} ${user.name.last}</p>
        <p>Email: ${user.email}</p>
        <p>Country: ${user.location.country}</p>
    `;
}
