# 🔐 DEMO CREDENTIALS

## 👤 Login Accounts

Use these credentials to test the application. They appear as quick-click buttons on the login page.

### 1️⃣ Admin Account
```
Email: admin@maintenance.com
Password: admin123
Role: Admin
```
**Access**: Full system access, all features

---

### 2️⃣ Manager Account
```
Email: manager@maintenance.com
Password: manager123
Role: Manager
```
**Access**: Team management, maintenance oversight

---

### 3️⃣ Technician Account
```
Email: tech@maintenance.com
Password: tech123
Role: Technician
```
**Access**: View tasks, create maintenance requests

---

## 🔄 How to Use

### Option 1: Click Demo Button (Easiest)
1. Go to login page: http://localhost:5174/login
2. See "Demo Mode" section
3. Click any account to auto-fill & login

### Option 2: Manual Entry
1. Copy email & password
2. Paste into login form
3. Click "Sign In"

---

## ✨ Features Each Role Can Access

| Feature | Admin | Manager | Technician |
|---------|-------|---------|-----------|
| Dashboard | ✅ | ✅ | ✅ |
| Equipment List | ✅ | ✅ | ✅ |
| Equipment Details | ✅ | ✅ | ✅ |
| Create Request | ✅ | ✅ | ✅ |
| View Requests | ✅ | ✅ | ✅ |
| Kanban Board | ✅ | ✅ | ✅ |
| Calendar | ✅ | ✅ | ✅ |
| Teams | ✅ | ✅ | ✅ |
| Work Center | ✅ | ✅ | ✅ |

> Note: Demo mode treats all roles equally for testing

---

## 🎯 Testing Guide

### Test as Admin
1. Login with admin credentials
2. Create equipment
3. Create maintenance requests
4. Assign tasks to team
5. View reports

### Test as Manager
1. Login with manager credentials
2. Monitor team load
3. Review maintenance queue
4. View team assignments
5. Check calendar

### Test as Technician
1. Login with technician credentials
2. View assigned tasks
3. Create new requests
4. Mark tasks complete
5. View work schedule

---

## 💾 Where Credentials Are Stored

**File**: `src/api/auth.api.js`

```javascript
const DEMO_CREDENTIALS = [
  {
    email: 'admin@maintenance.com',
    password: 'admin123',
    user: { id: 1, name: 'Admin User', role: 'Admin' }
  },
  {
    email: 'manager@maintenance.com',
    password: 'manager123',
    user: { id: 2, name: 'Manager User', role: 'Manager' }
  },
  {
    email: 'tech@maintenance.com',
    password: 'tech123',
    user: { id: 3, name: 'Technician User', role: 'Technician' }
  }
];
```

---

## 🔄 Replace with Real Backend

When your backend is ready:

1. **Update API URL** in `src/api/axios.js`:
```javascript
const API_BASE_URL = 'http://your-backend-api.com/api';
```

2. **Remove demo credentials** from `src/api/auth.api.js`:
```javascript
// Delete DEMO_CREDENTIALS and mockLogin function
// The real backend will handle authentication
```

3. **Update Login component** `src/pages/auth/Login.jsx`:
```javascript
// Remove demo credential buttons
// Keep only the form
```

---

## 📋 Demo Data Available

### Equipment (5 items)
- Pump A-01
- Motor B-02
- Compressor C-03
- Valve V-04
- Bearing B-05

### Team Members (5 people)
- John Smith (Senior Technician)
- Sarah Johnson (Technician)
- Mike Davis (Maintenance Engineer)
- Emily Brown (Technician)
- Robert Wilson (Team Lead)

### Work Centers (5 facilities)
- Main Workshop
- Secondary Workshop
- Hydraulic Service Center
- Electrical Lab
- Storage & Parts Room

### Maintenance Requests (5 examples)
- Various statuses
- Different priorities
- Pre-assigned technicians
- Multiple equipment types

---

## ⏰ Session Management

- **Duration**: Sessions persist until logout
- **Persistence**: Not saved between page refreshes (demo mode)
- **Auto-logout**: Logout button in navbar user menu
- **Token**: Fake JWT token generated per login

---

## 🚨 Important Notes

> ⚠️ **Demo Credentials are for testing ONLY**
> - Replace with real authentication when backend is ready
> - Do NOT use in production
> - All data is in-memory and temporary

---

## 🆘 Troubleshooting

**Credentials not working?**
- Clear browser cache
- Restart dev server
- Check browser console for errors

**Forgot which role?**
- Check this file!
- Or read the demo buttons on login page

**Want to add more users?**
- Edit `src/api/auth.api.js`
- Add to DEMO_CREDENTIALS array
- Restart dev server

---

## 📝 Quick Reference

Save this for quick copy-paste:

```
ADMIN
admin@maintenance.com / admin123

MANAGER
manager@maintenance.com / manager123

TECHNICIAN
tech@maintenance.com / tech123
```

---

**Happy Testing!** 🎉
