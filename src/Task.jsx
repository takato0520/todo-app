import styled from 'styled-components';
const Task = () => {


    return (
     <TaskWrap>
         <h2>タスク</h2>
         <Item>タスクにかかる時間</Item>
         <Item>タスクの期日</Item>
         <Item>あと○日</Item>
         <Item>詳細</Item>
         <Item>変更</Item>
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
export default Task