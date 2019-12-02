import * as React from "react";
import Header from "../../components/Header/Header";
import "./index.scss";
import { login } from "../../commom/api";
export default class Login extends React.Component {
  
  public render() {
    return (
      <div className='login-page'>
        <Header>
          <i className="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-" />
          <div className="header_title">手机号登录</div>
          <i className="iconfont iconyinletiaodongzhuangtai_huaban" />
        </Header>
        <main className='page-content'>
          <header className='tips'>
            请使用过注册过的手机号登录
          </header>
          <div className='login-form_item'>
            <label className='login-form_item-title'>手机号：+86<i/></label>
            
            <input type="text" placeholder='输入手机号'/>
          </div>
          <div className='login-form_item'>
            <label className='login-form_item-title'>密码：<i/></label>
            <input type="password" placeholder='输入密码'/>
          </div>
        </main>
        <footer>
          <div className='footer-btn' onClick={()=>{this.loginClick() }}>登录</div>
        </footer>
      </div>
    );
  }
  private loginClick(){
    login('18680329039','vip920820').then(res=>{
      console.log(res)
    })
  }
}
