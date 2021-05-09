import firebase from './config/firebase'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import CompletedTask from './CompletedTask'

const TaskHistory = () => {

    const [completedTasks, setCompletedTask] = useState([])

    useEffect(() => {
        firebase.firestore().collection('tasks')
            .onSnapshot((snapshot) => {
                const completedTasks = snapshot.docs.map(doc => {
                    return doc.data()
                })
                setCompletedTask(completedTasks.filter(task => task.isCompleted === true))
            })
    }, [])

    console.log(completedTasks)

    return (
        <>
            <h1>履歴</h1>
            <ul>
                {
                    completedTasks.map((completedTask => {
                        return (
                            <CompletedTask completedTask={completedTask} />
                        )
                    }))
                }
            </ul>
        </>
    )
}

export default TaskHistory
