import React from 'react'
import { BrowserRouter as Switch, Route, withRouter } from "react-router-dom"
import Login from './Login'
import SignUp from './SignUp'
import TaskDetail from './TaskDetail'
import TaskHistory from './TaskHistory'
import Header from './Header'
import Taskinput from './Taskinput/taskinput'
// import  {useEffect, useState} from 'react'
import firebase from './config/firebase'
import 'firebase/firestore'

function App() {

  // firestoreからdate取得するコードです
 

  const getTasks = () => { 
    firebase.firestore().collection('tasks')
    .onSnapshot((snapshot) => {
      const tasks = snapshot.docs.map(doc => {

        return doc.data()
      })
      console.log(tasks)
    });
  }
  // const [getTasks, setGetTasks] = useState()

  // useEffect(() => {
  //   firebase.firestore().collection('tasks')
  //   .onSnapshot((snapshot) => {
  //       const getTasks = snapshot.docs.map(doc => {

  //           return doc.data()
  //       })
  //       console.log(getTasks)
  //       setGetTasks(getTasks)
  //   });
  // }, [])  
    
  




  return (
    <>
      {/* <button　onClick= {getTasks}>取得</button> データが取得されているかの確認するボタンです。（テスト用） */}
      <Header />
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
