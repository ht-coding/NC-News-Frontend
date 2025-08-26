# Northcoders News Frontend
<p align="center">
 <a href="https://northcoders.com/"><img src="https://img.shields.io/badge/NorthCoders-EB1C24?style=for-the-badge&logo=javascript&logoColor=white" alt="northcoders"></a>
 <a href="https://nodejs.org/en"><img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node"></a>
 <a href="https://vite.dev/"><img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite"></a>
<a href="https://react.dev/"> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"></a>
<a href="https://tailwindcss.com/"> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"></a>
<a href="https://htncnews.netlify.app/"> <img src="https://api.netlify.com/api/v1/badges/84099366-2cd6-4922-8a0a-f39a04f2fcfe/deploy-status" alt="Netlify Status"></a>
</p>

> [!NOTE]
> This is a full stack project. The backend repository for this project can be found here: https://github.com/ht-coding/NC-news.

## Live Demo
A demo version of the API is hosted at https://htncnews.netlify.app/.
> [!WARNING]
> The first request you make to the API may take a minute or so to resolve as the demo server spins up. The server will spin down if there haven't been any requests to the API in the last 15 minutes. After the server starts, there shouldn't be any more delays.

# About the project
NC News is a full stack Node.js project utilising Vite, React, and TailwindCSS on the frontend, and Express.js and PostgreSQL on the backend. It utilises React Router to simulate a multipage app without needing to refresh the page, and Axios to handle requests to the backend API to perform various operations and create an interactive dynamic news website. Some features include:
- Accessibility conscious & mobile first design.
- Rendering a grid of articles, which can be filtered and sorted to find the articles you want, as well as rendering the top and most recent articles on the website's landing page.
- Dynamically generated article and browsing pages
- A commenting system with posting, deleting, and up/down vote functionality
- It is also possible to vote on articles
- Custom error handling & use of state to keep the user informed on when things are loading, being processed, and when they've gone wrong or an action is not allowed.

# Local setup
### Prerequisites:
Ensure you have Node.js v23.3.0+ installed on your machine. Instructions for Node.js can be found [here](https://nodejs.org/en/download).
### Instructions:
1. Clone the repository to your local machine using `git pull https://github.com/captainharrie/nc-news-frontend.git`
2. Create your .env file.
> [!IMPORTANT]
> - You will need to set up a `.env` file in the root directory, setting the `VITE_PEXELS_API_KEY` variable to your [pexels api key](https://help.pexels.com/hc/en-us/articles/900004904026-How-do-I-get-an-API-key). View the `example-env.txt` file for an example of what this file should look like. Do not include the square brackets.
> - Ensure that this new file is ignored in `.gitignore`!
3. Open the repository directory in your terminal and enter the following command: `npm install`. This will install all the project dependencies.
4. Once complete, run the following command: `npm run dev`. If everything has been set up correctly, your terminal should provide you with a URL you can open in your browser to view the website.

---

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)
