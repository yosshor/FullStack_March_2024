# Interactive Chessboard Exercise

Building on your previous chessboard exercise, let's add more functionality.

## Level 1: Tile Selection
Add a `selected` property to each tile. When `selected` is set to `true`, the tile should be visually highlighted (for example, with a different color or border).

```jsx
<Tile selected={true} /> // Should display a selected tile
```

## Level 2: Tile hover
Do level 1 , and add a hover effect to the tiles. When the user hovers over a tile, it should change its appearance (for example, by changing the background color).

## Level 3: Chess Pieces
1. Create a component for each chess piece (pawn, rook, knight, bishop, queen, king)
2. Add a `type` property to tiles to specify which piece should be displayed
3. Inside the Tile component, use conditional rendering to show the appropriate piece based on the `type` property
4. Test your implementation by placing different pieces on the board

Example usage:
```jsx
<Tile type="pawn" color="white" selected={true} /> // Should display a pawn
<Tile type="queen" color="black" /> // Should display a queen

```