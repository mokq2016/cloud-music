import React, { SFC } from "react";
import "./index.scss";
interface IProp {
  children: JSX.Element[];
}

const Header: SFC<IProp> = props => {
  const { children } = props;
  return <div className="header_container">{children}</div>;
};

export default Header;
