export const fetchFoodData = async (food: string) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  return data.meals[0].strMealThumb;
};
