# Exercise: Fantasy World Creature Map with JPG Background

Scenario

Create an interactive map of your favorite fantasy world using a JPG image as the background. Display the locations of various creatures inhabiting the world.

Requirements

World Map Image:

Obtain a JPG image that will serve as the background for your map.
Place this image in the same directory as your HTML file.

HTML Structure:

Create a <div> element to act as a container for the map image and the creature elements.
Set the background of this div to your JPG image using CSS.
Make sure the div has position: relative to allow absolute positioning of creature elements.
Creature Data:

Define a JavaScript array to store information about the creatures (same as before).
Creature Placement:

Loop through the creature data array.
For each creature, create an HTML element (e.g., <div>) or use an image (<img>) tag to represent it.
Set the position of each creature element using position: absolute, left, and top properties based on the x and y coordinates from the creature data.

Styling and Interactivity (Optional):

Style the creature elements to your liking (icons, images, etc.).
Add interactivity like tooltips or hover effects to display more creature information.