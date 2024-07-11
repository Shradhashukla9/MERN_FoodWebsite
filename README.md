# Food Ordering Project

## Description

A food ordering application built with a React frontend and a Node.js backend using MongoDB for data storage. It utilizes MongoDB for data storage and includes features such as user authentication, menu management, order handling, and more.

![image-home](https://github.com/Shradhashukla9/MERN_FoodWebsite/assets/149618444/7c6db9a1-4850-4749-b6ce-b7f968adcebb)

![image2-menu](https://github.com/Shradhashukla9/MERN_FoodWebsite/assets/149618444/45cd1eef-ce6d-459c-a5ca-f820ad75040e)

## Features
- **Authentication**: 
  - User signup and login functionality with authentication.
  - Secure password hashing(bcrypt) and validation.
  - Protected routes for authenticated users.

- **Menu Management**: 
  - CRUD operations for managing restaurant menu items.
  - Admin dashboard for menu item management.

- **Order Management**: 
  - Placing and managing orders.
  - Order status tracking and updates.

- **Data Storage**: 
  - MongoDB integration for storing menu items and orders.
  - Mongoose for modeling data schemas.
 
- **Responsive Design**: 
  - The application is designed to be responsive and adapt seamlessly to different screen sizes and devices.
  - Utilizes responsive design principles with CSS media queries and flexible layout components.

- **User Interface**: 
  - Responsive UI design using Material-UI components.
  - Form validation and error handling.
  - Interactive features for order submission and menu updates.

## Tools and Technologies

- **React**: Frontend framework for building user interfaces.
- **Node.js**: JavaScript runtime for the backend.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Axios**: Promise-based HTTP client for making API requests.
- **react-hook-form**: Library for handling form state and validation in React.
- **react-hot-toast**: Library for showing notifications in React.
- **Docker**: Platform for developing, shipping, and running applications in containers.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building modern websites.
- **Daisy UI**:  daisyUI is an open source component library built on top of Tailwind CSS.

## Docker

To build and run the application using Docker, follow these steps:

1. Build the Docker images:

    ```bash
    docker-compose build
    ```

2. Start the Docker containers:

    ```bash
    docker-compose up
    ```

3. Open your browser and navigate to `http://localhost:5173`.

The backend will be running on `http://localhost:4001`.

## Project Structure

- `Frontend/` - React application source code.
- `Backend/` - Node.js backend source code.
- `docker-compose.yml` - Docker Compose configuration file.
- `Frontend/Dockerfile` - Dockerfile for the React frontend.
- `Backend/Dockerfile` - Dockerfile for the Node.js backend.


## Running Locally

If you prefer to run the application locally without Docker:

1. Start the backend server:

    ```bash
    cd Backend
    npm install
    npm start
    ```

2. Start the frontend server:

    ```bash
    cd Frontend
    npm install
    npm run dev
    ```

3. Open your browser and navigate to `http://localhost:5173`.


