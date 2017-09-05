import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';

import './login.less'
class Login extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            checked: false,
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
                        style={{
                            width:'100%'
                        }}
                        type="password"
                    />
                </MuiThemeProvider>
                <div className="login-btn clearfix">
                    <MuiThemeProvider>
                        <Checkbox
                            className="fl"
                            style={{
                                width:'auto',
                                'margin-top':'6px'
                            }}
                            checked={this.state.checked}
                            onCheck={this.updateCheck.bind(this)}
                        />
                    </MuiThemeProvider>
                    <MuiThemeProvider>
                        <FlatButton
                            label="登录"
                            className="fl"
                            style={{
                                width:'auto',
                                'border':'1px solid #333'
                            }}
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
}
export default Login
