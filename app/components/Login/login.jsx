import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import { hashHistory } from 'react-router'


import './login.less'
class Login extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            checked: false,
            isLogin:false
        }

    }

    render() {
        return (
            <div className="login">
                <MuiThemeProvider>
                    <TextField
                        className="user"
                        hintText="Email"
                        floatingLabelText="用户名"
                        floatingLabelStyle={{
                            color:'#333',
                        }}
                        inputStyle={{
                            color:'#333',
                        }}
                        floatingLabelShrinkStyle={{
                            fontSize:'16px'
                        }}
                        underlineFocusStyle={{
                            borderColor:'#333'
                        }}
                        style={{
                            width:'100%'
                        }}
                    />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <TextField
                        className="user"
                        hintText="Password"
                        floatingLabelText="密码"
                        floatingLabelStyle={{
                            color:'#333',
                        }}
                        inputStyle={{
                            color:'#333',
                        }}
                        underlineFocusStyle={{
                            borderColor:'#333'
                        }}
                        style={{
                            width:'100%'
                        }}
                        type="password"
                    />
                </MuiThemeProvider>
                <div className="login-btn">
                    <MuiThemeProvider>
                        <Checkbox
                            label="记住我"
                            style={{
                                width:'100px',
                                'marginTop':'6px'
                            }}
                            labelStyle={{
                                'fontSize':'12px'
                            }}
                            iconStyle={{
                                fill:'#333'
                            }}
                            checked={this.state.checked}
                            onCheck={this.updateCheck.bind(this)}
                        />
                    </MuiThemeProvider>
                    <MuiThemeProvider>
                        <FlatButton
                            label="登录"
                            style={{
                                width:'auto',
                                'border':'1px solid #333',
                                'marginTop':'6px',
                                'lineHeight':'34px'
                            }}
                            onClick={this.loginFn.bind(this)}
                        />
                    </MuiThemeProvider>
                </div>
            </div>
        )
    }
    updateCheck() {
        this.setState((oldState) => {
            return {
                checked: !oldState.checked,
            };
        });
    }
    loginFn(){
        if(true){
            this.setState((oldState)=>{
                hashHistory.push('/annonce');
                return {
                    isLogin:true
                };
            })
        }
    };
    componentDidUpdate(){
        this.props.handleLogin(this.state.isLogin)
    }
}
export default Login
