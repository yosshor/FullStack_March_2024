interface User {
  fullName: string;
  profilePicture: string;
}

interface Recipe {
  _id: string;
  title: string;
  description: string;
  ingredients: string;
  instructions: string;
  cookingTime: number;
  servingSize: number;
  category: string;
  image: string;
  likes: string[];
  comments: { user: { name: string }; text: string }[];
  user: User;
}

async function fetchRecipes() {
  try {
    const response = await fetch("/api/recipe/get-all");
    const recipes = await response.json();
    console.log(recipes);
    if(recipes.length === 0){
      return noRecipesFound();
    }
    displayRecipes(recipes);
    return;
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
}

function noRecipesFound() {
  console.log("No recipes found");
  const recipesList = document.getElementById("recipes-list")!;
  const content = document.getElementById("content")!;
  recipesList.style.backgroundColor = "white";
  content.style.backgroundColor = "white";
  recipesList.innerHTML = "";
  const recipeCard = document.createElement("div");
  recipeCard.className = "no-recipes";
  const noRecipes = document.createElement("h2");
  noRecipes.textContent = "No recipes found";
  recipeCard.appendChild(noRecipes);
  recipesList.appendChild(recipeCard);
  return;
}

function displayRecipes(recipes: Recipe[]) {
  const recipesList = document.getElementById("recipes-list")!;
  recipesList.innerHTML = "";

  recipes.forEach((recipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.className = "recipe-card";

    // User information
    const userSection = document.createElement("div");
    userSection.className = "user-section";

    console.log(recipe.user.profilePicture);
    const userImage = document.createElement("img");
    userImage.src = `../${recipe.user.profilePicture}` ;
    userImage.alt = `${recipe.user.fullName}'s profile picture`;
    userSection.appendChild(userImage);

    const userName = document.createElement("p");
    userName.textContent = recipe.user.fullName;
    userSection.appendChild(userName);

    recipeCard.appendChild(userSection);

    // Recipe details
    const titleSection = document.createElement("div");
    titleSection.className = "title";
    const recipeTitle = document.createElement("h2");
    recipeTitle.textContent = recipe.title;
    titleSection.appendChild(recipeTitle);
    recipeCard.appendChild(titleSection);

    const recipeImgCard = document.createElement("div");
    recipeImgCard.className = "recipe-image";
    const recipeImage = document.createElement("img");
    recipeImage.src =  recipe.image.includes('uploads\\recipes') ? `../${recipe.image}` 
                    : recipe.image;
    recipeImage.alt = `${recipe.title}'s recipe picture`;
    recipeImgCard.appendChild(recipeImage);
    recipeCard.appendChild(recipeImgCard);

    const recipeIngredients = document.createElement("p");
    recipeIngredients.textContent = `Ingredients: ${recipe.ingredients}`;
    recipeCard.appendChild(recipeIngredients);

    const recipeInstructions = document.createElement("p");
    recipeInstructions.textContent = `Instructions: ${recipe.instructions}`;
    recipeCard.appendChild(recipeInstructions);

    const recipeCookingTime = document.createElement("p");
    recipeCookingTime.className = "recipe-time";
    recipeCookingTime.textContent = `Cooking Time: ${recipe.cookingTime} minutes`;
    recipeCard.appendChild(recipeCookingTime);

    const recipeServingSize = document.createElement("p");
    recipeServingSize.className = "recipe-serving";
    recipeServingSize.textContent = `Serving Size: ${recipe.servingSize}`;
    recipeCard.appendChild(recipeServingSize);

    const recipeCategory = document.createElement("p");
    recipeCategory.className = "recipe-category";
    recipeCategory.textContent = `Category: ${recipe.category}`;
    recipeCard.appendChild(recipeCategory);

    const likeButton = document.createElement("button");
    likeButton.textContent = `Like (${recipe.likes.length})`;
    likeButton.onclick = () => likeRecipe(recipe._id);
    recipeCard.appendChild(likeButton);

    const commentSection = document.createElement("div");
    commentSection.className = "comment-section";

    const commentInput = document.createElement("input");
    commentInput.type = "text";
    commentInput.placeholder = "Add a comment";
    commentSection.appendChild(commentInput);

    const commentButton = document.createElement("button");
    commentButton.textContent = "Add Comment";
    commentButton.onclick = () => addComment(recipe._id, commentInput.value);
    commentSection.appendChild(commentButton);

    const commentsList = document.createElement("ul");
    recipe.comments.forEach((comment) => {
      const commentItem = document.createElement("li");
      commentItem.textContent = `${comment.user.name}: ${comment.text}`;
      commentsList.appendChild(commentItem);
    });
    commentSection.appendChild(commentsList);

    recipeCard.appendChild(commentSection);

    recipesList.appendChild(recipeCard);
  });
}

async function likeRecipe(recipeId: string) {
  try {
    const response = await fetch(`/api/recipe/${recipeId}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: "USER_ID" }), // Replace 'USER_ID' with the actual user ID
    });
    if (response.ok) {
      fetchRecipes();
    } else {
      console.error("Error liking recipe");
    }
  } catch (error) {
    console.error("Error liking recipe:", error);
  }
}

async function addComment(recipeId: string, comment: string) {
  try {
    const response = await fetch(`/api/recipe/${recipeId}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: "USER_ID", text: comment }), // Replace 'USER_ID' with the actual user ID
    });
    if (response.ok) {
      fetchRecipes();
    } else {
      console.error("Error adding comment");
    }
  } catch (error) {
    console.error("Error adding comment:", error);
  }
}

// document.addEventListener('DOMContentLoaded', fetchRecipes);
function handleLogOut() {
  document.cookie = "auth=; Max-Age=0; path=/";
  window.location.href = "../login/index.html";
}