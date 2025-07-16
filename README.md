# 🔐 Authentication and Authorization Project (MERN Stack)

This is a full-stack MERN (MongoDB, Express, React, Node.js) application with JWT-based authentication and basic role-based authorization. It includes a protected frontend built with React and a secure backend built with Express.

---

## 📁 Project Structure

```
Authentication And Auterization/
├── Backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   ├── index.js
│   └── package.json
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/ (Signup, Signin, Home)
│   │   ├── utils.js
│   │   └── App.jsx
│   └── package.json
└── README.md
```

---

## 🚀 Features

* Signup & Signin with form validation
* Protected routes using JWT token
* Toast notifications for success/error
* Role-based navigation logic (basic)
* Fetch and display products for logged-in users

---

## 🧑‍💻 Technologies Used

### Frontend

* React
* Tailwind CSS
* React Router DOM
* React Toastify

### Backend

* Node.js
* Express
* MongoDB
* Mongoose
* dotenv
* JWT (jsonwebtoken)

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/Auth-Frontend-Backend-.git
cd Auth-Frontend-Backend-
```

### 2. Setup Backend

```bash
cd Backend
npm install
cp .env.example .env
# Add your MongoDB URI and JWT secret to .env
node index.js
```

### 3. Setup Frontend

```bash
cd ../Frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables (Backend)

```
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

## 📦 API Routes (Backend)

* `POST /auth/signup` – Register new user
* `POST /auth/signin` – Login user
* `GET /product` – Fetch all products (protected)

---

## 📸 UI Preview

* Styled using Tailwind CSS with a dark theme for auth pages.
* Products page shown only after successful login.
<img width="2484" height="1161" alt="create_account_page" src="https://github.com/user-attachments/assets/60bb4b2e-e4bf-44d6-a3bc-1cce865f5165" />
<img width="2430" height="1098" alt="login_page" src="https://github.com/user-attachments/assets/3e61b6b0-acaf-4070-aacc-25d6329f8d87" />
<img width="2538" height="1141" alt="after_login_page" src="https://github.com/user-attachments/assets/32a5e649-ff7f-4a46-afb5-3b68bcf140b4" />

---

## 📝 License

This project is open-source and available under the MIT License.

---

## 🙌 Acknowledgements

Built by Girish Maheshwari as part of a MERN full-stack learning project.
