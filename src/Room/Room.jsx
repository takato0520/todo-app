import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import firebase from '../config/firebase'
import 'firebase/firestore'
import { nanoid } from 'nanoid';
import { useHistory } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import dayjs from 'dayjs'

const Room = ({ getTasks }) => {
    const history = useHistory()
    const [tasks, setTasks] = useState()
    const [taskName, setTaskName] = useState('')
    const [requiredTime, setRequiredTime] = useState('0')
    const [deadline, setDeadline] = useState('')
    const [isInputTaskName, setIsInputTaskName] = useState(true)
    const [isInputRequiredTime, setIsInputRequiredTime] = useState(true)
    const [isInputDeadline, setIsInputDeadline] = useState(true)

    useEffect(() => {
        if (getTasks) {
            sortTasks(getTasks.filter(task => task.isCompleted === false))
            console.log(getTasks)
            console.log(tasks)
        }
    }
        , [getTasks])

    //ボタンの処理
    //詳細ボタンを押した時に詳細画面に遷移する処理
    const moveToTaskDetail = (id) => {
        history.push(`/taskDetail/${id}`);
    }

    //taskにかかる時間を選択するのに必要な定数
    const requiredTime_Options = [
        { value: "0" },
        { value: "5" },
        { value: "10" },
        { value: "15" },
        { value: "20" },
        { value: "30" },
        { value: "35" },
        { value: "40" },
        { value: "45" },
        { value: "50" },
        { value: "55" },
        { value: "60" },
    ]

    const sortTasks = (tmpTasks) => {
        //今の時間を取得し、msecに変換する
        const today = new Date()
        const now_msec = today.getTime()

        tmpTasks?.forEach(tmpTask => (
            //taskの優先順位を決める指標　締切までの時間-taskにかかる時間=締切日-今の時間-taskにかかる時間
            tmpTask.difference = Date.parse(new Date(tmpTask.deadline)) - now_msec - tmpTask.requiredTime.slice(0, 1) * 60000
        ))

        console.log(tmpTasks)

        tmpTasks?.sort((a, b) =>
            a.difference - b.difference
        )

        setTasks(tmpTasks)
    }

    //plusbuttonを押した時、DBにtaskを追加する処理
    const addNewTask = (event) => {
        event.preventDefault()

        const id = nanoid()

        !taskName ? setIsInputTaskName(false) : setIsInputTaskName(true)
        requiredTime === '0' ? setIsInputRequiredTime(false) : setIsInputRequiredTime(true)
        !deadline ? setIsInputDeadline(false) : setIsInputDeadline(true)

        if (taskName && requiredTime !== '0' && deadline) {

            firebase.firestore().collection('tasks').doc(id).set({
                taskName: taskName,
                deadline: deadline,
                requiredTime: requiredTime,
                isCompleted: false,
                id: id,

            })

            setTaskName('')
            setRequiredTime('')
            setDeadline('')
            setIsInputTaskName(true)
            setIsInputRequiredTime(true)
            setIsInputDeadline(true)
        }
    }

    //削除ボタンを押した時にtaskを削除する関数
    const handleRemoveTask = (id) => {
        firebase.firestore().collection('tasks').doc(id).update({
            isCompleted: true
        })

    }

    console.log(getTasks)
    console.log(tasks)

    return (
        <>
            <InputBox >
                <TaskNameBox>
                    <div>件名</div>
                    <InputTaskName value={taskName} placeholder="Add New Task"
                        onChange={e => { setTaskName(e.target.value) }} />
                    <Error isInput={isInputTaskName}>件名を入力してください</Error>
                </TaskNameBox>

                <RequiredTimeBox>
                    <div>所要時間</div>
                    <SelectRequiredTime
                        onChange={e => setRequiredTime(e.target.value)}
                        value={requiredTime}>
                        {requiredTime_Options.map(requiredTime => {
                            return (
                                <option key={requiredTime.value}>{requiredTime.value}</option>
                            )
                        })}
                    </SelectRequiredTime> min
                    <Error isInput={isInputRequiredTime}>所要時間を入力してください</Error>
                </RequiredTimeBox>

                <DeadlineBox>
                    <div>期日</div>
                    <InputDeadline type="datetime-local"
                        value={deadline}
                        onChange={e => setDeadline(e.target.value)} />
                    <Error isInput={isInputDeadline}>期日を入力してください。</Error>
                </DeadlineBox>

                <AddCircleIconBox>
                    < AddCircleIcon onClick={addNewTask} />
                </AddCircleIconBox>
            </InputBox>

            <ul>
                <IndexBox>
                    <ItemTaskName>
                        件名
                    </ItemTaskName>
                    <ItemRequiredTime>
                        所要時間
                    </ItemRequiredTime>
                    <ItemDeadline>
                        期日
                    </ItemDeadline>
                </IndexBox>
                <TaskWrap>
                    {
                        tasks?.map((task) => (
                            <ItemBox >
                                <ItemTaskName >{task.taskName} </ItemTaskName>
                                <ItemRequiredTime >{task.requiredTime} min</ItemRequiredTime>
                                <ItemDeadline >{dayjs(task.deadline).format('YYYY/MM/DD HH:mm')}</ItemDeadline>
                                <ItemDetail onClick={() => moveToTaskDetail(task.id)}>詳細</ItemDetail>
                                <ItemDeleteIcon
                                    onClick={() => handleRemoveTask(task.id)}
                                    value="削除" />
                            </ItemBox>
                        ))
                    }
                </TaskWrap>
            </ul>

        </>
    );
}

//inputエリアのstyle
const InputBox = styled.div`
display:flex;
justify-content:space-between;
margin-top:20px;
`

const TaskNameBox = styled.div`
margin-left: 20px;
`
const RequiredTimeBox = styled.div`
margin-left: 20px;
`
const DeadlineBox = styled.div`
margin-left: 20px;
`

const InputTaskName = styled.input`
box-sizing:border-box;
border:solid 1px black;
height:20px;
`
const SelectRequiredTime = styled.select`
border:solid 1px black;
height:20px;
`
const InputDeadline = styled.input`
box-sizing:border-box;
border:solid 1px black;
height:20px;
`
const AddCircleIconBox = styled.div`
cursor:pointer;
margin:auto 0;
margin-right:20px;
`

const Error = styled.div`
color:${({ isInput }) => isInput ? 'transparent' : 'red'};
`
//outputエリアのstyle
const TaskWrap = styled.div`
width: 100%;
`
const IndexBox = styled.div`
display:flex;
align-items:center;
margin-top:30px;
background-color:#00CC99;
height:70px;
`

const ItemBox = styled.div`
height:50px;
display:flex;
align-items:center;
background-color:#CCFFFF;
margin-top:5px;
`

const Item = styled.div`
margin-left: 20px;
`

const ItemTaskName = styled(Item)`
width:20%;
`
const ItemRequiredTime = styled(Item)`
width:20%;
`
const ItemDeadline = styled(Item)`
width:35%;
`
const ItemDetail = styled(Item)`
width:50px;
    :hover{
        opacity:0.8;
        color:#0066FF;
    }
`
const ItemDeleteIcon = styled(DeleteIcon)`
font-size:18px;
cursor:pointer;
    :hover{
        opacity:0.8;
        color:#0066FF;

    }
`

export default Room
