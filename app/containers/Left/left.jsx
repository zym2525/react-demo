import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Login from '../../components/Login/login.jsx';
import MenuList from '../../components/List/list.jsx';
import localStore from '../../util/localStore';
import { postData } from '../../fetch/postData';
import {api} from '../../util/common';

import './left.less';
class Left extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            isLogin:false,
            themes:[]
        };
    }
    render() {
        return (
            <div className="left">
                {
                    this.state.isLogin
                    ? <div className="user clearfix">
                        <span className="fl">超级管理员</span>
                        <b className="fl">注销</b>
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
    handleLogin(isLogin){
        if(isLogin){
            this.setState({
                isLogin:true
            });
        }else{
            this.setState({
                isLogin:false
            });
        }
    }
    componentWillMount(){
        let username= localStore.getItem('username');
        if(username==null){
            let data={
                type:0,
                currentPage:1,
                pageSize:9
            };
            postData(api+'/dhy/theme/list',data,(result)=>{
                let themes=result.themes;
                this.setState({
                    themes:themes
                });
                console.log(result)
            });
        }else{
            this.setState({
                isLogin:true
            });
        }
    }

}
export default Left;
