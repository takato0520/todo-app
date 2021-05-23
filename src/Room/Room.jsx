import classes from './taskinput.module.css'
import React, { useEffect, useState } from 'react';
import Button from './button'
import styled from 'styled-components';
import firebase from '../config/firebase'
import 'firebase/firestore'
import { nanoid } from 'nanoid';
import { useHistory } from 'react-router-dom'

const getKey = () => Math.random().toString(32).substring(2);

const Room = ({ getTasks }) => {
    const history = useHistory()
    const [tasks, setTasks] = useState()
    const [taskName, setTaskName] = useState('')
    const [requiredTime, setRequiredTime] = useState('1h')
    const [deadline, setDeadline] = useState('')

    useEffect(() => {
        if (getTasks) {
            setTasks(getTasks.filter(task => task.isCompleted === false))
        }
    }
        , [getTasks])

    useEffect(() => {
        sortTasks(tasks)
    }, [tasks])

    //ボタンの処理
    //詳細ボタンを押した時に詳細画面に遷移する処理
    const moveToTaskDetail = (id) => {
        history.push(`/taskDetail/${id}`);
    }

    //taskにかかる時間を選択するのに必要な定数
    const requiredTime_Options = [
        { value: "1", label: "1h", id: "1", },
        { value: "2", label: "2h", id: "2", },
        { value: "3", label: "3h", id: "3", },
        { value: "4", label: "4h", id: "4", },
        { value: "5", label: "5h", id: "5", },
        { value: "6", label: "6h", id: "6", }
    ]

    const sortTasks = (tmpTasks) => {
        //今の時間を取得し、msecに変換する
        const today = new Date()
        const now_msec = today.getTime()

        tmpTasks?.forEach(tmpTask => (
            //taskの優先順位を決める指標　締切までの時間-taskにかかる時間=締切日-今の時間-taskにかかる時間
            tmpTask.difference = Date.parse(new Date(tmpTask.deadline)) - now_msec - tmpTask.requiredTime.slice(0, 1) * 3600000
        ))

        console.log(tmpTasks)

        tmpTasks?.sort((a, b) =>
            a.difference - b.difference
        )
        setTasks(tmpTasks)
    }


    /*    console.log(today) */
    let classAdd = true

    //plusbuttonを押した時、DBにtaskを追加する処理
    const addNewTask = (event) => {
        event.preventDefault()

        const id = nanoid()

        classAdd = true

        firebase.firestore().collection('tasks').doc(id).set({
            taskName: taskName,
            deadline: deadline,
            requiredTime: requiredTime,
            isCompleted: false,
            id: id,

        })

        // const tmpTasks = [...tasks, { taskName, requiredTime, deadline, isCompleted: false }]

        // sortTasks(tmpTasks)

        setTaskName('')
        setRequiredTime('')
        setDeadline('')
    }

    //削除ボタンを押した時にtaskを削除する関数
    const handleRemoveTask = (id) => {
        firebase.firestore().collection('tasks').doc(id).update({
            isCompleted: true
        })

        // const newTasks = [...tasks]
        // newTasks.isCompleted = true
        // sortTasks(newTasks)
        // setTasks(newTasks)


    }

    return (
        <>
            <div className={classes.todolist}>
                <div>
                    Add Task : <input value={taskName} placeholder="Add New Task"
                        onChange={e => { setTaskName(e.target.value) }} />
                </div>

                <div>
                    <p>想定される時間</p>
                    <select onChange={e => setRequiredTime(e.target.value)}>
                        {requiredTime_Options.map(requiredTime => {
                            return (
                                <option key={requiredTime.value}>{requiredTime.id}h</option>
                            )
                        })}
                    </select>


                </div>
                <div>
                    <input type="date"
                        onChange={e => setDeadline(e.target.value)} />
                    <div>{deadline}</div>
                </div>
                <div>
                    <Button clicked={addNewTask} />
                </div>
            </div>
            <ul>
                <TaskWrap>
                    {
                        tasks?.map((task) => (
                            <div className={classes.tasklist}>
                                <Item key={getKey()}>{task.taskName} </Item>
                                <Item key={getKey()}>{task.requiredTime}</Item>
                                <Item key={getKey()}>{task.deadline}</Item>
                                <Buttontask onClick={() => moveToTaskDetail(task.id)}>詳細</Buttontask>
                                <input
                                    className={classAdd ? classes.play : classes.none}
                                    type="button"
                                    onClick={() => handleRemoveTask(task.id)}
                                    value="削除" />
                            </div>
                        ))
                    }
                </TaskWrap>
            </ul>

        </>
    );
}





const TaskWrap = styled.div`

width: 100%;
background-color: #C0C0C0;
`
const Item = styled.div`
margin-left: 20px;
margin-top: 30px;
`
const Buttontask = styled.button`

margin-top: 30px;
margin-left: 20px;
`

export default Room
