import React from 'react';
import { Redirect } from 'react-router-dom';


// Authentication related pages
import Login from "../views/Login";
import Register from "../views/Register";

//Pages
// import DashboardPage from "../views/Dashboard/Dashboard.js";
import Admin from "../layouts/Admin.js";
// import UserProfile from "../views/UserProfile";
// import ProvaList from "../views/ProvaList";
// import AttendancesList from "../views/AttendancesList";

import RTL from "../layouts/RTL.js";


const userRoutes = [
  // { path: '/admin', component: Admin },
  // { path: '/admin/addmember', component: UserProfile },
  // { path: '/admin/addattendance', component: ProvaList },
  // { path: '/admin/listattendance', component: AttendancesList },
  // this route should be at the end of all other routes
  // {path:"/admin", component:Admin},
  // { path:"/rtl", component:RTL},

  { path: '/', exact: true, component: () => <Redirect to="/dashboard" /> },
];

const authRoutes = [
//   { path: '/logout', component: Logout },
  { path: '/login', component: Login },
//   { path: '/forgot-password', component: ForgetPwd },
  { path: '/register', component: Register },

//   { path: '/pages-404', component: Pages404 },
//   { path: '/pages-500', component: Pages500 },

];

export { userRoutes, authRoutes };
