# MERN E-commerce app.

## Description
This is a full-stack web application (still in progress) built using Node.js, Express, and MongoDB. The project follows a structured folder architecture to maintain scalability and modularity.

## Folder Structure

### **1. config/**
Contains configuration files for the project, such as database connection settings, environment variables, and other global configurations.

### **2. controllers/**
Houses the controller logic for handling HTTP requests and business logic. Each controller corresponds to a specific feature of the application.

### **3. database/**
This folder contains scripts for database initialization, migrations, and seed data, if applicable.

### **4. helpers/**
Includes utility functions and reusable helper methods to keep the codebase clean and organized.

### **5. middleware/**
Contains custom middleware functions used for authentication, authorization, logging, error handling, and request validation.

### **6. models/**
Holds the database models (schemas) for defining the structure of MongoDB collections using Mongoose.

### **7. routes/**
Defines the API endpoints and maps them to corresponding controller functions. Each route file typically represents a feature/module.

## Root Files

### **.gitignore**
Specifies files and directories that should be ignored by Git, such as `node_modules/` and environment configuration files.

### **package-lock.json**
Automatically generated file that locks the exact versions of dependencies installed via npm.

### **package.json**
Contains project metadata, dependencies, scripts, and configuration settings.

### **server.js**
The main entry point of the application, responsible for setting up the Express server, connecting to the database, and initializing routes and middleware.

## Installation
To set up the project locally:

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd project-folder
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Contributing
This project is still in progress. Contributions, suggestions, and feedback are welcome!

## License
This project is open-source and available under the MIT License.

