# Petflix

## Table of Content
1. [Requirements](#requirements)
2. [Project Guidelines](#project-guidelines)
    - [Minimum Viable Product](#minimum-viable-product)
    - [Extra Deliverables](#extra-deliverables)
3. [Project Setup](#project-setup)
    - [Installations](#installations)
    - [Access](#access)
    - [Challenges](#challenges)
4. [Authors](#authors)
5. [License](#license)
 

## Requirements
A whole host of people are looking for pets to adopt. Petfinder is one such platform to assist in such a quest. Your task will be to try and create a clone of petfinder while also exploring your own creativity. Using the following data: https://www.petfinder.com/developers/v2/docs/ 


## Project Guidelines

### Minimum Viable Product

The following requirements MUST be delivered in order to consider your submission as complete:

1. Home Page - When a user first opens the application, they should be greeted with a page that has information about what the application aims to do.
2. Users should be able to view a list of random animals available for adoption.
3. Users should be able to view a list of organizations that offer animal adoption services.
4. Users should be able to search for animals by breed and type.
5. Each animal should have a details page that provides detailed information about the animal.
6. Each organization should have a details page that provides detailed information about the organization.


### Extra Deliverables

The following deliverables will earn you extra points:
1. Add an authentication page (Login / Registration)
2. Provide a logout functionality
3. For each animal type display a list of all breeds associated with it.


### User Stories
- When the user loads the page, they will see a login page.
- After logining in, the user will be diverted to the hompage
- The homepage has a navbar that displays website to adopt animals
- When you click on Animals on the navbar, it takes you to a page that has a list of animals 
- The animals card has a view details button that diplays a detailed page of each animal
- When you click on Organizations on the navbar, it takes you to a page that has a list of organisations
- The organization's card has a visit button that directs you to the organizations website


## Project Setup

To access this project on you local computer, follow the steps below

* Open your terminal

* Clone this repository: 
    - Run <code>git clone (https://github.com/prince475/petflix)</code>

* Open Visual Studio Code:
    - Run <code>code .</code>

* Click on the available files to view the codes used


### Installations:

<code>npm install create-react-app@latest app-name</code> was used to install the latest version of react

<code>npm install react-router-dom</code> was used for routing

<code>npm install react-icons --save</code> was used for styling


### Access

To access the content on the browser:

* click on this deployed link from vercel (https://petflix-chi.vercel.app/)

  * or

* Run <code>npm install</code> on the terminal to install node module dependancies

* Run <code>npm start</code> on your terminal to start the backend json server to view it in your browser.

### Challenges
In order to access the API used to fetch the data, an account needs to be created with PetFinder (https://www.petfinder.com/developers/v2/docs/). The Challenge is you are provided with a token that expires after 60 minutes. You are then required to generate a new token. Multiple regeneration of tokens results in a "access to fetch blocked by CORS policy" error. 

The solution to this is storing the fetched data online. (https://www.npoint.io/) was used in this project to store the JSON data.


# Authors

This project was contributed to by: 
* [Prince Daniel](https://github.com/prince475)
* [Nyokabi Kamau](https://github.com/NyokabiKamau)
* [Faith Moora](https://github.com/the-datageek)
* [Kaltuma Noor](https://github.com/kaltumanoor)

# License

* This project is licensed under GNU General Public License v3

