# Neon Sweeper

A stylish, neon-themed minesweeper-like game built with React and TypeScript.

## Gameplay

The game features a screen full of tiles. As you move your mouse across the screen, the tiles you hover over are revealed. If you reveal a bomb, the game is over! The goal is to reveal all the non-bomb tiles.

The color of the tiles changes based on their proximity to bombs, creating a "heat map" effect. Tiles further away from bombs have cooler colors (blues and purples), while tiles closer to bombs have hotter colors (pinks and reds).

## How to Play

1.  Clone the repository.
2.  Install the dependencies: `npm install`
3.  Start the game: `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Difficulty Levels

You can select a difficulty level from the start menu:

*   **Easy:** 1% bombs
*   **Medium:** 3% bombs
*   **Hard:** 5% bombs
*   **Insane:** 95% bombs

## Docker

This project includes a `Dockerfile` to containerize the application. To build and run the Docker container:

1.  Build the Docker image: `docker build -t neon-sweeper .`
2.  Run the Docker container: `docker run -p 3000:3000 neon-sweeper`