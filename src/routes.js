/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import UserPage from "views/User.js";

var routes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: "nc-icon nc-shop",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/messages",
    name: "Messages",
    icon: "nc-icon nc-chat-33",
    component: Typography,
    layout: "/admin",
  }, {
    path: "/meetings",
    name: "Meetings",
    icon: "nc-icon nc-tie-bow",
    component: Icons,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/user-page",
    name: "Your Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
];
export default routes;
