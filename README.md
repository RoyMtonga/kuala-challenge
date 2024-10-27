# Kuala Challenge

Attempt of kuala techs coding challenge using Nextjs

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)

## Demo

https://kuala-challenge.vercel.app/

## Features

- **Next.js' file-based router
- **SSR and SSG** for fast page loads and SEO optimization

## Technologies Used

- **Next.js** - Framework for server-rendered React applications
- **React** - JavaScript library for building UI components
- **Tailwind CSS** - Utility-first CSS framework

## Project Structre

## Data Fetching

The project includes data-fetching utilities to streamline API calls. One such function, getMakes, is used to fetch vehicle makes from the API. Here's how it works:
    
    ```typscript
    import { VehicleMake } from "@/types";

    const URL = `${process.env.NEXT_PUBLIC_KUALA_API_URL}/get-vehicle-makes`

    const getMakes = async (): Promise<VehicleMake[]> => {
        const res = await fetch(URL);
        const result = await res.json();
        return result.data;
    };

    export default getMakes;
    ```

## Key Aspects

- Environment Variables: Uses process.env.NEXT_PUBLIC_KUALA_API_URL for the API base URL, making it configurable based on the environment.
- TypeScript: Enforces type checking by specifying Promise<VehicleMake[]> as the return type, ensuring data consistency.
- Asynchronous Data Fetching: Uses async/await to handle asynchronous API calls smoothly

## Getting Started

### Prerequisites

- Node.js >= 14

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/RoyMtonga/kuala-challenge.git
   cd repo-name

2. Install dependencies
    ```bash
    npm install

4. Set up environment variables

Create a .env.local file in the root of your project and add the environment variable. Here’s an example:
    ```env
    NEXT_PUBLIC_KUALA_API_URL=https://whitebook-engine.kuala.io

5. Start the development server
     ```bash
    npm run dev
