import Item, { items } from "../models/items/items";
import User from "../models/users/users";
import { getUserCartDom } from "../views/users/userCart";


/**
 * Calculates and returns the total cost of items in the user's cart.
 *
 * @param {User} user - The user object containing the cart items.
 * @returns {string | null} The total cost of items in the user's cart as a string with two decimal places, or null if an error occurs.
 */
export function showTotalCost(user: User): string | null {
    try {
        // Initialize the total cost to 0
        let cost: number = 0;

        // Iterate over the user's cart item IDs and sum up the prices of the corresponding items
        user.cart.map(id => cost += items.find(i => i.id === id)!.price);

        // Log the total cost for debugging
        console.log(cost);

        // Return the total cost as a string with two decimal places
        return cost.toFixed(2);

    } catch (error) {
        // Log any errors that occur
        console.error(error);

        // Return null if an error occurs
        return null;
    }
}

/**
 * Renders the user's cart items on the webpage.
 *
 * @param {User} user - The user object containing the cart items.
 * @returns {string} The HTML representation of the user's cart items, or 'undefined' if an error occurs.
 */
export function showUserCart(user: User, container: HTMLDivElement): string {
    try {
        // Map over the user's cart item IDs and find the corresponding Item objects
        const userItems: Item[] | undefined = user.cart.map(i => items.find(item => item.id === i)!);

        const newItem = getDistinctItems(userItems)!;
        // Log the user and userItems arrays for debugging
        // console.log(user, userItems, newItem);

        // Generate the HTML representation of the user's cart items
        const allItems = getUserCartDom(user, newItem)!;

        // Render the user's cart items on the webpage
        container.innerHTML = allItems;

        // Return the HTML representation of the user's cart items
        return allItems;

    } catch (error) {
        // Log any errors that occur
        console.error(error);

        // Return 'undefined' if an error occurs
        return 'undefined';
    }
}

/**
 * Returns an array of distinct items from the user's cart, with the count of each item.
 *
 * @param {Item[]} userItems - The array of items from the user's cart.
 * @returns {Item[] | undefined} - An array of distinct items, with the count of each item, or undefined if an error occurs.
 */
function getDistinctItems(userItems:Item[]): Item[] | undefined {
    try {
        // Reduce the userItems array to count occurrences of each item name
        const itemCount = userItems.reduce((acc, item) => {
            if (acc[item.name]) {
                acc[item.name].count++;
            } else {
                acc[item.name] = {
                    count: 1,
                    description: item.desc,
                    imageSrc: item.src,
                    id: item.id,
                    price: item.price,
                    inStock: item.inStock,
                };
            }
            return acc;
        }, {} as Record<string, { count: number, description: string, imageSrc: string, id: string, price: number, inStock: number }>);

        // Convert the result to the desired format
        const distinctItems = Object.entries(itemCount).map(([name, { count, description, imageSrc, id, price, inStock }]) => ({
            name,
            count,
            description,
            imageSrc,
            id,
            price,
            inStock
        }));

        // Convert the distinct items to the Item class
        let newItem: Item[] = [];
        distinctItems.forEach(item => {
            newItem.push(new Item(item.name, item.price, item.imageSrc, item.description, item.inStock, item.id, item.count))
        });
        return newItem;

    } catch (error) {
        // Log any errors that occur
        console.error(error);
        return undefined;
    }
}
