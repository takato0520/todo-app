import styled from 'styled-components'
import firebase from './config/firebase'
import 'firebase/firestore'



const CompletedTask = ({ completedTask }) => {

    console.log(completedTask.key)
    console.log(firebase.firestore().collection('tasks').doc(completedTask.key))
    console.log(firebase.firestore().collection('tasks').doc('7v3fqv9S3OHmp93fLl4N'))

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
            <Button>詳細</Button>
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
export default CompletedTask
