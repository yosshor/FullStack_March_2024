select *
from users as u
left join recipes r on u.user_id = r.author_id
left join recipe_ingredients ri on r.recipe_id = ri.recipe_id;



