import * as React from "react";
import * as Loadable from "react-loadable";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "../App";
// import Main2 from "../pages/Main/Main";
const Main = Loadable({
  loader: () => import("../pages/Main/Main"),
  loading: () => null
});
const Find = Loadable({
  loader: () => import("../components/Find/Find"),
  loading: () => null
});
const Video = Loadable({
  loader: () => import("../components/Video/Video"),
  loading: () => null
});
const MyMusic = Loadable({
  loader: () => import("../components/MyMusic/MyMusic"),
  loading: () => null
});
const Group = Loadable({
  loader: () => import("../components/Group/Group"),
  loading: () => null
});
const Account = Loadable({
  loader: () => import("../components/Account/Account"),
  loading: () => null
});
const Login = Loadable({
  loader: () => import("../pages/Login/Login"),
  loading: () => null
});
const routes: any[] = [
  {
    component: Main,
    path: "/main",
    exact: false,
    routes: [
      {
        component: Find,
        path: "/main/find",
        exact: true
      },
      {
        exact: true,
        component: Video,
        path: "/main/video"
      },
      {
        exact: true,
        component: MyMusic,
        path: "/main/mymusic"
      },
      {
        exact: true,
        component: Group,
        path: "/main/group"
      },
      {
        exact: true,
        component: Account,
        path: "/main/account"
      }
    ]
  },
  {
    component:Login,
    path:"/login",
    exact:false
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
