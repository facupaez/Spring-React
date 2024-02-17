// api DOM (document object model)

const findAllUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  const ul = document.createElement("ul");

  users.forEach((user) => {
    //console.log(user.name);
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.append(li);
  });

  document.getElementById("root").append(ul);
};

// asíncrono
const users = await findAllUsers();
console.log(users);
