# What's in App

A simple project made with Nexjs, Typescript, Styled-jsx and Mongo to consume the [OMDb API](http://www.omdbapi.com/). It also use Jest for unit tests.

The main features are movie listing and detailing. Also possibility to add or remove a movie as a favorite.

## Setup

#### Requirements to use this project:

-   [Node.js](https://nodejs.org/download/)

-   [yarn (Package Manager)](https://yarnpkg.com/getting-started/install)

-   [MongoDB](https://www.mongodb.com/): I'm using a MongoDB to save the favorite movies, so you can either pointer to a MongoDB Container or any other instance of the database you have.
-   [Docker](https://www.docker.com/)\*: Just in case you choose using Mongo via Container

## How to run

-   Install all de dependecies

```sh
$ yarn install
```

-   Create a _.env.local_ file in the root with using [.env.local.example](./env.local.example) as example.
-   Run with the command:

```sh
$ yarn dev
```

## Run tests

To run tests you just need to execute:

```sh
$ yarn test
```
