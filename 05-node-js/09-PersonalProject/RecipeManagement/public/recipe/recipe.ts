async function handleSubmitRecipes(event: any): Promise<void> {
  try {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const instructions = form.instructions.value;
    const ingredients = form.ingredients.value;
    const cookingTime = form.cooking_time.value;
    const servingSize = form.serve_size.value;
    const category = form.category.value;
    const image_url = form.image_url.value;
    const image = form.image.files[0];
    console.log(
      title,
      instructions,
      ingredients,
      cookingTime,
      servingSize,
      category,
      image
    );
    addRecipe(
      title,
      instructions,
      ingredients,
      cookingTime,
      servingSize,
      category,
      image_url,
      image
    );
    // await addPost(content, image);
  } catch (error) {
    console.error(error);
  }
}

async function addRecipe(
  title: string,
  instructions: string,
  ingredients: string,
  cookingTime: number,
  servingSize: number,
  category: string,
  imageUrl: string,
  image: File
): Promise<void> {
  try {
    const dataForm = {
      title: title,
      instructions: instructions,
      ingredients: ingredients,
      cookingTime: cookingTime,
      servingSize: servingSize,
      category: category,
      image: image ?? null,
    };

    const formData = new FormData();
    formData.append("title", title);
    formData.append("instructions", instructions);
    formData.append("ingredients", ingredients);
    formData.append("cookingTime", cookingTime.toString());
    formData.append("servingSize", servingSize.toString());
    formData.append("category", category);
    formData.append("image", imageUrl ?? null);

    const token = getCookie("auth");
    // console.log(token);
    const response = await fetch("/api/recipe", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (response.ok) {
      console.log("recipe added");
      if (image) {
        const res = await response.json();
        await addRecipeImage(image, title, token, res);
      }
      // window.location.href = "../show-all-recipes/index.html";
      // fetchPosts();
    } else {
      alert("Error creating post");
    }
  } catch (error) {
    console.error(error);
  }
}

async function addRecipeImage(
  image: File,
  title: string,
  token: string,
  response: any
) {
  const recipeId = response._id;
  const imageFormData = new FormData();
  imageFormData.append("image", image);
  imageFormData.append("recipeId", recipeId);
  console.log(imageFormData);
  const imageResponse = await fetch(`/api/recipe/uploadRecipePicture?recipeId=${recipeId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: imageFormData,
  });
  if (imageResponse.ok) {
    console.log("Image uploaded");
  } else {
    console.error(imageResponse);
  }
}

async function fetchRecipes() {
  // const postList = document.getElementById("post-list") as HTMLDivElement;
  // const token = getCookie("auth");
  // const response = await fetch("/api/posts", {
  //   method: "GET",
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });
  // if (response.ok) {
  //   const posts = await response.json();
  //   console.log(posts);
  //   displayPosts(posts, postList);
  // } else {
  //   console.error(response);
  // }
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
                  .map(
                    (comment) => ` <div class='comment'>
                                   <p>${comment.userDetails.firstName}</p>
                                    <p>${comment.userDetails.lastName}</p>      
                                     <p>${comment.content}</p>
                                     <p>${comment.createdAt.substring(
                                       0,
                                       10
                                     )}</p> </div>`
                  )
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

document.addEventListener("DOMContentLoaded", () => {
  const fileInputDiv = document.getElementById("file-input") as HTMLDivElement;
  const urlInputDiv = document.getElementById("url-input") as HTMLDivElement;
  const imageOptionRadios = document.querySelectorAll(
    'input[name="imageOption"]'
  );

  imageOptionRadios.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      if (event.target.value === "file") {
        fileInputDiv.style.display = "block";
        urlInputDiv.style.display = "none";
      } else {
        fileInputDiv.style.display = "none";
        urlInputDiv.style.display = "block";
      }
    });
  });
});
