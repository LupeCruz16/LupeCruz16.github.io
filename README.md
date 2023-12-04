# My Portfolio Website

## Introduction
Hi there! Welcome to the repository for my personal portfolio website. 

## Live Website
You can access the live version of the website here: https://guadalupecruz.com/
## About the Website
This portfolio website is hosted on GitHub Pages and was meticulously crafted using React. It showcases my projects, skills, and professional growth.

## How to Update A React Website Hosted on Github Pages
To make updates to the website, follow these steps:

1. **Local Changes:**
   - Create a new branch: `git checkout -b <branch-name>`
   - Make and test your changes locally.

2. **Push to Main:**
   - Merge changes to the `main` branch:
     ```bash
     git checkout main
     git merge <branch-name>
     ```
   - Push changes to GitHub: `git push origin main`

3. **Deploy:**
   - Run the deployment script: `npm run deploy`
   - This command builds the project and pushes it to the `gh-pages` branch.

4. **Check the Live Site:**
   - The updates will be reflected on the GitHub Pages site shortly after deployment.
