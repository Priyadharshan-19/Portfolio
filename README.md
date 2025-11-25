Priyadharshan M | AI-Powered Portfolio

This is the official repository for my personal portfolio website, designed to showcase my expertise in Generative AI, IoT Edge Computing, and Full-Stack Development.

The key feature of this portfolio is the integration of a custom, context-aware AI Assistant to make my skills and projects instantly searchable.

🌟 Key Features

Interactive AI Assistant (The Core Feature): A dedicated, floating chat widget powered by the Google Gemini API that is specifically trained on my resume data, project details, and technical focus areas. It acts as an interactive résumé.

Modern Architecture: Built as a fast, single-page application (SPA) using Next.js for high performance and optimized routing.

Fully Responsive Design: Optimized for seamless viewing across all devices (mobile, tablet, and desktop).

Smooth UX: Utilizes Framer Motion for polished, deliberate animations and transitions across all sections.

🚀 Tech Stack

| Category | Technology | Purpose |
| Frontend Framework | Next.js (React) | High-performance React framework for server-side rendering (SSR) capabilities. |
| Styling | Tailwind CSS | Utility-first CSS framework for rapid, responsive design. |
| Animation | Framer Motion | Library for smooth UI transitions and scroll-based animations. |
| AI Integration | Gemini API | Powers the custom AI Assistant for contextual conversation. |
| Icons | Lucide React | Lightweight, highly customizable icons. |

🛠 Getting Started (Local Development)

Follow these steps to clone the repository and run the project on your local machine.

1. Clone the Repository

git clone [https://github.com/Priyadharshan-19/Portfolio.git](https://github.com/Priyadharshan-19/Portfolio.git)
cd Portfolio




2. Install Dependencies

Install all necessary Node.js packages:

npm install
# or
yarn install




3. Set Up the Gemini API Key (Required for Chatbot)

To ensure the AI Chatbot works locally, you must provide your Gemini API Key.

Create a file named .env.local in the root of your project directory.

Add your API key to the file.
(Note: The deployed code uses a hardcoded key for this demonstration, but the standard secure method is below):

# Recommended for secure local testing (you would change FloatingAIWidget.tsx to use this)
# NEXT_PUBLIC_GEMINI_API_KEY="YOUR_API_KEY_HERE"

# Since the key is currently hardcoded in the component, just ensure you have a valid key.




(If you wish to switch to the secure environment variable setup, please update the API_KEY definition in app/components/FloatingAIWidget.tsx)

4. Run the Development Server

Start the application in development mode:

npm run dev
# or
yarn dev




The application will be accessible at http://localhost:3000.

🌐 Deployment

The site is built for easy deployment to Vercel (recommended) due to its Next.js framework.

⭐ LIVE SITE: https://priyadharshan-19.vercel.app/

The deployment process automatically uses Vercel's optimized build steps. For a secure live deployment, ensure you configure your Gemini API Key as an Environment Variable within the Vercel dashboard.

👩‍💻 Developed By

Priyadharshan M | "Engineering intelligent solutions for real-world impact."

GitHub

LinkedIn

Reach Me: priyadharshan802@gmail.com
