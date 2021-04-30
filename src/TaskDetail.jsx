import { useEffect, useState } from 'react'
import firebase from './config/firebase'
import 'firebase/firestore'


const TaskDetail = ({ history }) => {

    const [text, setText] = useState()

    //前のテキストをtextareaに返す処理
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
        history.push("/")
    }
    console.log(text)

    return (
        <>
            <h1>タスク名</h1>
            <div>期限</div>
            <div>かかる時間</div>
            <h2>タスクの詳細</h2>
            <div>{text}</div>
            <textarea
                value={text}
                onChange={
                    e => {
                        setText(e.target.value)
                    }
                }
            />
            <button onClick={saveTextData}>保存</button>
            <button onClick={deleteText}>削除</button>
            <button onClick={moveToRoom}>閉じる</button>
        </>
    )
}

export default TaskDetail