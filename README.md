

# Syncaura Frontend 🚀

Syncaura Frontend is a modern, scalable **React-based frontend application** built using **Vite** and **Tailwind CSS**.  
It provides a dashboard-driven user interface for managing projects, tasks, chats, attendance, meetings, and more.

The project follows a **clean modular architecture** to ensure maintainability and smooth team collaboration.

---

## 📁 Repository Structure

# Frontend Folder Structure

This README describes the frontend project structure and explains the purpose of each folder and important file.

---

## 📁 Project Structure

```bash
FRONTEND/
│
├── public/
│   ├── background/        # Background images used across the app
│   ├── fonts/             # Custom fonts
│   ├── images/            # Static images
│   └── vite.svg
│
├── src/
│   ├── assets/            # Icons, images, and other static assets
│   │
│   ├── components/        # Reusable UI components
│   │   ├── Admin/         # Admin-related components
│   │   ├── auth/          # Authentication components (SignIn, SignUp, etc.)
│   │   ├── dashboard/     # Admin dashboard components
│   │   └── userdashboard/ # User dashboard components
│   │
│   ├── layouts/           # Layout components
│   │   └── MainLayout.jsx # Common layout wrapper (Header, Sidebar, etc.)
│   │
│   ├── pages/             # Page-level components
│   │   ├── AdminDashboard.jsx
│   │   ├── Attendance.jsx
│   │   ├── Chat.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Documents.jsx
│   │   ├── Meetings.jsx
│   │   ├── Projects.jsx
│   │   ├── SignIn.jsx
│   │   ├── SignUp.jsx
│   │   ├── Tasks.jsx
│   │   └── UserDashboard.jsx
│   │
│   ├── store/             # Global state management
│   │   └── useThemeStore.js # Theme (dark/light) state store
│   │
│   ├── App.jsx            # Root React component
│   └── main.jsx           # Application entry point
│
├── .gitignore             # Git ignored files and folders
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML entry file
├── package.json           # Project dependencies and scripts
├── package-lock.json      # Locked dependency versions
├── README.md              # Project documentation
└── vite.config.js         # Vite configuration
```

---

## 🛠 Tech Stack

* React (Vite)
* Tailwind CSS
* JavaScript (ES6+)
* Zustand (State Management)

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

---

## 📌 Notes

* `components/` contains reusable UI parts.
* `pages/` represents route-level screens.
* `layouts/` is used to maintain consistent UI structure.
* `store/` manages global states like theme.

---

Happy Coding! 🚀




---

## 🧩 Features Overview

### 📊 Dashboard
- Admin and User dashboards
- Statistics cards
- Interactive charts using **Chart.js**
- Fully responsive layouts

### 🔐 Authentication
- Sign In & Sign Up UI
- Role-based pages (Admin / User)
- Ready for JWT-based authentication

### 💬 Chat Module
- Real-time chat UI
- Designed for Socket.IO backend integration

### 📁 Project & Task Management
- Project listing and overview
- Task management UI
- Clean and intuitive design

### 📅 Attendance & Meetings
- Attendance tracking interface
- Meetings scheduling UI

### 🌗 Theme Support
- Light / Dark mode
- Global theme management
- CSS variables + Tailwind CSS

---

## 🛠 Tech Stack

- **React.js**
- **Vite**
- **Tailwind CSS**
- **Chart.js**
- **React Chart.js 2**
- **JavaScript (ES6+)**
- **HTML5 & CSS3**

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-org/syncaura-frontend.git
cd FRONTEND



npm install

npm run dev
http://localhost:5173


🔗 Backend Integration

This frontend is designed to work with the Syncaura Backend Mono-repository, including:

Authentication API

CRUD Services

Leave Management

Real-time Chat (Socket.IO)

API base URLs can be configured using environment variables.

👥 Team Collaboration Rules

Single Git repository for frontend

Follow modular folder structure

Do NOT commit node_modules

Always pull before pushing:

git pull origin main

🚫 Ignored Files

The following files are excluded using .gitignore:

node_modules/

dist/

.env

IDE configuration files

📌 Future Enhancements

Backend API integration

Protected routes & role-based access

Mobile responsiveness improvements

Performance optimization

PWA support

Testing (Unit & Integration)

📄 License

This project is developed for educational and internal purposes.
License information can be added if required.

🤝 Contributors

Developed and maintained by the Syncaura Frontend Team.

⭐ If you find this project useful, consider starring the repository!


---

If you want, I can:
- Add **GitHub badges**
- Write **API env setup section**
- Create **deployment instructions**
- Customize this for **college / internship submission**

Just tell me 👍

