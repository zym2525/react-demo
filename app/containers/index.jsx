import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import A from '../containers/A'
import Left from '../containers/Left/left.jsx'

import './index.less'

class App extends React.Component {
  constructor(props, context){
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      initDone: false
    }
  }
  render(){
    return(
      <div className="wapper">
        <nav className="Logo"></nav>
        <div className="content clearfix">
          <Left/>
        </div>
        {
          this.state.initDone
          ? this.props.children
          :<div> Loading </div>
        }
      </div>
    )
  }
  componentDidMount(){
    this.setState({initDone:true})
  }
}

export default App
