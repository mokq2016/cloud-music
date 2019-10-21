import * as React from "react";

export default class Group extends React.Component {
  public render() {
    const { children } = this.props;
    return (
      <div>
        云村
        {children}
      </div>
    );
  }
}
