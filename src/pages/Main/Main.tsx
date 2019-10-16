import * as React from "react";
interface IProps {
  children: React.ReactHTML;
}
export default class Main extends React.Component<IProps> {
  public render() {
    const { children } = this.props;
    console.log(this.props);
    return (
      <div className="main">
        main
        {children}
      </div>
    );
  }
}
