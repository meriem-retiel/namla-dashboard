import React from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { Section } from "../views/Section";
const ROUTES = [
  {
    path: "/home",
    key: "HOME",
    name: "Home",
    component: () => <Section routeKey="HOME" />,
    routes: [
      {
        path: "/home/clusters",
        key: "HOME_CLUSTERS",
        name: "Clusters",
        exact: true,
        component: () => <h1>Home clustoers</h1>,
      },
      {
        path: "/home/edge",
        key: "HOME_EDGE",
        name: "Edge",
        exact: true,
        component: () => <h1>Home edge</h1>,
      },
      {
        path: "/home/devices",
        key: "HOME_DEVICES",
        name: "Devices",
        exact: true,
        component: () => <h1>Home devices</h1>,
      },
    ],
  },
  {
    path: "/admin",
    key: "ADMIN",
    name: "Admin",
    component: () => <Section routeKey="ADMIN" />,
    routes: [
      {
        path: "/admin/profile",
        key: "ADMIN_PROFILE",
        name: "Profile",
        exact: true,
        component: () => <h1>Admin Profile</h1>,
      },
      {
        path: "/admin/settings",
        key: "ADMIN_SETTINGS",
        name: "Settings",
        exact: true,
        component: () => <h1>Admin Settings</h1>,
      },
    ],
  },
  {
    path: "/Analytics",
    key: "ANALYTICS",
    name: "Analytics",
    component: () => <Section routeKey="ANALYTICS" />,
    routes: [
      {
        path: "/analytics/global",
        key: "ANALYTICS_GLOBAL",
        name: "Global",
        exact: true,
        component: () => <h1>Global Analytics</h1>,
      },
      {
        path: "/analytics/devices",
        key: "ANALYTICS_DEVICES",
        name: "Devices",
        exact: true,
        component: () => <h1>Devices Analytics</h1>,
      },
    ],
  },
];

export default ROUTES;

//Render a route with potential sub routes
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

//For any new section of routes (any config object that has a "routes" property
export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}

//recursive function to get a route by its key value
export function getSubroutes(routes, key) {
  let result = "not found";
  routes.forEach((route) => {
    if (route.key == key) {
      result = route;
    } else {
      if (route.routes) {
        getSubroutes(route.routes, key);
      }
    }
  });
  return result.routes ? result.routes : [];
}
