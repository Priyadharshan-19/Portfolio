---

# 👩‍💻 Priyadharshan M | AI-Powered Portfolio

This is the official repository for my personal portfolio website, designed to showcase my expertise in **Generative AI**, **IoT Edge Computing**, and **Full-Stack Development**.

The highlight of this portfolio is the integration of a **custom, context-aware AI Assistant** that makes my skills and projects instantly searchable — like an intelligent, interactive résumé.

---

## ✨ Key Features

### ✅ **Interactive AI Assistant (Core Feature)**

A floating chat widget powered by the **Google Gemini API**, trained on:

* My résumé
* My project data
* My technical focus areas

It serves as an **on-site personal assistant** for recruiters and visitors.

### ✅ **Modern Architecture**

Built as a fast **Next.js Single-Page Application (SPA)** for optimized routing and performance.

### ✅ **Fully Responsive**

Works seamlessly across **mobile, tablet, and desktop** devices.

### ✅ **Smooth UI & UX**

Enhanced user experience using **Framer Motion** animations for transitions and section reveals.

---

## 🚀 Tech Stack

| **Category**       | **Technology**      | **Purpose**                                  |
| ------------------ | ------------------- | -------------------------------------------- |
| Frontend Framework | **Next.js (React)** | High-performance SPA with SSR capabilities   |
| Styling            | **Tailwind CSS**    | Utility-first, highly responsive styling     |
| Animation          | **Framer Motion**   | Smooth transitions and page animations       |
| AI Integration     | **Gemini API**      | Powers the custom context-aware AI Assistant |
| Icons              | **Lucide React**    | Lightweight, customizable icon set           |

---

## ⚙️ Installation & Setup (Local Development)

Follow the steps below to run this portfolio project on your system.

---

### **1. Clone the Repository**

```bash
git clone https://github.com/Priyadharshan-19/Portfolio.git
cd Portfolio
```

---

### **2. Install Dependencies**

```bash
npm install
# or
yarn install
```

---

### **3. Set Up the Gemini API Key**

*(Required for the AI Chatbot)*

Create a file named **`.env.local`** in the project root and add:

```bash
# Recommended secure method
NEXT_PUBLIC_GEMINI_API_KEY="YOUR_API_KEY_HERE"
```

> Note:
> The deployed version currently uses a hardcoded key for demo purposes.
> If switching to environment variables, update the `API_KEY` definition inside:
> `app/components/FloatingAIWidget.tsx`

---

### **4. Run the Development Server**

```bash
npm run dev
# or
yarn dev
```

Your application will now be available at:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🌐 Deployment

This portfolio is optimized for easy deployment on **Vercel** (recommended) due to its seamless support for Next.js.

### ⭐ **LIVE SITE:**

### 👉 [https://priyadharshan-19.vercel.app/](https://priyadharshan-19.vercel.app/)

For secure deployment:

* Add your **Gemini API key** in Vercel → Project Settings → Environment Variables.

---

## 🤝 Developed By

**Priyadharshan M**
✨ *"Engineering intelligent solutions for real-world impact."*

📧 **Reach Me:** [priyadharshan802@gmail.com](mailto:priyadharshan802@gmail.com)

