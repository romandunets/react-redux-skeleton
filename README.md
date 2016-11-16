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

## Getting Started

To get you started you can simply clone the react-redux-skeleton repository and install the dependencies:

### Prerequisites

You need to must a git client to clone the repository. You can get it from [http://git-scm.com/](http://git-scm.com/).

Also you must to have node.js and npm (node.js package manager). You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone repository

Clone the repository using [git](git):

```
git clone https://github.com/romandunets/react-redux-skeleton.git
```

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

## References

* **[Official redux tutorial and documentation](http://redux.js.org/docs/introduction/)** by redux.js.org
* **[9 things every React.js beginner should know](https://camjackson.net/post/9-things-every-reactjs-beginner-should-know/)** by Cam Jackson
