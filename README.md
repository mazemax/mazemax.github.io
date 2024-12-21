# Personal Website

This repository contains the source code for my personal website built using [Next.js](https://nextjs.org/). The site showcases my portfolio, and other personal projects.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [License](#license)

---

## Features

- **Portfolio**: A showcase of my projects and skills.
- **Responsive Design**: Optimized for all devices.
- **Fast and SEO-Friendly**: Built with Next.js and Tailwind CSS.
- **Optimized Images**: Uses `next/image` for efficient image loading.
- **Custom UI Components**: Tailored for a unique user experience.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v22 or higher)
- [Yarn](https://yarnpkg.com/) (preferred package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Run the development server:

   ```bash
   yarn dev
   ```

4. Open your browser and visit: `http://localhost:3000`

---

## Project Structure

```plaintext
.
├── app/                # Main application files
│   ├── blog/           # Blog-related pages
│   ├── components/     # Core UI components
│   ├── data/           # Static data used across the app
│   ├── globals.css     # Global styles
│   ├── hooks/          # Custom React hooks
│   ├── layout.tsx      # Layout component
│   ├── page.tsx        # Main page file
│   ├── styles/         # Additional styles
├── components/ui/      # Reusable UI components
├── lib/utils.ts        # Utility functions
├── public/             # Static assets (images, icons, etc.)
├── out/                # Exported static files (after build)
├── unity/              # Unity WebGL builds
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Project metadata and scripts
├── yarn.lock           # Dependency lockfile
```

---

## Scripts

- **`yarn dev`**: Starts the development server.
- **`yarn build`**: Builds the application for production.
- **`yarn start`**: Runs the built application.
- **`yarn lint`**: Lints the codebase.
- **`yarn deploy`**: Deploys the site as GitHub page.

---

## Dependencies

Key dependencies used in this project:

- **Next.js**: Framework for building React applications.
- **Tailwind CSS**: Utility-first CSS framework.
- **TypeScript**: Typed JavaScript for better development experience.
- **React Icons**: Icon library for React.

For a full list of dependencies, check the [`package.json`](package.json) file.

---

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use it as a reference or template for your own projects.

---

## Author

Developed and maintained by [Max Saad](http://mazemax.github.io).

Feel free to reach out via email or connect with me on [LinkedIn](https://www.linkedin.com/in/maxsaad).
