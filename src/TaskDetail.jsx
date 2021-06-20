import { useEffect, useState } from 'react'
import firebase from './config/firebase'
import 'firebase/firestore'
import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'
import dayjs from 'dayjs'

const TaskDetail = () => {
    const history = useHistory()
    const { id } = useParams()
    const [task, setTask] = useState() //textareaの内容
    const [isChanged, setIsChanged] = useState(false) //textに変更があったかどうか判定する値

    //前保存したテキストをtextareaに返す処理　*Roomを開いた時にロードした方が良いと思う
    useEffect(() => {
        firebase.firestore().collection('tasks').doc(id).get()
            .then(task => { setTask(task.data()) })
    }, [])


    //テキストをFirebaseに保存する関数　*docの値を変数にする
    const saveTextData = (e) => {
        e.preventDefault()
        firebase.firestore().collection('tasks').doc(id).update({
            detail: task.detail
        })
        setIsChanged(false)
    }

    //テキストの削除をする関数
    const deleteText = (e) => {
        e.preventDefault()
        setTask({ ...task, detail: "" })
        setIsChanged(true)
    }

    //Roomコンポーネントへ移動する関数
    //textareaの内容に変更があった時内容を保存するか確認する
    const moveToRoom = (e) => {
        e.preventDefault()
        if (isChanged) {
            if (window.confirm('内容に変更があります。保存しますか?')) {
                saveTextData(e)
            }
        }
        history.push("/")
    }

    return (
        <>
            <Box>
                <ItemBox>
                    <ItemTaskName>
                        <div>タスク名</div>
                        <div>{task?.taskName}</div>
                    </ItemTaskName>
                    <ItemDeadline>
                        <div>期限</div>
                        <div>{dayjs(task?.deadline).format('YYYY/MM/DD HH:mm')}</div>
                    </ItemDeadline>
                    <ItemRequiredTime>
                        <div>かかる時間</div>
                        <div>{task?.requiredTime} min</div>
                    </ItemRequiredTime>
                    <Title>詳細</Title>
                </ItemBox>
                <Textarea
                    value={task?.detail}
                    onChange={
                        e => {
                            setTask({ ...task, detail: e.target.value })
                            setIsChanged(true)
                        }
                    }
                />
                <ButtonWrap>
                    <Button onClick={saveTextData}>保存</Button>
                    <Button onClick={deleteText}>削除</Button>
                    <Button onClick={moveToRoom}>閉じる</Button>
                </ButtonWrap>
            </Box>
        </>
    )
}

const Box = styled.div`

`

const Title = styled.div`
width:80%;
font-size:20px;
margin:0 auto;
margin-top:10px;
`

const ItemBox = styled.div`
display:flex;
flex-direction:column;
`

const ItemTaskName = styled.div`
width:80%;
margin:0 auto;
margin-top:10px;
`

const ItemDeadline = styled.div`
width:80%;
margin:0 auto;
margin-top:10px;
`

const ItemRequiredTime = styled.div`
width:80%;
margin:0 auto;
margin-top:10px;
`

const Textarea = styled.textarea`
width:80%;
height:100px;
display:block;
margin:0 auto;
margin-top:10px;
box-sizing:border-box;
border:1px solid black;
`

const Button = styled.button`
margin-top:2px;
color:white;
background-color:#00DD00;
cursor:pointer;
    :hover{
        opacity:0.8;
        background-color:#CCFFFF;
        color:black
    }
`


const ButtonWrap = styled.div`
    margin:0 auto;
    margin-top:10px;
    width:80%;
    display:flex;
    flex-direction:column;

`


export default TaskDetail
