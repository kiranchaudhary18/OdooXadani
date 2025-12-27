Deploy-Link : https://gearguard-qpbj.onrender.com

# 🛠️ OdooXadani – GearGuard | Maintenance ERP

A **modern, role-based Maintenance Management System (MMS)** inspired by Odoo, built for **industrial equipment tracking, preventive & corrective maintenance, and team workflows**.

This project was developed for a **Hackathon**, focusing on **real-world business logic, clean UX, and scalable architecture**.

---

## 🚀 Live Overview

**GearGuard** helps organizations:

* Track equipment & assets
* Manage preventive & corrective maintenance
* Assign tasks to the right technicians automatically
* Visualize work using **Kanban & Calendar views**
* Enforce **role-based access control** (Admin, Manager, Technician, User)

---

## 🧠 Problem Statement

Industrial maintenance teams often struggle with:

* Manual tracking of assets
* No visibility into upcoming maintenance
* Poor task ownership
* Lack of role-based control

**GearGuard solves this** by providing a centralized ERP-style system for maintenance operations.

---

## 🏗️ Tech Stack

### 🔹 Frontend

* React (Vite)
* Tailwind CSS
* React Router DOM
* Context API (Auth & Layout)
* Lucide Icons

### 🔹 Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Role-based Authorization

---

## 👥 User Roles & Permissions

### 👑 Admin

* Full system access
* Manage equipment & work centers
* Create & assign maintenance
* Manage teams & technicians
* View Kanban & Calendar
* Access reports

### 🧑‍💼 Manager

* View dashboard & equipment
* Create preventive maintenance
* Assign technicians
* View Kanban & Calendar

### 🧑‍🔧 Technician

* View assigned tasks only
* Update task status via Kanban
* View calendar schedule

### 👤 User

* Create maintenance requests
* Track request status

> 🔐 Access is enforced both at **route level** and **UI level**.

---

## 📊 Core Features

### ✅ Equipment Management

* Asset registry with serial number & location
* Maintenance history per equipment
* Smart "Maintenance" button with open task count

### 🔧 Maintenance Requests

* Corrective (Breakdown)
* Preventive (Scheduled)
* Auto-assign team based on equipment

### 🧩 Kanban Board

* New → In Progress → Repaired → Scrap
* Drag & Drop workflow
* Technician assignment visibility

### 📅 Maintenance Calendar

* Visual scheduling of preventive tasks
* Click date to create maintenance

### 👨‍👩‍👧‍👦 Team Management (Admin)

* Manage technicians
* Track workload

### 🏭 Work Centers

* Capacity tracking
* Equipment & technician allocation

---

## 🧠 Business Logic Highlight (Hackathon Scoring)

✔ Auto-fill maintenance team from equipment
✔ Default technician mapping
✔ Scrap logic updates equipment lifecycle
✔ Role-based route protection
✔ Real ERP-style workflows (Odoo inspired)

---

## 📁 Project Structure

```
OdooXadani/
│
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── middleware/
│
├── maintenance-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── utils/
│   │   └── routes/
│
└── README.md
```

---

## ⚙️ Installation & Setup

### Backend

```bash
cd Backend
npm install
npm run dev
```

### Frontend

```bash
cd maintenance-frontend
npm install
npm run dev
```

---

## 🧪 Demo Credentials

```
Admin     : admin@test.com | 123456
Manager   : manager@test.com | 123456
Technician: tech@test.com | 123456
User      : user@test.com | 123456
```

---

## 🌟 Why This Project Stands Out

* Real-world ERP workflows
* Clean & modern UI
* Strong business logic
* Scalable architecture
* Hackathon-ready

---

## 📌 Future Enhancements

* Reports & analytics dashboard
* Notifications & alerts
* Spare parts inventory
* Mobile-friendly PWA

---

## 🏁 Conclusion

**GearGuard (OdooXadani)** is not just a CRUD app — it is a **business-ready maintenance ERP** designed with real industry use cases.

> Built with ❤️ for Hackathons & Real Products

---


