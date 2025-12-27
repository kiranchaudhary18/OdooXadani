# Maintenance ERP - Frontend

A modern, enterprise-grade maintenance management system built with React, Vite, and Tailwind CSS. This application provides a complete solution for equipment maintenance, work orders, team management, and preventive maintenance scheduling.

## 🎨 Features

- **Dashboard** - Real-time overview of equipment status, maintenance requests, and team load
- **Equipment Management** - Complete equipment inventory with detailed specifications and maintenance history
- **Maintenance Requests** - Create, track, and manage maintenance tasks (corrective & preventive)
- **Kanban Board** - Visual drag-and-drop task management with status workflow
- **Calendar View** - Schedule and view preventive maintenance activities
- **Team Management** - Manage technicians, assignments, and workload
- **Work Centers** - Facility and capacity management
- **Authentication** - Secure login with role-based access control
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

## 🚀 Tech Stack

- **React 19** - UI Framework
- **Vite 7** - Build tool & dev server
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Axios** - HTTP client
- **Lucide React** - Icons
- **Hello Pangea DND** - Drag & drop (Kanban)
- **Context API** - State management

## 📋 Prerequisites

- Node.js 16+ 
- npm or yarn

## 🛠️ Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5174`

## 🔐 Demo Credentials

### Use these credentials to test the application:

**Admin User:**
- Email: `admin@maintenance.com`
- Password: `admin123`

**Manager User:**
- Email: `manager@maintenance.com`
- Password: `manager123`

**Technician User:**
- Email: `tech@maintenance.com`
- Password: `tech123`

> Note: Demo credentials are hardcoded for testing. They will be replaced with real backend authentication once the API is ready.

## 📁 Project Structure

```
src/
├── api/                 # API integration & mock data
│   ├── axios.js        # Axios instance configuration
│   ├── auth.api.js     # Authentication endpoints
│   ├── equipment.api.js # Equipment management endpoints
│   └── maintenance.api.js # Maintenance endpoints
│
├── components/          # Reusable components
│   ├── common/         # Layout components (Navbar, Sidebar)
│   ├── ui/             # UI components (Badge, Modal, StatCard)
│   ├── calendar/       # Calendar component
│   └── kanban/         # Kanban board component
│
├── context/            # React Context (Auth)
├── pages/              # Page components
│   ├── auth/          # Login & Signup
│   ├── dashboard/     # Dashboard
│   ├── equipment/     # Equipment list & details
│   ├── maintenance/   # Maintenance requests
│   ├── teams/         # Team management
│   └── workcenter/    # Work center management
│
├── routes/            # Route definitions
├── utils/             # Utilities & constants
├── App.jsx           # Main app component
├── main.jsx          # Entry point
└── index.css         # Global styles
```

## 🎯 Key Features Details

### Dashboard
- Statistics cards showing critical metrics
- Recent maintenance requests table with search
- Quick overview of equipment status

### Equipment Management
- Browse all equipment with filters
- Detailed equipment view with specifications
- Maintenance history tracking
- Quick request creation from equipment details

### Maintenance Workflow
- Create corrective and preventive maintenance requests
- Assign to technicians
- Track estimated hours and required parts
- Status progression: New → In Progress → Repaired → Scrap

### Kanban Board
- Drag-and-drop task management
- Visual status organization
- Quick priority indicators
- Real-time updates

### Calendar
- Month view of scheduled maintenance
- Color-coded event types
- Easy navigation between months

## 🎨 Design System

### Color Palette
- **Primary**: Deep Indigo (#6b7fff) - Main brand color
- **Accent**: Teal/Cyan (#33eecc) - Highlights & secondary actions
- **Neutral**: Slate palette - Text & backgrounds
- **Status Colors**:
  - New: Blue
  - In Progress: Amber
  - Repaired: Green
  - Scrap/Critical: Red

### Typography
- Clean, modern sans-serif stack
- Hierarchy: 4xl → xl for headings
- Consistent spacing and line heights

### Components
- Rounded corners (lg: 0.75rem)
- Subtle shadows for depth
- Smooth transitions (200ms)
- Hover states on interactive elements

## 🔄 Backend Integration

Once the backend API is ready, simply update the `API_BASE_URL` in `src/api/axios.js`:

```javascript
const API_BASE_URL = 'http://your-backend-url/api';
```

The authentication system will automatically switch from mock to real API calls.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Sidebar collapses on mobile with floating action menu.

## ⚡ Performance

- Code splitting via React Router
- Lazy loading for route components
- Optimized re-renders with React.memo
- Tailwind CSS purging in production

## 🐛 Known Limitations

- Demo authentication doesn't persist across page refreshes (by design)
- Mock data is static (not synced with backend)
- Calendar is simplified for demo purposes

## 📝 Environment Variables

```bash
# .env (optional)
VITE_API_URL=http://localhost:3000/api
```

## 🚢 Deployment

### Build for production:
```bash
npm run build
```

### Deploy to Vercel, Netlify, or any static host:
The `dist/` folder contains production-ready files.

## 📞 Support

For issues or questions, contact the development team.

## 📄 License

© 2024 Maintenance ERP. All rights reserved.

---

**Happy Coding!** 🎉

