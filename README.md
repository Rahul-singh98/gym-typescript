# Gym TypeScript Project

This project is a comprehensive setup for developing a web application using React, TypeScript, and Vite. The setup includes configurations for ESLint, Docker, Tailwind CSS, and Nginx, providing a robust foundation for building scalable and maintainable applications.

## Features

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Vite**: A fast build tool and development server.
- **ESLint**: A tool for identifying and reporting on patterns in JavaScript.
- **Docker**: A platform for developing, shipping, and running applications.
- **Tailwind CSS**: A utility-first CSS framework.
- **Nginx**: A high-performance web server.

## Project Structure

```raw
gym-typescript/
├── public/
├── src/
├── .eslintrc.cjs
├── .gitignore
├── Dockerfile
├── README.md
├── index.html
├── nginx.conf
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
```

- **public/**: Contains public assets.
- **src/**: Contains the source code of the application.
- **Dockerfile**: Configuration file for Docker.
- **nginx.conf**: Configuration file for Nginx.
- **tailwind.config.js**: Configuration file for Tailwind CSS.
- **tsconfig.json**: TypeScript configuration files.
- **vite.config.ts**: Configuration file for Vite.

## Setup and Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Rahul-singh98/gym-typescript.git
   ```
2. Navigate to the project directory:
   ```sh
   cd gym-typescript
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Docker Setup

To run the application in a Docker container:

1. Build the Docker image:
   ```sh
   docker build -t gym-typescript .
   ```
2. Run the Docker container:
   ```sh
   docker run -p 80:80 gym-typescript
   ```

## ESLint Configuration

The project includes a minimal ESLint setup with some recommended rules. To expand the ESLint configuration for a production application, consider updating the `parserOptions` and `extends` properties in the `.eslintrc.cjs` file.

## Running Images

(Include images or screenshots here)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Screen Shots

**Home Page**
![Home Page](https://github.com/rahul-singh98/gym-typescript/tree/main/readme_resources/images/header.png)

**Benefits Page**
![Benefits Page](https://github.com/rahul-singh98/gym-typescript/tree/main/readme_resources/images/benefits.png)

**Our Classes Page**
![Our Classes Page](https://github.com/rahul-singh98/gym-typescript/tree/main/readme_resources/images/ourClasses.png)

#### Complete Demo with Signin/Signout

[![Video Demonstration](https://github.com/Rahul-singh98/gym-typescript/blob/main/readme_resources/images/header.png)](https://github.com/Rahul-singh98/gym-typescript/blob/main/readme_resources/videos/evo_gym_demonstration.webm)
