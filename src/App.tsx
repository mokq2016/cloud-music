import * as React from "react";
/* import { ReactHTML } from 'react' */
import { withRouter, RouteComponentProps } from "react-router-dom";
import "./App.css";

class App extends React.Component<RouteComponentProps> {
  public render() {
    const { children } = this.props;
    return <div className="App">{children}</div>;
  }
}

export default withRouter(App);
