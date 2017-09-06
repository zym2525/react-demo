import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import News from '../../containers/News'

class Manage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        return (
            <News show="1"/>
        )
    }

}
export default Manage;