import styled from 'styled-components'

const CompletedTask = ({ completedTask }) => {

    return (
        <TaskWrap>
            <h2>{completedTask.task}</h2>
            <Item>タスクにかかる時間:{completedTask.time}</Item>
            <Item>タスクの期日:{completedTask.dead}</Item>
            <Item>詳細</Item>
            <Item>復元</Item>
            <Item>削除</Item>
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

export default CompletedTask
