
import * as React from 'react'
import * as Loadable from 'react-loadable'
import { HashRouter , Route } from 'react-router-dom'
import App from "../App";
// import Home from '../components/Home/Home'
const routes: any[] = [
  {
    component: () => import('../pages/Main/Main'),
    path: '/main',
    exact:true,
    children:[
     /*  {
        component: () => import('../components/Home/Home'),
        path: '/main/home',
      },
      {
        component: () => import('../components/Find/Find'),
        path: '/main/find',
      }, */
    ]
  }
]
const renderRoutes = (routers:any) => routers.map((item:any, index:number) => (
  <Route path={item.path} component={Loadable({
    loader: item.component,
    loading: ()=>null
  })} exact={item.exact || false} key={item.path}>
    {item.children && item.children.length > 0 && renderRoutes(item.children)}
    {/* <Route
    path='/main/home' component={Home}
    /> */}
  </Route>
))
const RouterMap = () => (
  <HashRouter>
   <App>
        {
          renderRoutes(routes)
        }
    </App>
  </HashRouter>
)

export default RouterMap
