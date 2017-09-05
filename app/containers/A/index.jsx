import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.less'

class A extends React.Component {
    constructor(props, context){
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render(){
        return(
            <div>
                我不是首页
            </div>
        )
    }
}
export default A
