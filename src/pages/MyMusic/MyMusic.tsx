import * as React from "react";

export default class MyMusic extends React.Component {
  public render() {
    const { children } = this.props;
    return (
      <div>
        我的音乐
        {children}
      </div>
    );
  }
}
