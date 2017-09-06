import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './audit.less';
class Audit extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        return (
            <div>
                项目审核
            </div>
        )
    }

}
export default Audit;