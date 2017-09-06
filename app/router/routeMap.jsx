import React from 'react'
import { Router, Route, IndexRoute} from 'react-router'

import App from '../containers'
import News from '../containers/News'
import Announce from '../components/Announce/announce.jsx'
import Manage from '../components/Management/management.jsx'
import Audit from '../components/Audit/audit.jsx'
import History from '../components/History/history.jsx'
import Finance from '../components/Finance/finance.jsx'
import FileUpload from '../components/FileUpload/fileUpload.jsx'
import NotFound from '../containers/404'


class RouteMap extends React.Component {
  render(){
    return (
      <Router history = {this.props.history}>
        <Route path="/" component = {App}>
            <IndexRoute  component = {News}/>
            <Route path="/annonce" component={Announce}/>
            <Route path="/manage" component={Manage}/>
            <Route path="/audit" component={Audit}/>
            <Route path="/history" component={History}/>
            <Route path="/finance" component={Finance}/>
            <Route path="/fileUpload" component={FileUpload}/>
            <Route path="/*" component={NotFound}/>
        </Route>
      </Router>
    )
  }
}
export default RouteMap
