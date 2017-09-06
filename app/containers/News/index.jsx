import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Page from '../../components/Page/page.jsx'

import '../../static/css/commonList.less'

class News extends React.Component {
    constructor(props, context){
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render(){
        return(
            <div>
                <dl className="news">
                    <dt>
                        <div className="new-left">公告编号</div>
                        <div className="new-mid">公告名</div>
                        <div className="new-right">发布时间</div>
                        {
                            this.props.show&&<div className="operation">可执行操作</div>
                        }
                    </dt>
                    <dd>
                        <div className="new-left">1</div>
                        <div className="new-mid">545645</div>
                        <div className="new-right">2017-06-28</div>
                        {
                            this.props.show&&<div className="operation clearfix">
                                <div className="fl modification">修改</div>
                                <div className="fl del">删除</div>
                            </div>
                        }
                    </dd>
                </dl>
                <Page/>
            </div>
        )
    }
}
export default News
