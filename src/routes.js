import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'
import Dashboard from './screens/Dashboard'
import Faq from './screens/Faq'
import Sessions from './screens/Sessions'
import SignInScreen from './screens/SignInScreen';
import PrivateRoute from './components/PrivateRoute';
export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/sessions" component={Sessions} />
        <Route path="/faq" component={Faq} />
        <Route path="/sign-in" component={SignInScreen} />
      </Switch>
    </BrowserRouter>
  )
}
