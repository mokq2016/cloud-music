import * as React from "react";
import Swiper from "swiper";
import "./index.scss";
export default class Find extends React.Component {
  public componentDidMount() {
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
  public render() {
    const { children } = this.props;
    const data = require("./data.json");
    const songData = require("./song-sheet.json");
    const newDish = require("./newDish.json");
    const menus = [
      {
        img: "banner_recommend.png",
        name: "每日推荐"
      },
      {
        img: "banner_song-sheet.png",
        name: "歌单"
      },
      {
        img: "banner_ranks.png",
        name: "排行榜"
      },
      {
        img: "banner_radio.png",
        name: "电台"
      },
      {
        img: "banner_video.png",
        name: "直播"
      }
    ];
    return (
      <div className="page-container">
        <div className="swiper-container">
          <section className="swiper-wrapper">
            {data.banners.map((item: any, index: number) => (
              <div className="swiper-slide" key={index}>
                <img className="swiper-slide_img" src={item.pic} alt="" />
              </div>
            ))}
          </section>

          <div className="swiper-pagination banner-pagination" />
        </div>
        <section className="middle-menu">
          {menus.map((item, index) => (
            <div key={index} className="menu-item">
              <img
                className="menu-item_img"
                src={"../../images/" + item.img}
                alt=""
              />
              <span className="menu-item_span">{item.name}</span>
            </div>
          ))}
        </section>
        <section className="recommend-songSheet">
          <header className="song-sheet_header">
            <h3 className="song-sheet_title">推荐歌单</h3>
            <div className="song-sheet_desc">歌单广场</div>
          </header>
          <div className="song-sheet_list">
            {songData.result.map((item: any, index: number) => (
              <div key={item.id} className="song-sheet_item">
                <img src={item.picUrl} alt="" className="song-sheet_item-img" />
                <div className="song-sheet_item-name">{item.name}</div>
              </div>
            ))}
          </div>
          <div className="new-songs">
            <header className="new-songs_header">
              <div>
                <span className="new-songs_tabs actived">新碟</span>
                <span className="new-songs_tabs">新歌</span>
              </div>
              <div className="song-sheet_desc">更多新碟</div>
            </header>
            <div className="new-dish_list">
              {newDish.albums.map((item: any, index: number) => (
                <div key={index} className="new-dish_item">
                  <img
                    src={item.blurPicUrl}
                    alt=""
                    className="song-sheet_item-img"
                  />
                  <div className="song-sheet_item-name">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {children}
      </div>
    );
  }
}
