# 🚀 Quick Start Demo Guide

## Getting Started (30 seconds)

### 1. Install Dependencies
```bash
cd maintenance-frontend
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```

Server starts at: **http://localhost:5174**

### 3. Login with Demo Credentials
Choose any account below and click the button on the login page:

| Role | Email | Password |
|------|-------|----------|
| **Admin** | admin@maintenance.com | admin123 |
| **Manager** | manager@maintenance.com | manager123 |
| **Technician** | tech@maintenance.com | tech123 |

---

## 🎯 What to Try

### Dashboard
1. View real-time statistics
2. See recent maintenance requests
3. Search and filter requests

### Equipment
1. Browse all equipment inventory
2. Click any equipment to see details
3. Create maintenance requests from equipment page

### Create Maintenance Request
1. Go to **Maintenance → Maintenance** (in sidebar)
2. Fill out the form:
   - Select request type (Corrective/Preventive)
   - Choose equipment
   - Assign to technician
   - Add description
3. Click "Create Request"

### Kanban Board
1. Go to **Maintenance → Kanban**
2. Drag cards between columns to change status
3. See visual priority indicators

### Calendar
1. Go to **Maintenance → Calendar**
2. View scheduled maintenance
3. Navigate between months

### Teams
1. Go to **Teams** in sidebar
2. View all technicians
3. See their assignments and specializations

### Work Center
1. Go to **Work Center** in sidebar
2. View facility capacity
3. Monitor technician distribution

---

## 🔄 Demo Features

✅ **Fully Functional**
- Login/Logout
- Navigation between all pages
- Form submissions with validation
- Search and filtering
- Drag-and-drop Kanban
- Calendar interaction
- Responsive mobile design

✅ **Mock Data**
- All data is in-memory (no persistence)
- Simulates real API responses
- Demo accounts are hardcoded

⏳ **Ready for Backend**
- All API calls go through Axios
- Simple switch to real API in `src/api/axios.js`
- Auth context handles token management

---

## 📦 Build for Production

```bash
# Create optimized build
npm run build

# Preview production build locally
npm run preview

# Deploy to Vercel, Netlify, etc.
# Just push the 'dist' folder
```

---

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { /* your brand color */ },
  accent: { /* secondary color */ }
}
```

### Add More Demo Users
Edit `src/api/auth.api.js`:
```javascript
const DEMO_CREDENTIALS = [
  { email: 'new@example.com', password: 'pass123', user: {...} }
]
```

### Add Real API
Update `src/api/axios.js`:
```javascript
const API_BASE_URL = 'http://your-backend.com/api';
```

---

## 🆘 Troubleshooting

**Port 5174 already in use?**
```bash
npm run dev -- --port 3000
```

**Styles not loading?**
```bash
npm run build
# Then check dist/index.html
```

**Hot reload not working?**
- Restart dev server: `npm run dev`
- Clear browser cache

---

## 📊 Page Overview

| Page | Features | Path |
|------|----------|------|
| Login | Demo credentials shown | `/login` |
| Dashboard | Stats, recent requests | `/dashboard` |
| Equipment | List, search, details | `/equipment` |
| Equipment Details | Specs, maintenance history | `/equipment/:id` |
| Create Request | Full form, validation | `/maintenance/requests` |
| Kanban | Drag-drop tasks | `/maintenance/kanban` |
| Calendar | Month view, events | `/maintenance/calendar` |
| Teams | Team members, load | `/teams` |
| Work Center | Facilities, capacity | `/workcenter` |

---

## 💾 File Size

- **Source**: ~150 KB (minified JS)
- **Tailwind**: ~50 KB (purged CSS)
- **Total Bundle**: ~200 KB (gzip)
- **Load Time**: < 1 second

---

## 🎓 Learning Resources

The code is well-structured for learning:
- **Authentication**: `src/context/AuthContext.jsx`
- **Routing**: `src/routes/AppRoutes.jsx`
- **API Integration**: `src/api/*.js`
- **Component Structure**: `src/components/`
- **Form Handling**: `src/pages/maintenance/CreateRequest.jsx`
- **Kanban**: `src/components/kanban/KanbanBoard.jsx`

---

## 🚀 Next Steps

1. ✅ Test all demo features
2. ✅ Review the code structure
3. ✅ Customize colors/branding
4. ✅ Connect to real backend API
5. ✅ Deploy to production

---

**Happy Hacking!** 🎉
