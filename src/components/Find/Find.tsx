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
    const menus = [
      {
        img: "banner_recommend.png",
        name: "每日推荐"
      },
      {
        img: "banner_recommend.png",
        name: "每日推荐"
      },
      {
        img: "banner_recommend.png",
        name: "每日推荐"
      },
      {
        img: "banner_recommend.png",
        name: "每日推荐"
      },
      {
        img: "banner_recommend.png",
        name: "每日推荐"
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
        {children}
      </div>
    );
  }
}
