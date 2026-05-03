# 🌞 SunCart – Summer Essentials Store

SunCart is a modern summer-themed eCommerce web application where users can explore and purchase seasonal products like sunglasses, summer outfits, skincare, and beach accessories.

---

## 🚀 Live Features

* 🔐 User Authentication (Email/Password + Google Login)
* 🛍️ Browse Summer Products
* 📄 Product Details (Protected Route)
* 👤 User Profile Management
* ✏️ Update Profile Information
* 🎨 Modern UI with Tailwind & DaisyUI
* ✨ Animations using Animate.css / Lottie

---

## 🧰 Tech Stack

* **Frontend:** Next.js (App Router), React
* **Styling:** Tailwind CSS, DaisyUI
* **Forms:** React Hook Form
* **Authentication:** BetterAuth
* **Icons:** React Icons
* **Animation:** Animate.css / Lottie

---

## 🖥️ Pages Overview

### 🏠 Home Page

* Hero Banner (Summer Sale / Slider)
* 🔥 Popular Products (3 items)
* 🌿 Summer Care Tips
* 🏷️ Top Brands Section

---

### 🔍 Product Details (Protected)

* Requires login
* Redirects to login if unauthorized
* Displays full product information

---

### 🔐 Authentication

#### Login Page

* Email & Password
* Google Login
* Redirect to Home after success

#### Register Page

* Name
* Email
* Photo URL
* Password
* Redirect to Login after success

---

### 👤 My Profile

* Displays:

  * Name
  * Email
  * Profile Photo

---

### ✏️ Update Profile

* Update:

  * Name
  * Image
* Uses BetterAuth update user API

---

## 🧩 Bonus Features

* ✅ Profile Update Functionality
* ✅ Animation Integration (Animate.css / Lottie)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/suncart.git
cd suncart
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

### 4️⃣ Open in browser

```
http://localhost:3000
```

---

## 🔐 Environment Variables

Create a `.env.local` file and add:

```env
NEXT_PUBLIC_AUTH_URL=your_auth_url
AUTH_SECRET=your_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_secret
```

---

## 🎯 Key Functional Requirements

* Persistent Navbar & Footer
* Route-based rendering (Next.js App Router)
* Protected Routes with redirect
* Form validation with React Hook Form
* Authentication using BetterAuth

---

## 📌 Future Improvements

* 🛒 Add Cart & Checkout System
* 💳 Payment Integration
* ⭐ Product Reviews
* 📦 Backend Database Integration

---

## 🙌 Author

**Parvez Nur Shadhin**

---

## 📄 License

This project is for educational purposes only.
