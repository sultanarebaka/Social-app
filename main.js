let form = document.getElementById("form");
let input = document.getElementById("input");
let message = document.getElementById("message");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("button clicked");
    formValidation();
  });

