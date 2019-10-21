import React, { SFC } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

// interface Prop = {}
interface IProps {
  pathname: string;
}
const Footer: SFC<IProps> = props => {
  const { pathname } = props;
  return (
    <div className="main-footer_tabs">
      <div
        className={
          ["/main/find"].includes(pathname)
            ? "main-footer_tabs-item actived"
            : "main-footer_tabs-item"
        }
      >
        <Link to="/main/find">
          <i className="iconfont iconfaxianweixuanzhong" />
          <span className="tabs-item_span">发现</span>
        </Link>
      </div>
      <div
        className={
          ["/main/video"].includes(pathname)
            ? "main-footer_tabs-item actived"
            : "main-footer_tabs-item"
        }
      >
        <Link to="/main/video">
          <i className="iconfont iconshipin" />
          <span className="tabs-item_span">视频</span>
        </Link>
      </div>
      <div
        className={
          ["/main/mymusic"].includes(pathname)
            ? "main-footer_tabs-item actived"
            : "main-footer_tabs-item"
        }
      >
        <Link to="/main/mymusic">
          <i className="iconfont iconyinyue" />
          <span className="tabs-item_span">我的</span>
        </Link>
      </div>
      <div
        className={
          ["/main/group"].includes(pathname)
            ? "main-footer_tabs-item actived"
            : "main-footer_tabs-item"
        }
      >
        <Link to="/main/group">
          <i className="iconfont iconqunzuduoren" />
          <span className="tabs-item_span">云村</span>
        </Link>
      </div>
      <div
        className={
          ["/main/account"].includes(pathname)
            ? "main-footer_tabs-item actived"
            : "main-footer_tabs-item"
        }
      >
        <Link to="/main/account">
          <i className="iconfont iconzhanghao" />
          <span className="tabs-item_span">账号</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
