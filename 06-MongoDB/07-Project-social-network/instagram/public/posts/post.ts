async function handleSubmitPost(event: any): Promise<void> {
  try {
    event.preventDefault();
    const form = event.target;
    const content = form.postContent.value;
    const image = form.postImage.files[0] ?? null;
    console.log(content, image);
    await addPost(content, image);
  } catch (error) {
    console.error(error);
  }
}

async function addPost(post: string, image: any): Promise<void> {
  try {
    const dataForm = { content: post, image: image ?? null };
    const formData = new FormData();
    formData.append("content", post);
    if (image) {
      formData.append("image", image);
    }
    const token = getCookie("auth");
    // console.log(token);
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData, //JSON.stringify(dataForm),
    });

    if (response.ok) {
      fetchPosts();
    } else {
      alert("Error creating post");
    }
  } catch (error) {
    console.error(error);
  }
}

async function fetchPosts() {
  const postList = document.getElementById("post-list") as HTMLDivElement;
  const token = getCookie("auth");
  const response = await fetch("/api/posts", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const posts = await response.json();
    console.log(posts);
    displayPosts(posts, postList);
  } else {
    console.error(response);
  }
}

function displayPosts(posts: any[], postList: HTMLDivElement) {
  postList.innerHTML = ""; // Clear existing posts
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post-item"); // Updated to match SCSS

    postElement.innerHTML = `
            <h3 class="post-header">${post.userDetails.firstName} ${
      post.userDetails.lastName
    }</h3> <!-- Class added for styling -->
            <p class="post-content">${
              post.content
            }</p> <!-- Class added for styling -->
            ${
              post.image
                ? `<img src="${post.image}" alt="Post Image" class="post-image">`
                : ""
            } <!-- Class added for styling -->
            <div class="post-actions"> <!-- Updated class to match SCSS -->
              <p>${post.likesCount} Likes</p> 
              <button onclick="likePost('${post._id}')">Like</button>
              <button onclick="commentOnPost('${post._id}')">Comment</button>
            </div>
            <div class="comments">
             
                ${post.comments
                 .map((comment) => ` <div class='comment'>
                                   <p>${comment.userDetails.firstName}</p>
                                    <p>${comment.userDetails.lastName}</p>      
                                     <p>${comment.content}</p>
                                     <p>${comment.createdAt.substring(0,10)}</p> </div>`)
                  .join("")}  
               
            </div>
                  `;
    postList.appendChild(postElement);
  });
}

function getCookie(name) {
  return document.cookie.split("; ").reduce((r, v) => {
    const parts = v.split("=");
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, "");
}

function handleLogOut() {
  document.cookie = "auth=; Max-Age=0; path=/";
  window.location.href = "../login/index.html";
}

async function likePost(postId: any): Promise<void> {
  const token: string = getCookie("auth");
  fetch(`/api/posts/${postId}/like`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.ok) {
        fetchPosts();
      } else {
        alert("Error liking post");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

const commentOnPost = async (postId: any): Promise<void> => {
  const comment = prompt("Enter your comment:");
  if (!comment) return;

  const token = getCookie("auth");
  await fetch(`/api/posts/${postId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ content: comment }),
  });
  fetchPosts();
};

// document.addEventListener("DOMContentLoaded", () => {
//     const logOutButton = document.getElementById("log-out");
//     const createPostButton = document.getElementById("create-post");
//     const getPostsButton = document.getElementById("get-posts");
//     const postList = document.getElementById("post-list");

//     logOutButton.addEventListener("click", () => {
//       document.cookie = "auth=; Max-Age=0; path=/";
//       window.location.href = "login.html";
//     });

//     createPostButton.addEventListener("click", async () => {
//       const content = (document.getElementById("post-content") as HTMLInputElement).value;
//       const image = (document.getElementById("post-image") as HTMLInputElement).files[0];

//       const formData = new FormData();
//       formData.append("content", content);
//       if (image) {
//         formData.append("image", image);
//       }

//       const token = getCookie("auth");
//       const response = await fetch("/api/posts", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`
//         },
//         body: formData
//       });

//       if (response.ok) {
//         fetchPosts();
//       } else {
//         alert("Error creating post");
//       }
//     });

//     getPostsButton.addEventListener("click", fetchPosts);

//     async function fetchPosts() {
//       const token = getCookie("auth");
//       const response = await fetch("/api/posts", {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });

//       if (response.ok) {
//         const posts = await response.json();
//         displayPosts(posts);
//       } else {
//         alert("Error fetching posts");
//       }
//     }

//     function displayPosts(posts) {
//       postList.innerHTML = "";
//       posts.forEach(post => {
//         const postElement = document.createElement("div");
//         postElement.classList.add("post");
//         postElement.innerHTML = `
//           <h3>${post.userId.username}</h3>
//           <p>${post.content}</p>
//           ${post.image ? `<img src="${post.image}" alt="Post Image">` : ""}
//           <div class="actions">
//             <button onclick="likePost('${post._id}')">Like</button>
//             <button onclick="commentOnPost('${post._id}')">Comment</button>
//           </div>
//           <div class="comments">
//             ${post.comments.map(comment => `<p>${comment.userId.username}: ${comment.content}</p>`).join("")}
//           </div>
//         `;
//         postList.appendChild(postElement);
//       });
//     }

//     (window as any).likePost = async (postId) => {
//       const token = getCookie("auth");
//       await fetch(`/api/posts/${postId}/like`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       fetchPosts();
//     };

//     (window as any).commentOnPost = async (postId) => {
//       const comment = prompt("Enter your comment:");
//       if (!comment) return;

//       const token = getCookie("auth");
//       await fetch(`/api/posts/${postId}/comment`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({ content: comment })
//       });
//       fetchPosts();
//     };

//     function getCookie(name) {
//       return document.cookie.split("; ").reduce((r, v) => {
//         const parts = v.split("=");
//         return parts[0] === name ? decodeURIComponent(parts[1]) : r;
//       }, "");
//     }
//   });
