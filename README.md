# React Redux Skeleton

This project is a skeleton for React + Redux web application. It can be used as a starting point for React web application or just as an example how to implement Redux structure in React.

The repository contains a sample React application which is preconfigured to install all the dependencies for instant development. The application has very simple business logic showing how to implement basic operations with users. The main purpose of this project is to demonstrate how to organize your React + redux application.

## Technologies

This project is a basic web application based on the following technologies:
* React
* Redux
* Redux Form
* React-router
* Babel
* Webpack

You can check all the dependencies in package.json. Mock REST API works on JSON server.

## Features

This project contains basic features to demostrate how React and Redux could be utilized in common situations:
* JWT Authentication (mock up)
  * Sign up
  * Log in
  * Log out
* Users CRUD operations
  * List all users
  * Show user
  * Create new user
  * Edit user
  * Delete user

## Application structure

```
src/ ----------------------------------- application root directory
  actions/ ----------------------------- directory for redux actions
    actionTypes.js --------------------- action types constants
    authActions.js --------------------- authorization action creators
    userActions.js --------------------- user action creators
  api/ --------------------------------- directory for API classes
    Api.js ----------------------------- base API class
    AuthApi.js ------------------------- authorization API class
    UserApi.js ------------------------- user API class
  components/ -------------------------- directory for dumb components
    auth/ ------------------------------ directory for authorization dumb components
      LoginForm.js --------------------- login form component
    users/ ----------------------------- directory for users dumb components
      UserCard.js ---------------------- user card component
      UserForm.js ---------------------- user form component
      UsersList.js --------------------- users list component
      UsersListItem.js ----------------- users list item component
  containers/ -------------------------- directory for smart components (containers)
    auth/ ------------------------------ directory for authorization containers
      LoginPage.js --------------------- login page container
      SignupPage.js -------------------- signup page container
    shared/ ---------------------------- directory for shared smart containers
      AppAuthorized.js ----------------- application layout for features available with authorization
      AppUnauthorized.js --------------- application layout for features available without authorization
    users/ ----------------------------- directory for users smart containers
      UserEditPage.js ------------------ edit user page
      UserNewPage.js ------------------- new user page
      UserPage.js ---------------------- show user page
      UsersListPage.js ----------------- list users page
  public/ ------------------------------ directory for common public files
    index.html ------------------------- index.html template for HtmlWebpackPlugin
  reducers/ ---------------------------- directory for redux reducers
    auth.js ---------------------------- authorization reducer
    index.js --------------------------- root reducer
    initalState.js --------------------- initial state object
    users.js --------------------------- users reducer
  store/ ------------------------------- directory for redux store configurations
    configureStore.js ------------------ redux store configuration
  index.js ----------------------------- application entry point
  routes.js ---------------------------- react application routes
data/ ---------------------------------- directory for mock up json-server data
  db.json ------------------------------ data file for mock up json-server data
.gitignore ----------------------------- tells git which files it should ignore
package.json --------------------------- contains meta data about the app and list of dependencies to install
README.md ------------------------------ readme file
webpack.config.js ---------------------- webpack config file (can be splitted for development and production environment)
```

## Getting Started

To get you started you can simply clone the react-redux-skeleton repository and install the dependencies.

### Prerequisites

You need to must a git client to clone the repository. You can get it from [http://git-scm.com/](http://git-scm.com/).

Also you must to have node.js and npm (node.js package manager). You can get them from [http://nodejs.org/](http://nodejs.org/).

### Development environment

Clone the repository using [git](git):

```
git clone https://github.com/romandunets/react-redux-skeleton.git
```

Next, you need to install packages and run the application. There are two options to do that.

#### Running local development environment

Install all dependencies:

```
npm install
```

Start api mockup json-server:

```
npm run api
```

Start auto-reloading webpack-dev-server:

```
npm start
```

#### Running docker-compose development environment

You should have Docker and Docker-Compose on your machine to run the following commands. Build and start docker-compose containers:

```
docker-compose up
```

Container uses local directory as a volume, hence it supports hot reload for changes in the node code. For more information look at `docker-compose.yml`.

## References

* **[Official redux tutorial and documentation](http://redux.js.org/docs/introduction/)** by redux.js.org
* **[9 things every React.js beginner should know](https://camjackson.net/post/9-things-every-reactjs-beginner-should-know/)** by Cam Jackson
