import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


class Finance extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        return (
            <div>财务管理</div>
        )
    }

}
export default Finance;