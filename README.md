Personal Portfolio
This is a personal portfolio website built with React and Vite. It's a single-page application designed to showcase my skills, projects, and contact information.

Features
Built with React & Vite: Leverages a modern build toolchain for a fast and efficient development experience.

Fast Refresh: Enjoy a smooth development workflow with hot module replacement (HMR), allowing for instant updates without losing component state.

Smooth Scrolling: Uses react-anchor-link-smooth-scroll to provide a seamless user experience when navigating between sections.

Responsive Design: Optimized for a clean, consistent look across various devices.

Code Linting: Includes ESLint with recommended rules for React, ensuring high-quality, maintainable code.

Getting Started
Prerequisites
Make sure you have Node.js and npm installed on your machine.

Installation
Clone the repository:

Bash

git clone <your-repository-url>
Navigate to the project directory:

Bash

cd portfolio
Install the dependencies:

Bash

npm install
Available Scripts
In the project directory, you can run the following commands:

npm run dev
Runs the app in development mode. Open http://localhost:5173 to view it in your browser. The page will automatically reload as you make changes to the code.

npm run build
Builds the app for production to the dist folder. This command bundles React in production mode and optimizes the build for the best performance.

npm run lint
Runs ESLint to analyze the code and identify potential issues.

npm run preview
Serves the dist folder to preview your production build locally.

Technologies Used
React: A JavaScript library for building user interfaces.

Vite: A fast, modern build tool for front-end development.

ESLint: A linter to enforce code quality and style.

Vite's React Plugin: Integrates React with Vite's HMR capabilities.

react-anchor-link-smooth-scroll: A component for smooth scrolling to anchor links.

react-toastify: A library for adding toast notifications to the app.

Project Structure
/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
[cite_start]├── .gitignore          # Lists ignored files and directories[cite: 1].
├── index.html          # Main HTML file for the application.
├── package.json        # Lists project dependencies and scripts.
├── package-lock.json   # Records the exact version of each installed package.
├── README.md           # This file.
└── vite.config.js      # Vite configuration file.
