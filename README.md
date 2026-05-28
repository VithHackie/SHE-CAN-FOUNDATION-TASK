# 🌟 She Can Foundation - Contact Portal & Admin Dashboard

![Responsive Design Badge](https://img.shields.io/badge/Design-Responsive-brightgreen)
![Authentication Badge](https://img.shields.io/badge/Auth-Secured-blue)
![Database Badge](https://img.shields.io/badge/Database-Firestore-orange)

A full-stack web application developed for the **She Can Foundation** Full Stack Development Internship Task. This project goes beyond the basic form submission requirement by implementing a complete, secure, and responsive end-to-end communication system connecting users directly to the foundation's administration.

## ✨ Advanced Features Implemented

This project was built to demonstrate proficiency across the entire web stack, successfully integrating the following advanced task requirements:

* 📱 **Responsive Design:** The UI is completely fluid, providing a seamless experience across desktop, tablet, and mobile devices.
* ✅ **Form Validation:** Robust validation is implemented to ensure data integrity before it ever reaches the database.
* 🔌 **RESTful APIs:** Custom endpoints handle data transmission between the client frontend and the backend logic safely and efficiently.
* 🗄️ **Database Integration:** Seamlessly connected to **Firebase Firestore** to store, query, and manage user submissions in real-time.
* 🔐 **Authentication:** A secure gateway protects the backend. Only users with verified admin credentials can access the dashboard.
* 🛡️ **Admin Panel:** A dedicated, authenticated portal where administrators can view all incoming messages, beautifully formatted with submission timelines.
* ⚙️ **Backend Features (Direct Email Reply):** Admins can hit "Reply" directly from the dashboard to send an email response to the user's query without leaving the application.

## 🚀 System Architecture

### 1. The User Portal (Frontend)
A clean, accessible contact page where visitors can submit their Name, Email, and Message. The form includes real-time validation and provides clear success feedback ("Form Submitted Successfully") upon a successful API call.

### 2. The Admin Dashboard (Backend/Protected)
A hidden route protected by an authentication layer. Once logged in, administrators can:
* View a real-time list of all submissions.
* See exact timestamps for when messages were received.
* Click a "Reply" button to directly draft and send an email response to the applicant.

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 / Tailwind (or substitute your specific frontend tech here)
* **Backend:** Node.js, Express.js
* **Database:** Firebase Firestore
* **Authentication:** Firebase Auth / Custom Admin Middleware
* **Mailing Service:** Nodemailer (or your chosen email service)

## 💻 Getting Started (Local Development)

To run this project locally on your machine, follow these steps:

### Prerequisites
* Node.js installed on your machine
* A Firebase account and project set up

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/shecan-foundation-task.git](https://github.com/your-username/shecan-foundation-task.git)
   cd shecan-foundation-task
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3 **Run the development server:**
  ```bash
  npm run dev
  ```
