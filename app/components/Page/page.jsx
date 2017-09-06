import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './page.less';
class Page extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        return (
            <div className="news-page">
                <div className="new-total-page">共有1页</div>
                <div className="new-current-page">当前第1页</div>
            </div>
        )
    }

}
export default Page;