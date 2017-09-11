import React from 'react'
import { Router, Route, IndexRoute} from 'react-router'

import App from '../containers'
import Theme from '../containers/Theme/theme.jsx'
import Announce from '../components/Announce/announce.jsx'
import Manage from '../components/Management/management.jsx'
import Audit from '../components/Audit/audit.jsx'
import History from '../components/History/history.jsx'
import Finance from '../components/Finance/finance.jsx'
import FileUpload from '../components/FileUpload/fileUpload.jsx'
import ThemeInfo from '../components/ThemeInfo/ThemeInfo.jsx'
import UseForm from '../components/Form/form.jsx'
import NotFound from '../containers/404'


class RouteMap extends React.Component {
  render(){
    return (
      <Router history = {this.props.history}>
        <Route path="/" component = {App}>
            <IndexRoute  component = {Theme}/>
            <Route path="/manage" component={Manage}/>
            <Route path="/audit" component={Audit}/>
            <Route path="/history" component={History}/>
            <Route path="/finance" component={Finance}/>
            <Route path="/fileUpload" component={FileUpload}/>
            <Route path="/form" component={UseForm}/>
            <Route path="/annonce/:id" component={Announce}/>
            <Route path="/themeInfo/:id" component={ThemeInfo}/>
            <Route path="/*" component={NotFound}/>
        </Route>
      </Router>
    )
  }
}
export default RouteMap
