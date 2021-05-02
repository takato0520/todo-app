




import classes from './taskinput.module.css'
import React, { useState } from 'react';

import Button from './button'

const getKey = () => Math.random().toString(32).substring(2);

function Taskinput() {
    //タスクの追加
    const initialState = [
        {
            task: '',
            time: '',
            dead: '',
            message: '',
            arr: '',
            isCompleted: false
        },

    ]

    const [todos, setTodo] = useState(initialState);


    const [task, setTask] = useState('')

    const handleNewTask = (event) => {
        setTask(event.target.value)
    }

    //タスクにかかる時間について
    const [time, setTime] = useState('1h')

    const options = [

    ]
    const Change = e => {
        console.log(setTime(e.target.value))
        setTime(e.target.value)
    }

    console.log(options.value)
    console.log(time)

    //taskの締め切りについて

    const [dead, setDead] = useState('')
    let today = new Date()
    let nowdate = today.getTime()
    let deadTime = Date.parse(new Date(dead))
    console.log(deadTime)
    let differdate = deadTime - nowdate
    console.log(differdate)

    console.log(nowdate)
    /*    console.log(today) */





    console.log(dead)

    console.log(todos)
    //differdateを並べておく配列
    const [arr, setArr] = useState('')

    /*     const [message, setMessage] = useState(initialState) */

    //plusbuttonクリック時のイベント
    const handleSubmit = (event) => {
        event.preventDefault()
        if (task === '') return
        const tmpTodo = [...todos, { task, time, dead, arr: differdate,/*  message: `${year}`"年", */ isCompleted: false }]

        setTask('')
        console.log('add')

        setArr(tmpTodo)

        console.log(arr)
        console.log(differdate)
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

    }



    /* console.log(message) */

    const handleRemoveTask = index => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodo(newTodos)

    }


    console.log(Date.parse(new Date(dead)))

    return (
        <>
            <h1>ToDo List</h1>
            <div className={classes.todolist}>

                <div>
                    <form >
                        Add Task : <input value={task} placeholder="Add New Task" onChange={handleNewTask} />

                    </form>
                </div>

                <div>
                    <p>想定される時間</p>
                    <select
                        onChange={Change}
                        value={time}
                    >
                        <option value="1h">1h</option>
                        <option value="2h">2h</option>
                        <option value="3h">3h</option>
                        <option value="4h">4h</option>
                        <option value="5h">5h</option>
                        <option value="6h">6h</option>
                    </select>
                    <div>{time}</div>

                </div>
                <div>

                    <input type="date"
                        onChange={e => setDead(e.target.value)} />
                    <div>{dead}</div>
                </div>
                <div><Button clicked={handleSubmit} /></div>
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <div className={classes.tasklist}>
                        <li key={getKey()}>{todo.task} </li>
                        <li key={getKey()}>{todo.time}</li>
                        <li key={getKey()}>{todo.dead}</li>
                        {/* <li key={getKey()}>締め切りまで{todo.message}</li> */}
                        <input
                            type="button"
                            onClick={() => handleRemoveTask(index)}
                            value="削除" />
                    </div>
                ))}


            </ul>
        </>
    );
}

export default Taskinput;
