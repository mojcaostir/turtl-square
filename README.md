# Turtl Square

> Let's say you have an empty web page open in your web browser.
> The width and height of your web browser window can vary.
>
> Calculate the biggest square you can fit on the page (position, edge length).
> Then calculate the next biggest square you can fit without overlapping any other squares
> that are already on the page. Keep doing this until there is no room left on the page
> and you have calculated all the squares you can fit on it.

## Table of Contents

* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Setup](#setup)
* [Usage](#usage)
* [Room for Improvement](#room-for-improvement)
* [Licence](#licence)

## General Information

- This project was made for a Turtl Backend Engineering Challenge.

## Technologies Used

- [Node.js](https://nodejs.org/en/) development environment
- [Typescript](https://www.npmjs.com/package/typescript) language
- [Jest](https://www.npmjs.com/package/jest) testing framework
- [Joi](https://joi.dev/) for input validation

## Setup

1. Make sure you have Node.js v.16 and npm package manager installed.
2. Install the dependencies: `npm i`

## Usage

After setup, start the service with the `npm run start` command.
Change the `width` and `height` property in the `./src/index.ts` file to see the different output.

## Room for Improvement

Nothing is perfect in life, neither is Turtl Square. This is an uncompleted list of improvements
that could be done:

- CLI tool for better user experience
- edge case test scenarios
- containerize the service

## Licence

MIT
