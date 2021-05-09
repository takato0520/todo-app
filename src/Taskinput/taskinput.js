

import classes from './taskinput.module.css'
import React, { useState, useEffect } from 'react';
import Button from './button'
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'
import { nanoid } from 'nanoid';

//key
const getKey = () => Math.random().toString(32).substring(2);



function Taskinput({ history }) {

    /* const [text, setText] = useState() */ //textareaの内容
    //firestoreから読み込んだtextarea
    /* useEffect(() => {
        firebase.firestore().collection('tasks').doc('xJChN3VORCrnp7Ih1GvF').get()
            .then(text => { setText(text.data().detail) })
    }, []) */





    const moveToTaskDetail = (e) => {
        history.push("/taskDetail");
    }

    const moveToTaskComp = (e) => {
        history.push("/taskHistory")
    }

    //taskみたいなものを入れておく配列
    const [todos, setTodo] = useState([]);
    //タスク名の変数
    const [task, setTask] = useState('')

    const handleNewTask = (event) => {
        setTask(event.target.value)
    }

    //タスクにかかる時間について
    const [time, setTime] = useState('1h')

    /*  const options = [
 
     ] */





    console.log(time)
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
        setTime(e.target.value)
    }


    let slicetime = time.slice(0, 1)
    let getSlicetime = slicetime * 3600000
    //taskの締め切りについて
    const deadTask = dead_Time.map(deadtask => {
        return (
            <option key={deadtask.value}>{deadtask.id}h</option>
        )
    })
    //締め切りの日にち
    const [dead, setDead] = useState('')
    //今日の日にちから締め切りまでの日数を計算
    let today = new Date()
    let nowdate = today.getTime()
    let deadTime = Date.parse(new Date(dead))
    let differdate = deadTime - nowdate - getSlicetime

    //削除ボタンと詳細ボタンの表示を決めておく変数
    const [classAdd, setClassAdd] = useState(false)
    const [classDetail, setClassDetail] = useState(false)

    //differdateを並べておく配列
    const [arr, setArr] = useState('')

    /*     const [message, setMessage] = useState(initialState) */

    //plusbuttonクリック時のイベント
    const handleSubmit = (event) => {
        event.preventDefault()
        setClassAdd(true)
        setClassDetail(true)
        if (task === '') return
        const tmpTodo = [...todos, { task, time, dead, arr: differdate,/*  message: `${year}`"年", */ isCompleted: false, done: false, id: nanoid.generate() }]

        setTask('')
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
                todo.done = !todo.done
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




    console.log(Date.parse(new Date(dead)))

    return (
        <>
            {/* <TaskDetail
                text={text}
                save={saveTextData}
                delete={deleteText} /> */}
            <div className={classes.todolist}>

                <div>
                    <form >
                        Add Task : <input value={task} placeholder="Add New Task" onChange={handleNewTask} />

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
                        onChange={e => setDead(e.target.value)} />
                    <div>{dead}</div>
                </div>
                <div><Button clicked={handleSubmit} /></div>
            </div>
            <ul>
                <TaskWrap>
                    {todos.map((todo, index) => (
                        <div className={classes.tasklist}>
                            <input
                                type="checkbox"
                                checked={todo.done}
                                onChange={handleCheck}
                            />
                            <Item key={getKey()}>{todo.task} </Item>
                            <Item key={getKey()}>{todo.time}</Item>
                            <Item key={getKey()}>{todo.dead}</Item>
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
            <input type="button"
                value="履歴画面へ"
                onClick={moveToTaskComp} />
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

