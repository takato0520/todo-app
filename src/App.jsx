import React, { useState, useEffect } from 'react'
import { BrowserRouter as Switch, Route } from "react-router-dom"
import Login from './Authentication/Login'
import SignUp from './Authentication/SignUp'
import TaskDetail from './TaskDetail'
import TaskHistory from './History/TaskHistory'
import Header from './Header'
import Room from './Room/Room'
import firebase from './config/firebase'
import 'firebase/firestore'
import { Reset } from 'styled-reset'

function App() {

  const [getTasks, setGetTasks] = useState()

  //読み込み時にfirestoreからtasksを呼び出す処理
  useEffect(() => {
    firebase.firestore().collection('tasks')
      .onSnapshot((snapshot) => {
        const getTasks = snapshot.docs.map(doc => {
          return doc.data()
        })
        console.log(getTasks)
        setGetTasks(getTasks)
      });
  }, [])

  return (
    <>
      <Reset />

      <Switch>
        <Header />
        <Route exact path='/' >
          <Room getTasks={getTasks} />
        </Route>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/taskDetail/:id'>
          < TaskDetail getTasks={getTasks} />
        </Route>
        <Route exact path='/taskHistory' >
          <TaskHistory getTasks={getTasks} />
        </Route>
      </Switch>

    </>
  )
}

export default App;
