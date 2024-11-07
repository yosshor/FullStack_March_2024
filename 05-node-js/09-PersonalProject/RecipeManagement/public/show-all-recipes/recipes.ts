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
  comments: { user: { name: string }, text: string }[];
}

async function fetchRecipes() {
    try {
      const response = await fetch('/api/recipe/get-all');
      const recipes = await response.json();
      console.log(recipes)
      displayRecipes(recipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  }
  

  function displayRecipes(recipes: Recipe[]) {
    const recipesList = document.getElementById('recipes-list')!;
    recipesList.innerHTML = '';
  
    recipes.forEach(recipe => {
      const recipeCard = document.createElement('div');
      recipeCard.className = 'recipe-card';
  
      const recipeTitle = document.createElement('h2');
      recipeTitle.textContent = recipe.title;
      recipeCard.appendChild(recipeTitle);
  
      const recipeImage = document.createElement('img');
      recipeImage.src = recipe.image;
      recipeCard.appendChild(recipeImage);
  
      const recipeDescription = document.createElement('p');
      recipeDescription.textContent = `Description: ${recipe.description}`;
      recipeCard.appendChild(recipeDescription);
  
      const recipeIngredients = document.createElement('p');
      recipeIngredients.textContent = `Ingredients: ${recipe.ingredients}`;
      recipeCard.appendChild(recipeIngredients);
  
      const recipeInstructions = document.createElement('p');
      recipeInstructions.textContent = `Instructions: ${recipe.instructions}`;
      recipeCard.appendChild(recipeInstructions);
  
      const recipeCookingTime = document.createElement('p');
      recipeCookingTime.className = 'recipe-time';
      recipeCookingTime.textContent = `Cooking Time: ${recipe.cookingTime} minutes`;
      recipeCard.appendChild(recipeCookingTime);
  
      const recipeServingSize = document.createElement('p');
      recipeServingSize.className = 'recipe-serving';
      recipeServingSize.textContent = `Serving Size: ${recipe.servingSize}`;
      recipeCard.appendChild(recipeServingSize);
  
      const recipeCategory = document.createElement('p');
      recipeCategory.className = 'recipe-category';
      recipeCategory.textContent = `Category: ${recipe.category}`;
      recipeCard.appendChild(recipeCategory);
  
      const likeButton = document.createElement('button');
      likeButton.textContent = `Like (${recipe.likes.length})`;
      likeButton.onclick = () => likeRecipe(recipe._id);
      recipeCard.appendChild(likeButton);
  
      const commentSection = document.createElement('div');
      commentSection.className = 'comment-section';
  
      const commentInput = document.createElement('input');
      commentInput.type = 'text';
      commentInput.placeholder = 'Add a comment';
      commentSection.appendChild(commentInput);
  
      const commentButton = document.createElement('button');
      commentButton.textContent = 'Add Comment';
      commentButton.onclick = () => addComment(recipe._id, commentInput.value);
      commentSection.appendChild(commentButton);
  
      const commentsList = document.createElement('ul');
      recipe.comments.forEach(comment => {
        const commentItem = document.createElement('li');
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
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: 'USER_ID' }), // Replace 'USER_ID' with the actual user ID
      });
      if (response.ok) {
        fetchRecipes();
      } else {
        console.error('Error liking recipe');
      }
    } catch (error) {
      console.error('Error liking recipe:', error);
    }
  }
  
  async function addComment(recipeId: string, comment: string) {
    try {
      const response = await fetch(`/api/recipe/${recipeId}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: 'USER_ID', text: comment }), // Replace 'USER_ID' with the actual user ID
      });
      if (response.ok) {
        fetchRecipes();
      } else {
        console.error('Error adding comment');
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', fetchRecipes);