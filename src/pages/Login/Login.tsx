import * as React from "react";
import Header from "../../components/Header/Header";
import "./index.scss";
import { login } from "../../commom/api";
// import { FormEvent } from 'react';
interface IState {
  mobile: string,
  password: string
}
export default class Login extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      mobile: '',
      password: ''
    }
  }

  public render() {
    return (
      <div className='login-page'>
        <Header>
          <i className="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-" />
          <div className="header_title">手机号登录</div>
        </Header>
        <main className='page-content'>
          <header className='tips'>
            请使用过注册过的手机号登录
          </header>
          <div className='login-form_item'>
            <label className='login-form_item-title'>手机号：+86<i /></label>

            <input type="text" value={this.state.mobile} onChange={this.handleMobileInput} placeholder='输入手机号' />
          </div>
          <div className='login-form_item'>
            <label className='login-form_item-title'>密码：<i /></label>
            <input type="password" value={this.state.password} onChange={this.handlePasswordInput} placeholder='输入密码' />
          </div>
        </main>
        <footer>
          <div className='footer-btn' onClick={() => { this.loginClick() }}>登录</div>
        </footer>
      </div>
    );
  }
  private handleMobileInput = (e: any) => {
    this.setState({
      mobile: e.target.value
    })
  }
  private handlePasswordInput = (e: any) => {
    this.setState({
      password: e.target.value
    })
  }
  private valite(): boolean {
    if (!this.state.mobile) {
      return false
    }
    return true
  }
  private loginClick() {
    if (!this.valite()) {
      return
    }
    login(this.state.mobile, this.state.password).then(res => {
      console.log(res)
    })
  }
}
