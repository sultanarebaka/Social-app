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
PostsData.push(PostObj);
  localStorage.setItem("Posts", JSON.stringify(PostsData));

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
  localStorage.setItem('notes', JSON.stringify(notes));

const Post = localStorage.getItem('Post');
    console.log('Post');

}

JSON.parse(localStorage.getItem('Posts'))

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};

  // an array
   Array.from(JSON.parse(localStorage.getItem("Posts")));

   date: new Date().toLocaleDataString();

  let saved = localStorage.getItem("Postlist");
  if (saved) {
    PostList = JSON.parse(localStorage.getItem("Postlist"));
    render(PostList);
  }

  // edit the task and update local storage
function editTask(event) {
  let Posts = Array.from(JSON.parse(localStorage.getItem("Posts")));
}

localStorage.setItem("Post", JSON.stringify(PostsArray));
 displayPost();



  // setting local storage

function setLocalStorage() {

    if (localStorage.getItem('PostData')) {
        let showDiv = document.querySelector('#show');
        showDiv.innerHTML = "";
        
        let arr = JSON.parse(localStorage.getItem('PostData'));
    }
  }
  PostClear.addEventListener("click", function() {
    localStorage.clear();
  }
  );