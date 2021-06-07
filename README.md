# Shortify - An URL Shortner

## Description

Shortify is a simple MERN stack application that provides you a shortifed URL for your long URLs.

<div><img src="./screenshots/screenshot1.png" width="800" alt="Home Page"></div>

<div><img src="./screenshots/screenshot2.png" width="800" alt="Not Found Page"></div>

**Live preview:** [Shortify](https://g-shortify.herokuapp.com/)

## Installing dependencies

This postinstall script (which would install both dependencies for the backend and frontend) for this project uses yarn, so you should install yarn globally first if you don't have it already.

```sh
npm i -g yarn
```

Then you can simply install the dependencies using the command "yarn" in the root folder

```sh
yarn
```

## Usage

Before you run the project, make sure to create a config.env file in the path "src/config/config.env" (Or you can just copy the sample file in the config folder and rename it to config.env)

This is an example how the config file should look

```.env
NODE_ENV=development
PORT=5000

# BASE_URL is the URL of your host
BASE_URL=
MONGO_URI=
```

You should also change the default url for axios on the frontend to your url. Axios settings can be found on `client/src/App.js`

```jsx
axios.defaults.baseURL = 'https://g-shortify.herokuapp.com/rest';
```
