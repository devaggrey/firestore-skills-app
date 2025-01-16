# Bio Management Application

This is a simple web application built with React and Firebase for managing bio, skills, and projects for users. The app allows users to add and display their bio, skills, and projects in a dashboard format. It also includes features for adding new items (bio, skills, and projects), displaying them in a user-friendly format, and providing feedback on success or error when adding entries.

## Features

- Add Bio
- Add Skill
- Add Project
- Display Bio, Skills, and Projects
- Success/Error messages on add actions
- Redirect to Dashboard on successful form submission

## Technologies Used

- React: JavaScript library for building the user interface
- Firebase: Cloud service used for database storage (Firestore)
- React Router: For navigation between different pages
- React Hooks: For managing state (useState) and handling side effects (useEffect)
- Firebase Firestore: For saving and retrieving user data

## Prerequisites

Before running this project, ensure that you have the following installed:

- Node.js
- npm (Node Package Manager)
- Firebase account (for Firestore database setup)

## Installation

1. Clone the repository to your local machine:

git https://github.com/devaggrey/firestore-skills-app.git
cd firestore-skills-app

2. Install the required dependencies
    npm install

/src
  /pages
    Dashboard.js      - Main dashboard page with links to bio, skills, and project management
    BioPage.js        - Page for managing bio
    SkillsPage.js     - Page for managing skills
    ProjectPage.js    - Page for managing projects
    LoginPage.js      - Page for user login (if authentication is needed)
  firebase.js         - Firebase configuration and initialization
  App.js              - Main App component containing routing logic
  index.js            - Main entry point for the application
  README.md           - Documentation for the project

Logins: 
    Email: aggreykoros04@gmail.com
    password: Vikings@12Vikings