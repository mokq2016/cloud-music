import * as React from "react";
import Header from "../Header/Header";
import "./index.scss";
const menus = [
  {
    name: "亲子频道",
    icon: "iconqinzi"
  },
  {
    name: "古典专区",
    icon: "iconguigetubiao-"
  },
  {
    name: "跑步FM",
    icon: "iconpaobu"
  },
  {
    name: "小冰电台",
    icon: "iconshouyinji01"
  },
  {
    name: "爵士电台",
    icon: "iconziyuan"
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
const types = [
  {
    icon: "iconyinyue",
    name: "本地音乐",
    count: 6
  },
  {
    icon: "iconyanchu",
    name: "最近播放",
    count: 120
  },
  {
    icon: "iconshouyinji01",
    name: "我的电台",
    count: 6
  },
  {
    icon: "iconwodeshoucang",
    name: "我的收藏",
    count: "专辑/歌手/视频/专栏/Mlog"
  }
];
const createSheets = [
  {
    title: "我创建的歌单",
    hasAdd: true
  },
  {
    title: "我收藏的歌单"
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
        <div className="types-container">
          {types.map(item => (
            <TypeItem {...item} />
          ))}
        </div>
        <div className="bg-dom" />
        <div className="song-sheets">
          {createSheets.map(item => (
            <SongSheet {...item} />
          ))}
        </div>
        {children}
      </div>
    );
  }
}
function SongSheet(props: any) {
  return (
    <div className="song-item">
      <div className="sheet-name">
        <i className="iconfont iconicon_left_arrow" />
        <span className='sheet-title'>{props.title}</span>
      </div>
      {getIcon(props.hasAdd)}
    </div>
  );
}
function getIcon(hasAdd: boolean) {
  if (hasAdd) {
    return (
      <div className="">
        <i
          className="iconfont iconicon-xinzeng"
          style={{ marginRight: "10px" }}
        />
        <i className="iconfont iconliebiao-dian" />
      </div>
    );
  } else {
    return (
      <div className="">
        <i className="iconfont iconliebiao-dian" />
      </div>
    );
  }
}
function TypeItem(props: any) {
  return (
    <div className="cell-link type-item">
      <i className={"iconfont " + props.icon} />
      <label>{props.name}</label>
      <span className="item-desc">{props.count}</span>
    </div>
  );
}
