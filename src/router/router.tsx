import * as React from "react";
import * as Loadable from "react-loadable";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "../App";
// import Main2 from "../pages/Main/Main";
const Main = Loadable({
  loader: () => import("../pages/Main/Main"),
  loading: () => null
});
const Home = Loadable({
  loader: () => import("../components/Home/Home"),
  loading: () => null
});
const Find = Loadable({
  loader: () => import("../components/Find/Find"),
  loading: () => null
});
const routes: any[] = [
  {
    component: Main,
    path: "/main",
    exact: false,
    routes: [
      {
        component: Home,
        path: "/main/home",
        exact: false,
        routes: [
          {
            component: Find,
            path: "/main/home/1"
          }
        ]
      },
      {
        exact: true,
        component: Find,
        path: "/main/find"
      }
    ]
  },
  {
    exact: true,
    component: Find,
    path: "/test"
  }
];
const renderRoutes = (routers: any) =>
  routers.map((item: any, index: number) => (
    <Route
      path={item.path}
      exact={item.exact}
      key={item.path}
      render={props => (
        <item.component {...props}>
          {item.routes && renderRoutes(item.routes)}
        </item.component>
      )}
    />
  ));
const RouterMap = () => (
  <HashRouter>
    <App>
      <Switch>{renderRoutes(routes)}</Switch>
    </App>
  </HashRouter>
);

export default RouterMap;
