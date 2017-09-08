import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Page from '../../components/Page/page.jsx'
import {getLocalTime} from '../../util/common'

import '../../static/css/commonList.less'

class News extends React.Component {
    constructor(props, context){
        super(props, context);
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
                    {
                        this.props.list.map((item,index)=>
                            <dd key={index}>
                                <div className="new-left">{item.id}</div>
                                <div className="new-mid" onClick={this.handleItemClick.bind(this,item.themeCode)}>{item.fileName}</div>
                                <div className="new-right">{getLocalTime(item.createTime)}</div>
                                {
                                    this.props.show&&<div className="operation clearfix">
                                        <div className="fl modification">修改</div>
                                        <div className="fl del">删除</div>
                                    </div>
                                }
                            </dd>
                        )
                    }

                </dl>
                {
                    this.props.list.length>0
                    ?<Page/>
                    :<div>没有你要的数据</div>
                }
            </div>
        )
    }
    handleItemClick(themeCode){
        this.props.handleItemClick(themeCode);
    }
}
export default News
