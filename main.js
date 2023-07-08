let form = document.getElementById("form");
let input = document.getElementById("input");
let message = document.getElementById("message");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    message.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("successs");
    message.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();


  localStorage.setItem("Posts", JSON.stringify(Postsdata));
};

let createPost = () => {
  posts.innerHTML += `
  <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;
  input.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};

(() => {
  data = JSON.parse(localStorage.getItem("data")) || []
  console.log(data);
  createPosts();
})();
