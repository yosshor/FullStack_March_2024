# Superhero Management System Exercise

## Overview
In this exercise, you'll build a web-based Superhero Management System. You'll create a Superhero class, render superheroes to the DOM, add new superheroes, and implement movement functionality. This exercise will help you practice object-oriented programming, DOM manipulation, and basic animation in JavaScript.

## Level 1: Rendering Superheroes

### Tasks:
1. Create a `Superhero` class with the following properties:
   - `id` (number)
   - `name` (string)
   - `powers` (array of strings)
   - `imageUrl` (string)
   - `position` (object with x and y coordinates)

2. Implement a `render()` method in the `Superhero` class that returns an HTML string representing the superhero.

3. Create an array to store superhero instances.

4. Implement a `renderHeroes()` function that renders all superheroes in the array to the DOM.

## Level 2: Adding New Superheroes

### Tasks:
1. Create an HTML form with inputs for:
   - Hero name
   - Superpowers (comma-separated)
   - Image URL

2. Implement an `addHero()` function that:
   - Retrieves input values from the form
   - Creates a new `Superhero` instance
   - Adds the new superhero to the array
   - Calls `renderHeroes()` to update the DOM

## Level 3: Moving Superheroes

### Tasks:
1. Add a `previousPosition` property to the `Superhero` class.

2. Implement a `move(newX, newY)` method in the `Superhero` class that:
   - Updates the superhero's position
   - Updates the DOM to reflect the new position

3. Add click event listeners to:
   - Select a superhero when clicked
   - Move the selected superhero to a new position when the screen is clicked

4. Use CSS transitions to animate the movement.

## Additional Exercise Tasks

5. Enhance the superhero rendering with more details or improved styling.

6. Add validation to the `addHero()` function (e.g., check for empty fields).

7. Implement a feature to display superhero details when clicked, before moving.

8. Create a "fight" method that triggers when two superheroes occupy the same space.

9. Implement localStorage to save and load the current state of superheroes.

10. Develop a "power-up" system for temporary ability enhancements.

## Bonus Challenges

- Implement collision detection between superheroes.
- Add sound effects for superhero movements or actions.
- Create a mini-game where users match superheroes with their correct powers.

## Getting Started

1. Create an HTML file with a basic structure, including a title and a container for superheroes.
2. Add a `<style>` section in the `<head>` for CSS.
3. Add a `<script>` section at the end of the `<body>` for JavaScript.
4. Implement the `Superhero` class and required functions as outlined in the levels above.
5. Test each level thoroughly before moving to the next.

Good luck, and have fun building your Superhero Management System!