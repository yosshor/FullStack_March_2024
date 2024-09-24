/*
<h2>Add Pets</h2>
    <form id="add-pet">
        <input type="text" name="petName" placeholder="Pets Name">
        <input type="url" name="imageUrl" placeholder="Image of pet">
        <button type="submit">ADD</button>
    </form>
*/

function renderAddHeroForm(){
    try {
        const html = `<h2>Add Hero</h2>
        <form id="addHero">
        <input type="text" name="heroName" placeholder="Hero Name">
        <input type="text" name="heroPowers" placeholder="Hero Powers seperate with '-'">
        <input type="url" name="imageUrl" placeholder="Image of Hero">
        <button type="submit">ADD</button>
        </form>`;
        const container = document.querySelector("#heros");
        if (!container) {
            throw new Error("there is no hero container!");
        }
        container.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
    
}

function handleAddHeroForm(){
    try {
        renderAddHeroForm();
    } catch (error) {
        console.error(error);
    }
}

export function renderAddBtn(){
    try {
        const html = `<button onclick="handleAddHeroForm()">Add Hero</button>`;
        const container = document.querySelector("#btns");
        if (!container) {
            throw new Error("there is no hero container!");
        }
        container.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}