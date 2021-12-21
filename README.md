[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/) [![GitHub](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/) [![GitHub](https://img.shields.io/badge/JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![GitHub](https://img.shields.io/badge/JSX-4F4FD4?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/docs/introducing-jsx.html) [![GitHub](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/) [![GitHub](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)


# ArgentBank

 💸💰 The ArgentBank is an app to manage your differents bank accounts. Add, change and delete transactions for every account you have 💰💸


![Mockup of the project](https://i.imgur.com/yYxrop0.png)

<!-- <p align="center">
<a href="https://sportseeapp.netlify.app/">🌍 Live démo
</a>
</p> -->


## 1. Documentation

The documentation can be viewed by following the link: [documentation](https://argentbankdocumentation.netlify.app/)

## 2. Author

Thomas Semeria


## 3. Languages

- JS
- JSX
- SCSS

## 4. Project
This project is the 13th project for the React front-end developer [formation](https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react#main_content) of OpenClassRooms.

##### Part one
We have to build an App with the provided static html and css. The goal of this project is to implement the sign in and log out system for the user.
Back-end is given with some bases, and we have to put the functions for all the required routes, check the jwt token to identify the user, add react-redux to manage the state of the user.

##### Part two
We have to make an api proposition on a swagger file, for the followings instructions: 
- View all the user transactions for the current month
- View the details of a transaction in another view
- Add, modify or delete information about a transaction

##### Technologies
- [React](https://reactjs.org/)
- [React Router Dom](https://v5.reactrouter.com/web/guides/quick-start)
- [React Redux](https://react-redux.js.org/)
- [Sass](https://sass-lang.com/)
- [MongoDB](https://www.mongodb.com)

### 4.1 Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```	

### 4.2 Launching the back-end

1. Fork this [Repo](https://github.com/Ngc1987/Project-10-Bank-API)
1. Clone the repo onto your computer
1. Open a terminal window in the cloned project
1. Run the following commands:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```


Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

### 4.3 Launching the front-end

```bash
# Change folder
cd argentbank
# Install dependencies
npm install

# Start front-end
npm start
```
Your front-end app should now be running at http://locahost:3000 🪄

#### Populated Database Data

Since you run the `populate-db` script, you should have two users in your database:

#### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

#### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

### 5 Test the app

You can now navigate on the app, try to connect with one of the two users above, or try to create your own account. You can connect, change your first and last name, and disconnect.

#### API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs