let form = document.getElementById("form");
let input = document.getElementById("input");
let message = document.getElementById("message");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("button clicked");
    formValidation();
  });

  let createPost = () => {
    posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost" class="fas fa-edit"></i>
        <i onClick="deletePost" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;}

