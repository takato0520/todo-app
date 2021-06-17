import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import firebase from '../config/firebase'
import 'firebase/firestore'
import DeleteIcon from '@material-ui/icons/Delete';
import dayjs from 'dayjs'

const TaskHistory = ({ getTasks }) => {

    const [completedTasks, setCompletedTask] = useState([])

    useEffect(() => {
        if (getTasks) setCompletedTask(getTasks.filter(task => task.isCompleted === true))
    }
        , [getTasks])

    console.log(completedTasks)
    console.log(getTasks)

    //メイン画面にtaskを再表示する処理
    const restoreTask = (id) => {
        firebase.firestore().collection('tasks').doc(id)
            .update({
                isCompleted: false
            })
    }

    //履歴画面からtaskを削除する処理（DBから完全に消去する処理）
    const deleteTask = (id) => {
        firebase.firestore().collection('tasks').doc(id)
            .delete()
    }

    return (
        <>
            <Title>履歴</Title>
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

            <ul>
                {
                    completedTasks.map((completedTask => {
                        return (
                            <ItemBox>
                                <ItemTaskName >{completedTask.taskName} </ItemTaskName>
                                <ItemRequiredTime >{completedTask.requiredTime} min</ItemRequiredTime>
                                <ItemDeadline >{dayjs(completedTask.deadline).format('YYYY/MM/DD HH:mm')}</ItemDeadline>
                                <ItemDetail onClick={() => restoreTask(completedTask.id)}>復元</ItemDetail>
                                <ItemDeleteIcon
                                    onClick={() => deleteTask(completedTask.id)}
                                    value="削除" />
                            </ItemBox>
                        )
                    }))
                }
            </ul >
        </>
    )
}

const Title = styled.div`
    height:72px;
    margin-left:20px;
    pointer:30px;
    display:flex;
    font-size:30px;
    align-items:center;
`

//outputエリアのstyle
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
    cursor:pointer;
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
export default TaskHistory
