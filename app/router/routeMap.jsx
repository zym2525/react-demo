import React from 'react'
import { Router, Route, IndexRoute} from 'react-router'

import App from '../containers'
import A from '../containers/A'
import NotFound from '../containers/404'


class RouteMap extends React.Component {
  render(){
    return (
      <Router history = {this.props.history}>
        <Route path="/" component = {App}>
          <IndexRoute component = {A}/>
          <Route path="/*" component={NotFound}/>
        </Route>
      </Router>
    )
  }
}
export default RouteMap
