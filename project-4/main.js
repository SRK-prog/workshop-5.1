var result = document.getElementById("results");
var filter = document.getElementById("filter");

let listItems = [];

const getData = async () => {
  const res = await fetch("https://randomuser.me/api?results=50");
  const { results } = await res.json();
  results.innerText = "";

  results.forEach((user) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <img src="${user.picture.large}" alt="profile" />
        <div>
            <h4>${user.name.first}<h4>
            <p>${user.location.city}</p>
        </div>
    `;
    listItems.push(li);
    result.appendChild(li);
  });
};

getData();

filter.addEventListener("input", (e) => filterData(e.target.value));

const filterData = (searchTerm) => {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else item.classList.add("hide");
  });
};
