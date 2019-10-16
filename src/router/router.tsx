import * as React from "react";
import * as Loadable from "react-loadable";
import { HashRouter, Route } from "react-router-dom";
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
        component: () => import("../components/Find/Find"),
        path: "/main/find"
      }
    ]
  }
];
const renderRoutes = (routers: any) =>
  routers.map((item: any, index: number) => (
    <div key={item.path}>
      {item.routes ? (
        <item.component>{renderRoutes(item.routes)}</item.component>
      ) : (
        <Route
          path={item.path}
          component={item.component}
          exact={item.exact}
          key={item.path}
        >
          {item.routes && renderRoutes(item.routes)}
        </Route>
      )}
    </div>
  ));
// function RouteWithSubRoutes(route: any) {
//   return (
//     <Route
//       path={route.path}
//       render={props => (
//         // pass the sub-routes down to keep nesting
//         <route.component {...props} routes={route.routes} />
//       )}
//     />
//   );
// }
const RouterMap = () => (
  <HashRouter>
    <App>
      {/* <Switch>
        {routes.map(router => {
          RouteWithSubRoutes(router);
        })}
      </Switch> */}
      {renderRoutes(routes)}
    </App>
  </HashRouter>
);

export default RouterMap;
