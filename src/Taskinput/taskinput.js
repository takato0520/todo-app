import classes from './taskinput.module.css'
import React, { useState } from 'react';
import Button from './button'
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'
import { nanoid } from 'nanoid';
import firebase from '../config/firebase'

//key
const getKey = () => Math.random().toString(32).substring(2);



function Taskinput({ history }) {







    const moveToTaskDetail = (e) => {
        history.push("/taskDetail");
    }

    const moveToTaskComp = (e) => {
        history.push("/taskHistory")
    }

    //taskみたいなものを入れておく配列
    const [todos, setTodo] = useState([]);
    //タスク名の変数
    const [taskName, setTaskName] = useState('')

    const handleNewTask = (event) => {
        setTaskName(event.target.value)
    }

    //タスクにかかる時間について
    const [requiredTime, setRequiredTime] = useState('1h')

    /*  const options = [
 
     ] */





    console.log(requiredTime)
    //taskにかかる時間のselect
    const dead_Time = [
        { value: "1", label: "1h", id: "1", },
        { value: "2", label: "2h", id: "2", },
        { value: "3", label: "3h", id: "3", },
        { value: "4", label: "4h", id: "4", },
        { value: "5", label: "5h", id: "5", },
        { value: "6", label: "6h", id: "6", }
    ]


    //想定される時間の関数
    const Change = e => {
        setRequiredTime(e.target.value)
    }


    let slicetime = requiredTime.slice(0, 1)
    let getSlicetime = slicetime * 3600000
    //taskの締め切りについて
    const deadTask = dead_Time.map(deadtask => {
        return (
            <option key={deadtask.value}>{deadtask.id}h</option>
        )
    })
    //締め切りの日にち
    const [deadline, setDeadLine] = useState('')
    //今日の日にちから締め切りまでの日数を計算
    let today = new Date()
    let nowdate = today.getTime()
    let deadTime = Date.parse(new Date(deadline))
    let differdate = deadTime - nowdate - getSlicetime

    //削除ボタンと詳細ボタンの表示を決めておく変数
    const [classAdd, setClassAdd] = useState(false)
    const [classDetail, setClassDetail] = useState(false)

    //differdateを並べておく配列
    const [arr, setArr] = useState('')

    /*     const [message, setMessage] = useState(initialState) */
    const nanoinad = nanoid()
    console.log(typeof (nanoinad))

    console.log(typeof (taskName))

    const random = Math.floor(Math.random() * 53);
    console.log(random)
    const [id, setId] = useState(nanoid())
    //plusbuttonクリック時のイベント
    const handleSubmit = (e) => {
        e.preventDefault()
        setId(nanoid())
        setClassAdd(true)
        setClassDetail(true)
        if (taskName === '') return
        if (deadline === '') return

        const tmpTodo = [...todos, { taskName, requiredTime, deadline, arr: differdate,/*  message: `${year}`"年", */ isCompleted: false, done: false, id: id }]
        console.log(typeof (tmpTodo.id))

        //firestoreに保存する

        firebase.firestore().collection('tasks').add({
            name: taskName,
            deadline: deadline,
            requiredTime: requiredTime,
            isCompleted: false,
            id: id,

        })


        setTaskName('')
        setArr(tmpTodo)
        tmpTodo.sort(function (a, b) {
            console.log(a.arr)
            if (a.arr < b.arr) {
                return -1;
            }
            if (a.arr > b.arr) {
                return 1
            }
            return 0;
        })
        setTodo(tmpTodo)

        console.log(classAdd)
    }




    //checkboxを反転させる関数
    const handleCheck = (checked) => {
        const checkedTodos = todos.map(todo => {
            if (todo.key === checked.key) {
                todo.isCompleted = !todo.isCompleted
            }
            return todo
        })
        setTodo(checkedTodos);
    }



    /* console.log(message) */
    //task削除
    const handleRemoveTask = index => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodo(newTodos)

    }




    console.log(Date.parse(new Date(deadline)))

    return (
        <>
            {/* <TaskDetail
                text={text}
                save={saveTextData}
                delete={deleteText} /> */}
            <div className={classes.todolist}>

                <div>
                    <form >
                        Add Task : <input value={taskName} placeholder="Add New Task" onChange={handleNewTask} />

                    </form>
                </div>

                <div>
                    <p>想定される時間</p>
                    <select
                        onChange={Change}                    >
                        {deadTask}
                    </select>


                </div>
                <div>

                    <input type="date"
                        onChange={e => setDeadLine(e.target.value)} />
                    <div>{deadline}</div>
                </div>
                <div><Button clicked={handleSubmit} /></div>
            </div>
            <ul>
                <TaskWrap>
                    {todos.map((todo, index) => (
                        <div className={classes.tasklist}>
                            <input
                                type="checkbox"
                                checked={todo.inCompleted}
                                onChange={handleCheck}
                            />
                            <Item key={getKey()}>{todo.taskName} </Item>
                            <Item key={getKey()}>{todo.requiredTime}</Item>
                            <Item key={getKey()}>{todo.deadline}</Item>
                            {/* <li key={getKey()}>締め切りまで{todo.message}</li> */}
                            <Buttontask
                                className={classDetail ? classes.play : classes.none}
                                onClick={moveToTaskDetail}>詳細</Buttontask>
                            <input
                                className={classAdd ? classes.play : classes.none}
                                type="button"
                                onClick={() => handleRemoveTask(index)}
                                value="削除" />
                        </div>
                    ))}
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

export default withRouter(Taskinput)

