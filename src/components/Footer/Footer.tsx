import React, { SFC } from "react";

import "./index.scss";

// interface Prop = {}

const Footer: SFC = () => {
  return (
    <div className="footer_tabs">
      <div className="footer_tabs-item">
        <span>发现</span>
      </div>
      <div className="footer_tabs-item">
        <span>视频</span>
      </div>
      <div className="footer_tabs-item">
        <span>我的</span>
      </div>
      <div className="footer_tabs-item">
        <span>云村</span>
      </div>
      <div className="footer_tabs-item">
        <span>账号</span>
      </div>
    </div>
  );
};

export default Footer;
