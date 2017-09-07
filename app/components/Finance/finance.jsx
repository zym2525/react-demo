import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import '../../static/css/commonList.less'
class Finance extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <dl className="news">
                    <dt>
                        <div className="new-left">公告编号</div>
                        <div className="new-mid">项目名</div>
                        <div className="new-right">发布时间</div>
                        <div className="operation">申请人</div>
                        <div className="operation">状态</div>
                    </dt>
                    <dd>
                        <div className="new-left">1</div>
                        <div className="new-mid">545645</div>
                        <div className="new-right">2017-06-28</div>
                        <div className="applicant">呜呜呜呜</div>
                        <div className="status">待审核</div>
                    </dd>
                </dl>
                <Page/>
            </div>
        )
    }

}
export default Finance;