let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("message");
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

 // add task to local storage
 localStorage.setItem("Posts", JSON.stringify([...JSON.parse(localStorage.getItem("Posts") || "[]"), { Post: Post.value, completed: false }]));


let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};
{
  function syncPost() {

    window.localStorage.setItem('PostList', JSON.stringify(PostList));
    PostList = JSON.parse(window.localStorage.getItem('PostList'));
  }

}
let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};

  // Get the tasks from localStorage and convert it to an array
  let Posts = Array.from(JSON.parse(localStorage.getItem("Posts")));


  // edit the task and update local storage
function editTask(event) {
  let Posts = Array.from(JSON.parse(localStorage.getItem("Posts")));
}

localStorage.setItem("Post", JSON.stringify(PostsArray));
 displayPost();


 PostsData.push(PostObj);
  localStorage.setItem("Posts", JSON.stringify(PostsData));

  localStorage.setItem("Posts", JSON.stringify(PostsData));