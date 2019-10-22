import * as React from "react";
import Footer from "../../components/Footer/Footer";
interface IProps {
  children: React.ReactHTML;
  location: any;
}
export default class Main extends React.Component<IProps> {
  public render() {
    const { children, location } = this.props;
    return (
      <div className="main">
        {children}
        <Footer {...location} />
      </div>
    );
  }
}
