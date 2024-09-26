import {Pet, pets} from '../models/pet';

export const allPets:Pet[] = pets;

export function addPet(name:string, age:number, species:string, price:number, imageUrl?:string):Pet[] {
    const pet = new Pet(name, species, age, price, undefined, imageUrl);
    allPets.push(pet);
    return allPets;
}
