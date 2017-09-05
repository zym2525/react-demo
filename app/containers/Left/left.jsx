import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Login from '../../components/Login/login.jsx'

import './left.less'
class Left extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return (
            <div className="left fl">
                <h2 className="title">个人中心</h2>
                <Login/>
            </div>
        )
    }
}
export default Left
