import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './themeInfo.less'
class ThemeInfo extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return (
            <div className="themeInfo">
                <div className="themeInfo-title common-title">1111</div>
                <div className="themeInfo-content-wrapper">
                    <div className="themeInfo-content">我的世界发</div>
                    <div className="themeInfo-link">
                        <span>附件下载:</span>
                        <span className="theme-name">我的世界发我的世界发我的世界发我的世界发我的世界发我的世界发我的世界发我的世界发</span>
                        <a download="123">点击下载</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default ThemeInfo
