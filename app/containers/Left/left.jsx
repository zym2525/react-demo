import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Login from '../../components/Login/login.jsx';
import MenuList from '../../components/List/list.jsx';
import {getCookie,removeCookies} from  '../../util/cookie';
import { postData } from '../../fetch/postData';
import {api} from '../../util/common';


import './left.less';

class Left extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            isLogin:false,
            username:''
        };
    }
    render() {
        return (
            <div className="left">
                {
                    this.state.isLogin
                    ? <div className="user clearfix">
                        <span className="fl">{this.state.username}</span>
                        <b className="fl" onClick={this.logout.bind(this)}>注销</b>
                    </div>
                    :  <h2 className="title">left</h2>
                }
                {
                    this.state.isLogin
                    ? <MenuList handleLogin={this.handleLogin.bind(this)}/>
                    : <Login handleLogin={this.handleLogin.bind(this)}/>
                }
            </div>
        )
    }
    handleLogin(isLogin,username){
        if(isLogin){
            this.setState({
                isLogin:true,
                username:username
            });
        }else{
            this.setState({
                isLogin:false,
                username:''
            });
        }
    }
    logout(){
        this.setState({
            isLogin:false,
            username:''
        });
        removeCookies(['username','accountType']);
    }
    componentWillMount(){
        let username= getCookie('username');
        if(username==null||username==''){
        }else{
            this.setState({
                isLogin:true,
                username:username
            });
        }
    }
}
export default Left;
