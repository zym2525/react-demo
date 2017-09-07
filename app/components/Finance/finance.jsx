import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


import {textFieldStyle} from '../../config/style.js'
import './finance.less'
import '../../static/css/commonList.less'
class Finance extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="finance">
                <ul className="finance-title">
                    <li className="finance-big-cell">编号</li>
                    <li className="finance-big-cell">项目名</li>
                    <li className="finance-sm-cell time">发布时间</li>
                    <li className="finance-sm-cell">状态</li>
                </ul>
                <div className="finance-content">
                    <div className="item-box">
                        <ul className="item-title has-bottom">
                            <li className="finance-big-cell">1</li>
                            <li className="finance-big-cell">大学生村官培训</li>
                            <li className="finance-sm-cell time">2017-9-1</li>
                            <li className="finance-sm-cell">待审核</li>
                        </ul>
                        <ul className="item-content has-bottom">
                            <li className="finance-big-cell">
                                <span>经费总额:</span>
                                <MuiThemeProvider>
                                    <TextField
                                        hintText="待设置*"
                                        floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                                        inputStyle={textFieldStyle.inputStyle}
                                        floatingLabelShrinkStyle={textFieldStyle.floatingLabelShrinkStyle}
                                        style={textFieldStyle.style}
                                        underlineShow={false}
                                    />
                                </MuiThemeProvider>
                            </li>
                            <li className="finance-big-cell">
                                <span>剩余经费:</span>
                                <MuiThemeProvider>
                                    <TextField
                                        hintText="待设置*"
                                        floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                                        inputStyle={textFieldStyle.inputStyle}
                                        floatingLabelShrinkStyle={textFieldStyle.floatingLabelShrinkStyle}
                                        style={textFieldStyle.style}
                                        underlineShow={false}
                                    />
                                </MuiThemeProvider>
                            </li>
                            <li className="finance-sm-cell">
                                <MuiThemeProvider>
                                    <FlatButton
                                        label="编辑"
                                        style={{
                                            width:'auto',
                                             'border':'1px solid #333',
                                            'marginTop':'6px',
                                            'lineHeight':'34px'
                                        }}
                                    />
                                </MuiThemeProvider>
                            </li>
                            <li className="finance-sm-cell">
                                <MuiThemeProvider>
                                    <FlatButton
                                        label="保存"
                                        style={{
                                            width:'auto',
                                             'border':'1px solid #333',
                                            'marginTop':'6px',
                                            'lineHeight':'34px'
                                        }}
                                    />
                                </MuiThemeProvider>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}
export default Finance;