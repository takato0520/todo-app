/* import React, { useState } from 'react'
import classes from './taskinput.module.css'
import Input from './input'

const getKey = () => Math.random().toString(32).substring(2);

const Taskinput = () => {
    const [items, setItems] = useState([])


    const handleAdd = content => {
        const itemarray = Object.entries(items)
        setItems([...items,

        { content: content, key: getKey() }
        ])
        console.log(content)
        console.log(items)
        console.log(itemarray)
    }


    return (
        <>
            <div className={classes.taskbar}>
                <p>task name</p>
                <p>task time</p>
                <p>dead line</p>
            </div>

            <div className={classes.textbox}>
                <Input onAdd={handleAdd} />
                

            </div>
            <div
                className={`${classes.icon} ${classes.iconplus}`}
                onClick={handleAdd} >
                <span className={classes.icon__mark}></span>
            </div>
            <div>{items}</div>

        </>
    )
}

export default Taskinput;




 */
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
        /* {
            task: 'Learn React Hook',
            isCompleted: false
        },
        {
            task: 'Learn Gatsby.js',
            isCompleted: false
        }, */
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
    var today = new Date()


    var nowdate = today.getTime()
    console.log(nowdate)
    console.log(today)

    const [dead, setDead] = useState('')


    const [year, setYear] = useState('')
    const [month, setMonth] = useState('')
    const [day, setDay] = useState('')
    /* const [hour, setHour] = useState('') */

    var targetDate = new Date(year, month, day)
    var changeDate = targetDate.getTime();

    const differdate = changeDate - nowdate


    console.log(dead)

    console.log(todos)
    //differdateを並べておく配列
    const [arr, setArr] = useState('')

    /*     const [message, setMessage] = useState(initialState) */

    //plusbuttonクリック時のイベント
    const handleSubmit = (event) => {
        event.preventDefault()
        if (task === '') return
        setTodo(todos => [...todos, { task, time, dead, arr,/* message */ isCompleted: false }])
        setTask('')
        console.log('add')
        /* setMessage(() => { as: differdate }) */

        /* let newarr = setArr([...arr, differdate])
        console.log(setArr([...arr, `${differdate}`])) */
        setArr(differdate)
        console.log(arr)
        console.log(differdate)
        todos.sort(function (a, b) {
            console.log(a.arr)
            if (a.arr < b.arr) {
                return -1;
            }
            if (a.arr > b.arr) {
                return 1
            }
            return 0;
        })
        console.log(todos)
    }



    /* console.log(message) */

    const handleRemoveTask = index => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodo(newTodos)

    }



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
                    <input type="text" onChange={e => setYear(e.target.value)} />年
                    <input type="text" onChange={e => setMonth(e.target.value)} />月
                    <input type="text" onChange={e => setDay(e.target.value)} />日
                    {/* <input type="text" onChange={e => setHour(e.target.value)} />時 */}
                    <div>{year}年{month}月{day}日</div>
                    {/* <input type="date"
                        onChange={e => setDead(e.target.value)} />
                    <div>{dead}</div> */}
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
