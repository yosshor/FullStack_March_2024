import { SuperHero } from "../model/superHero";

function renderPowers(powers: string[]): string {
    let html: string = "<ul>";
    powers.forEach((power) => html += `<li>${power}</li>`);
    html += "</ul>";
    return html;
}

function renderHero(hero: SuperHero): string {
    const html: string = `<div class="hero-card">
    <h2>${hero.name}</h2>
    <img src="${hero.imageurl}" alt="${hero.name} image">
    ${renderPowers(hero.powers)}
    </div>`;
    return html;
}

export function renderHeros(heros: SuperHero[]) {
    try {
        const html = `<div class="heros-list">
            ${heros.map(hero => renderHero(hero)).join('')}
        </div>`;

        const heroconstainer = document.querySelector("#heros");
        if (!heroconstainer) {
            throw new Error("there is no hero container!");
        }
        heroconstainer.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}