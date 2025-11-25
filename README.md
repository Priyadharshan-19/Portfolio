👩‍💻 Priyadharshan M | AI-Powered Portfolio

This repository contains the source code for my personal portfolio website, built to showcase my expertise in Generative AI, IoT Edge Computing, and Full-Stack Development.

A standout feature of this portfolio is the integration of a context-aware AI Assistant that makes my projects, skills, and experience instantly searchable.

✨ Key Features
✅ Interactive AI Assistant (Core Feature)

A floating, custom-built chat widget powered by the Google Gemini API, trained on:

My resume data

Project descriptions

Technical focus areas

It works as an interactive résumé inside the website.

✅ Modern Architecture

Built as a high-performance Next.js SPA with optimized routing.

✅ Fully Responsive

Beautifully optimized for mobile, tablet, and desktop screens.

✅ Smooth User Experience

Uses Framer Motion for clean animations and transitions.

🚀 Tech Stack
| Category           | Technology      | Purpose                          |
| ------------------ | --------------- | -------------------------------- |
| **Frontend**       | Next.js (React) | High-performance SPA + SSR       |
| **Styling**        | Tailwind CSS    | Utility-first, responsive design |
| **Animation**      | Framer Motion   | Smooth UI transitions            |
| **AI Integration** | Gemini API      | Powers the custom AI Assistant   |
| **Icons**          | Lucide React    | Lightweight icon set             |


Follow these steps to run the project locally.

1. Clone the Repository
git clone https://github.com/Priyadharshan-19/Portfolio.git
cd Portfolio

2. Install Dependencies
npm install
# or
yarn install

3. Set Up Gemini API Key (Required for Chatbot)

Create a .env.local file:

NEXT_PUBLIC_GEMINI_API_KEY="YOUR_API_KEY_HERE"


Note:
The deployed demo currently uses a hardcoded API key inside FloatingAIWidget.tsx.
For secure usage, switch to the environment variable setup.

4. Run Development Server
npm run dev
# or
yarn dev


Your app will run at:
👉 http://localhost:3000

🌐 Deployment

The project is optimized for Vercel deployment, thanks to native Next.js support.

⭐ Live Site:
https://priyadharshan-19.vercel.app/

Make sure to configure your Gemini API key in Vercel under:
Project → Settings → Environment Variables

🤝 Developed By
Priyadharshan M

“Engineering intelligent solutions for real-world impact.”

📌 GitHub: Add your link here
📌 LinkedIn: Add your link here
📧 Reach Me: priyadharshan802@gmail.com
