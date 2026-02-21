# 🚀 Vibe Code Editor

Vibe Code Editor is a high-performance, web-based IDE built with **Next.js 15**, **Monaco Editor**, and **WebContainers**. It provides a seamless development experience directly in your browser, allowing you to write, run, and manage code with a professional-grade interface.

## ✨ Key Features

- **💻 Professional Editor**: Powered by the **Monaco Editor** (the same engine behind VS Code), featuring syntax highlighting, IntelliSense, and multi-cursor support.
- **⚡ In-Browser Execution**: Integrated with **WebContainer API**, enabling you to run Node.js environments and dev servers directly in the browser's sandbox.
- **🛠️ Full Stack Ready**: Built on **Next.js 15** with App Router, **Prisma** for database management, and **Tailwind CSS** for a sleek, responsive UI.
- **🔐 Secure Authentication**: Robust user management and authentication powered by **NextAuth.js**.
- **🎨 Modern Aesthetic**: A beautiful, responsive design using **Radix UI** primitives and high-quality iconography from **Lucide React**.
- **📂 File Management**: Intuitive sidebar for navigating project structures and managing multiple files.
- **⌨️ Integrated Terminal**: Built-in terminal using **xterm.js** for command-line interactions within the editor.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Editor**: [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- **Runtime**: [WebContainer API](https://webcontainers.io/)
- **Database**: [Prisma ORM](https://www.prisma.io/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm / yarn / pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shagunchaudhary19/vive-code-editor.git
   cd vive-code-editor
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your configuration (Database URL, NextAuth secrets, etc.).
   ```env
   DATABASE_URL="your-database-url"
   NEXTAUTH_SECRET="your-secret"
   ```

4. **Initialize the database:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```text
├── app/                  # Next.js App Router pages and layouts
├── components/           # Reusable UI components
├── features/             # Feature-specific logic (editor, workspace, etc.)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and shared libraries
├── prisma/               # Database schema and migrations
├── public/               # Static assets
└── vibecode-starters/    # Project templates and starter kits
```

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ by [Shagun Chaudhary](https://github.com/shagunchaudhary19)
