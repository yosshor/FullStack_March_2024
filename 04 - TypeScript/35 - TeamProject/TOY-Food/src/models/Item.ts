export enum ItemCategory {
  Appetizer = 'Appetizer',
  Main = 'Main',
  Dessert = 'Dessert',
  Drink = 'Drink',
}

export class Item {
  public id: string;
  public category: ItemCategory;
  public pic: string;
  public name: string;
  public price: number;
  public description: string;
  constructor(
    category: ItemCategory,
    pic: string,
    name: string,
    price: number,
    description: string
  ) {
    this.id = `id${crypto.randomUUID()}`;
    this.category = category;
    this.pic = pic;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

export const items: Item[] = [
  new Item(
    ItemCategory.Appetizer,
    'https://www.mindfood.com/wp-content/uploads/2011/10/Seared-Scallop-Crostini632.gif',
    'Scallops on Bruschetta',
    5.99,
    'Spicy scallops with garlic, lime, coriander, and chives make for an absolutely delicious bruschetta topping.'
  ),
  new Item(
    ItemCategory.Appetizer,
    'https://preppykitchen.com/wp-content/uploads/2017/02/canape-feature.jpg',
    'Canapes',
    13.23,
    'Delicate finger sandwiches with a creamy herb spread and festive red and green garnishes.'
  ),
  new Item(
    ItemCategory.Main,
    'https://bigsislilsis.com/wp-content/uploads/2009/06/chicken-heads.jpg',
    'Grilled Chicken',
    12.99,
    'Grilled chicken, made with a flavorful marinade of lemon juice, garlic, and seasonings.'
  ),
  new Item(
    ItemCategory.Main,
    'https://www.mystfrancis.com/sites/stfrancis/assets/posts/salmon_fb.png',
    'Salmon',
    9.23,
    'A boneless salmon filet grilled over charcoal, lightly seasoned, and served with seasonal vegetables and roasted potatoes.'
  ),
  new Item(
    ItemCategory.Main,
    'https://www.allrecipes.com/thmb/EA78yfJfcZgPgaXikJzs3j1dHHc=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/25202beef-stroganoff-iii-ddmfs-3x4-233-0f26fa477e9c446b970a32502468efc6.jpg',
    'Beef Stroganoff',
    15.99,
    'Golden seared juicy beef strips smothered in an incredible sour cream mushroom gravy.'
  ),
  new Item(
    ItemCategory.Dessert,
    'https://cakesbymk.com/wp-content/uploads/2023/11/Template-Size-for-Blog-Photos-24-1203x1536.jpg',
    'Cheesecake',
    4.99,
    'Creamy cheesecake layered with vanilla cake, three kinds of berries, and a kiss of citrus!'
  ),
  new Item(
    ItemCategory.Dessert,
    'https://assets.epicurious.com/photos/62d6c513077a952f4a8c338c/1:1/w_1920,c_limit/PannaCotta_RECIPE_04142022_9822_final.jpg',
    'Panna Cotta',
    8.83,
    'Our panna cotta has a wonderfully rich flavor, silky smooth and elegant. The fresh berry sauce makes every creamy spoonful perfectly sweet and tangy.'
  ),
  new Item(
    ItemCategory.Dessert,
    'https://images.indianexpress.com/2023/12/dessert.jpg?w=640',
    'Chocolate Cake',
    12.83,
    'Rich, moist layers of cake, covered in chocolate frosting and chocolate morsels.'
  ),
  new Item(
    ItemCategory.Dessert,
    'https://static.vecteezy.com/system/resources/previews/035/985/777/non_2x/ai-generated-tcookie-plate-dessert-food-photo.jpg',
    'T-Cookie',
    13.83,
    "Oooey gooey cookies in various varieties to suit everyone's taste buds."
  ),
  new Item(
    ItemCategory.Dessert,
    'https://hips.hearstapps.com/hmg-prod/images/mason-jar-ice-cream1-1654195042.jpg?crop=0.388xw:0.877xh;0.324xw,0.0802xh&resize=980:*',
    'Chocolate Mousse',
    5.49,
    'A heavenly blend of rich chocolate, smooth creaminess, and “squelch.”'
  ),
  new Item(
    ItemCategory.Drink,
    'https://preppykitchen.com/wp-content/uploads/2023/09/Long-Island-Iced-Tea-Feature.jpg',
    'Iced Tea',
    3.49,
    'Premium black tea shaken with ice to create an ideal iced drink.'
  ),
  new Item(
    ItemCategory.Drink,
    'https://hips.hearstapps.com/hmg-prod/images/del069924-hugospritz-web-3764-bjg-vertical-667afce8bf0ca.jpg?crop=0.8334723380594941xw:1xh;center,top&resize=980:*',
    'Hugo Sproitz',
    3.49,
    'Combines prosecco, elderflower liqueur, soda water, and mint. Its flavor is delicate and refreshing.'
  ),
];
