import React from 'react'
import { BrowserRouter as Switch, Route, withRouter } from "react-router-dom"
import Login from './Login'
import SignUp from './SignUp'
import TaskDetail from './TaskDetail'
import TaskHistory from './TaskHistory'
import Header from './Header'
import Taskinput from './Taskinput/taskinput'


function App() {


  return (
    <>
      <withRouter>
        <Switch>
          <Header />
          <Route exact path='/' component={Taskinput} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/taskDetail'
            component={TaskDetail} />
          <Route exact path='/taskHistory' component={TaskHistory} />

        </Switch>
      </withRouter>
    </>
  )
}

export default App;
