import * as React from "react";
import Header from "../Header/Header";
import "./index.scss";
const menus = [
  {
    name: "私人FM",
    icon: "icondiantai"
  },
  {
    name: "私人FM",
    icon: "icondiantai"
  },
  {
    name: "私人FM",
    icon: "icondiantai"
  },
  {
    name: "私人FM",
    icon: "icondiantai"
  },
  {
    name: "私人FM",
    icon: "icondiantai"
  },
  {
    name: "私人FM",
    icon: "icondiantai"
  },
  {
    name: "私人FM",
    icon: "icondiantai"
  },
  {
    name: "私人FM",
    icon: "icondiantai"
  }
];
export default class MyMusic extends React.Component {
  public render() {
    const { children } = this.props;
    return (
      <div>
        <Header>
          <i className="iconfont iconyun" />
          <div className="header_title">我的音乐</div>
          <i className="iconfont iconyinletiaodongzhuangtai_huaban" />
        </Header>
        <div className="header-menus">
          {menus.map((item, index) => (
            <div className="header-menus_item">
              <div className="header-menus_icon">
                <i className={"iconfont " + item.icon} />
              </div>

              <span className="header-menus_text">{item.name}</span>
            </div>
          ))}
        </div>
        {children}
      </div>
    );
  }
}
