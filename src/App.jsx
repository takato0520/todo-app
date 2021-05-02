import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Room from './Room'
import Login from './Login'
import SignUp from './SignUp'
import TaskDetail from './TaskDetail'
import TaskHistory from './TaskHistory'
import Header from './Header'
import Taskinput from './Taskinput/taskinput'

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Room} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/taskDetail' component={TaskDetail} />
          <Route exact path='/taskHistory' component={TaskHistory} />
        </Switch>
      </Router>
      <Taskinput />
    </>
  )
}

export default App;
