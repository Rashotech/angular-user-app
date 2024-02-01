## Angular Project Overview
Welcome to the Angular UserApp Project! This project was generated with Angular CLI version 17.1.0. It is designed to create a dynamic web application with two main components: a personalized landing page and a user data page.

### Project Objectives

## Landing Page:

The landing page serves as a personal introduction platform. Angular components are utilized to structure and organize content, with a focus on incorporating creative and personalized design elements for a unique user experience.

## User List and User Details Page:

The user page fetches and displays user information from an external API. Angular's HTTP Client is leveraged for seamless interaction with the API, and Angular routing is implemented to facilitate navigation between the landing page and the user page.


### Getting Started

#### Clone the Repository:

Begin by cloning this repository using below command.

git clone https://github.com/Rashotech/angular-user-app.git

Install Dependencies:

Navigate to the project directory and install the necessary dependencies using below commands.
cd angular-project
npm install

Run the Application:

Start the Angular development server to run the application locally using below command.
ng serve

Open your browser and visit http://localhost:4200/ to view the Angular project.

Project Structure

angular-user-app/
|-- src/
|   |-- app/
|       |-- landing-page/
|       |   |-- landing-page.component.html
|       |   |-- landing-page.component.scss
|       |   |-- landing-page.component.ts
|       |
|       |-- user-data/
|       |   |-- user-data.component.html
|       |   |-- user-data.component.scss
|       |   |-- user-data.component.ts
|       |
|       |-- app-routing.module.ts
|       |-- app.component.html
|       |-- app.component.scss
|       |-- app.component.ts
|       |-- app.module.ts
|
|-- ...
|-- (Other project files and configurations)