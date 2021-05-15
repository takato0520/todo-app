import styled from 'styled-components'
import { useState, useEffect } from 'react'
import CompletedTask from './CompletedTask'


const TaskHistory = ({ getTasks }) => {

    const [completedTasks, setCompletedTask] = useState([])
    useEffect(() => {
        if (getTasks) setCompletedTask(getTasks.filter(task => task.isCompleted === true))
    }
        , [getTasks])

    console.log(completedTasks)
    console.log(getTasks)

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
