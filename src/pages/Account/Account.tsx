import * as React from "react";

export default class Account extends React.Component {
  public render() {
    const { children } = this.props;
    return (
      <div>
        账号
        {children}
      </div>
    );
  }
}
