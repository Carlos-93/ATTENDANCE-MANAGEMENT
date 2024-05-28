<p align="center"><img src="https://github.com/Carlos-93/attendance-management/blob/master/public/next.svg" alt="Next Logo" title="Next.js Logo" width="35%"></p>

# Welcome to my Attendance Management System for Schools Using RFID Technology

This is a [Next.js 14](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine. 

You can download Node.js from [here](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/Carlos-93/attendance-management.git
    ```
2. Change into the project directory:
    ```bash
    cd attendance-management
    ```
3. Install Node dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

4. Set up the environment variables:

- Create a `.env` file in the root of your project and add the following content, replacing the placeholders with your actual values:
    ```bash
    DATABASE_URL="your_database_url"
    JWT_SECRET="your_secret_key"
    ```

- To generate a `JWT_SECRET`, you can use the following command in your terminal:
    ```bash
    openssl rand -base64 32
    ```

### Running the Development Server

- First, run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
