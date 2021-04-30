import { useEffect, useState } from 'react'
import firebase from './config/firebase'
import 'firebase/firestore'
import styled from 'styled-components'

const TaskDetail = ({ history }) => {

    const [text, setText] = useState() //textareaの内容
    const [alerm, setAlerm] = useState(false) //textに変更があったかどうか判定する値

    //前保存したテキストをtextareaに返す処理　*Roomを開いた時にロードした方が良いと思う
    useEffect(() => {
        firebase.firestore().collection('tasks').doc('xJChN3VORCrnp7Ih1GvF').get()
            .then(text => { setText(text.data().detail) })
    }, [])


    //テキストをFirebaseに保存する関数
    const saveTextData = (e) => {
        e.preventDefault()
        firebase.firestore().collection('tasks').doc('xJChN3VORCrnp7Ih1GvF').update({
            detail: text
        })
    }

    //テキストの削除をする関数
    const deleteText = (e) => {
        e.preventDefault()
        setText("")
    }

    //Roomコンポーネントへ移動する関数
    const moveToRoom = (e) => {
        e.preventDefault()
        if (alerm) {
            if (window.confirm('内容に変更があります。保存しますか?')) {
                saveTextData(e)
                history.push("/")
            }
        } else {
            history.push("/")
        }
    }

    return (
        <>
            <h1>タスク名</h1>
            <div>期限</div>
            <div>かかる時間</div>
            <h2>タスクの詳細</h2>
            <Textarea
                value={text}
                onChange={
                    e => {
                        setText(e.target.value)
                        setAlerm(true)
                    }
                }
            />
            <ButtonWrap>
                <button onClick={saveTextData}>保存</button>
                <button onClick={deleteText}>削除</button>
                <button onClick={moveToRoom}>閉じる</button>
            </ButtonWrap>
        </>
    )
}
const ButtonWrap = styled.div`

`

const Textarea = styled.textarea`
width:500px;
`
export default TaskDetail