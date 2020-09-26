const baseUrl = "https://dscug-quizapi.herokuapp.com";

// Elements
const usernameInput = document.querySelector("#username");
const countrySelect = document.getElementById("country");
const btn = document.querySelector("button");
const form = document.querySelector("form");

const username = usernameInput.nodeValue;
const country = countrySelect.nodeValue;

function createUser(ev) {
  ev.preventDefault();
  fetch(`${baseUrl}/create-user`, {
    method: "POST",
    mode: "no-cors",
    data: { username, country },
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    })
    .catch((er) => {
      console.warn(er);
    });
}

form.addEventListener("submit", createUser);

console.log("FORM", form);
