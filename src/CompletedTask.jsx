import styled from 'styled-components'
import firebase from './config/firebase'
import 'firebase/firestore'
import { withRouter } from 'react-router-dom'


const CompletedTask = ({ completedTask }, { history }) => {

    console.log(completedTask.key)
    console.log(firebase.firestore().collection('tasks').doc(completedTask.key))
    console.log(firebase.firestore().collection('tasks').doc('7v3fqv9S3OHmp93fLl4N'))

    const moveToDetail = (e) => {
        e.preventDefault()
        history.push('/taskDetail')
        return completedTask
    }

    const restoreTask = (e) => {
        e.preventDefault()
        const docRef = firebase.firestore().collection('tasks').doc(completedTask.key)
        docRef.update({
            isCompleted: false
        })
    }

    const deleteTask = (e) => {
        e.preventDefault()
        firebase.firestore().collection('tasks').doc(completedTask.key)
            .delete()
    }


    return (
        <TaskWrap>
            <h2>{completedTask.name}</h2>
            <Item>タスクにかかる時間:{completedTask.requiredTime}</Item>
            <Item>タスクの期日:{completedTask.deadline}</Item>
            <Button onclick={moveToDetail}>詳細</Button>
            <Button onClick={restoreTask}>復元</Button>
            <Button onClick={deleteTask}>削除</Button>
        </TaskWrap>
    )
}

const TaskWrap = styled.div`
display: flex;
width: 100%;
background-color: #C0C0C0;
`
const Item = styled.div`
margin-left: 20px;
margin-top: 30px;
`
const Button = styled.button`
color:#000;
background-color:yellow;
width:100px;
cursor:pointer;
`
export default withRouter(CompletedTask)
