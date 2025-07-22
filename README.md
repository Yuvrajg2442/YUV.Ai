# YUV.Ai : Your Ultimate AI Career Coach!🚀

YUV.Ai is a Next.js application designed to provide personalized career guidance and resources using the power of AI. It helps users explore career options, craft compelling resumes and cover letters, and prepare for job interviews. The platform leverages Google's Gemini API and other cutting-edge technologies to deliver intelligent and tailored advice.

🚀 **Key Features**

*   ✨ **AI-Powered Career Guidance:** Get personalized career recommendations based on your skills, experience, and interests.
*   📝 **Resume Builder:** Create professional resumes with AI-assisted content generation and formatting.
*   ✉️ **Cover Letter Generator:** Generate tailored cover letters for specific job applications.
*   💡 **Interview Preparation:** Access resources and practice questions to ace your next interview.
*   🎨 **Customizable Themes:** Choose from a variety of themes to personalize your experience.
*   🌙 **Dark Mode Support:** Enjoy a comfortable viewing experience in low-light conditions.
*   📊 **Data Visualization:** Track your career progress with insightful charts and graphs.
*   🔒 **Secure Authentication:** Securely manage your account with Clerk authentication.

🛠️ **Tech Stack**

*   **Frontend:**
    *   React
    *   Next.js
    *   Tailwind CSS
    *   Radix UI
    *   Lucide React
    *   Class Variance Authority (cva)
    *   clsx
    *   Tailwind Merge
    *   Tailwindcss-animate
    *   Next-Themes
    *   @uiw/react-md-editor
    *   React-markdown
    *   Recharts
    *   Sonner
    *   React-spinners
*   **Backend:**
    *   Next.js API Routes
    *   Inngest (for background jobs)
*   **AI/ML:**
    *   @google/generative-ai (Gemini API)
*   **Authentication:**
    *   @clerk/nextjs
    *   @clerk/themes
*   **Form Handling:**
    *   React Hook Form
    *   @hookform/resolvers
    *   Zod (for schema validation)
*   **Database:**
    *   Prisma
*   **Utilities:**
    *   Date-fns
    *   Html2pdf.js (for PDF generation)
*   **Build Tools:**
    *   ESLint
    *   PostCSS

📦 **Getting Started**

### Prerequisites

*   Node.js (version 18 or higher)
*   npm or yarn or pnpm
*   A Clerk account (for authentication)
*   A Google Cloud project with the Gemini API enabled
*   A database (e.g., PostgreSQL, MySQL)

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd ai-career-coach
    ```

2.  Install dependencies:

    ```bash
    npm install # or yarn install or pnpm install
    ```

3.  Create a `.env` file in the root directory and populate it with the following environment variables:

    ```
    DATABASE_URL=<your_database_url>
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
    CLERK_SECRET_KEY=<your_clerk_secret_key>
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
    GEMINI_API_KEY=<your_gemini_api_key>
    ```

    Replace the placeholder values with your actual credentials.

4.  Generate the Prisma client:

    ```bash
    npx prisma generate
    ```

5.  Push the Prisma schema to your database:

    ```bash
    npx prisma db push
    ```

### Running Locally

1.  Start the development server:

    ```bash
    npm run dev # or yarn dev or pnpm dev
    ```

2.  Open your browser and navigate to `http://localhost:3000`.

💻 **Project Structure**

```
ai-career-coach/
├── app/                       # Next.js app directory
│   ├── (main)/                # Main application routes
│   │   └── layout.jsx         # Layout for main routes
│   ├── lib/                   # Utility functions and schemas
│   │   ├── schema.js          # Zod schemas for data validation
│   │   └── helper.js          # Helper functions (e.g., Markdown conversion)
│   ├── page.js                # Landing page
│   ├── globals.css            # Global CSS styles
│   ├── not-found.jsx          # Custom 404 page
│   └── layout.js              # Root layout
├── components/                # React components
├── data/                      # Data files (features, testimonials, FAQs)
├── public/                    # Public assets (images, fonts)
├── tailwind.config.mjs        # Tailwind CSS configuration
├── eslint.config.mjs          # ESLint configuration
├── next.config.mjs            # Next.js configuration
├── jsconfig.json              # JavaScript configuration
├── postcss.config.mjs         # PostCSS configuration
├── package.json               # Project dependencies and scripts
├── package-lock.json          # Dependency lockfile
└── README.md                  # This file
```

🤝 **Contributing**

We welcome contributions to the YUV.Ai project! To contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request to the main repository.

📝 **License**

This project is licensed under the [MIT License](LICENSE).

📬 **Contact**

If you have any questions or suggestions, please feel free to contact us at [yuvrajgupta01.work@gmail.com].

💖 Thanks for checking out the YUV.Ai: Your Ultimate AI Career Coach! We hope it helps you on your career journey.
