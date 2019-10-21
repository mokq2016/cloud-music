import * as React from "react";

export default class Video extends React.Component {
  public render() {
    const { children } = this.props;
    return (
      <div>
        视频
        {children}
      </div>
    );
  }
}
