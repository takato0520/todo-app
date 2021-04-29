import { useState } from 'react'

const TaskDetail = ({ history }) => {
    const [text, setText] = useState()

    const deleteText = (e) => {
        e.preventDefault()
        setText("")
    }

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
            <button>保存</button>
            <button onClick={deleteText}>削除</button>
            <button onClick={moveToRoom}>閉じる</button>
        </>
    )
}

export default TaskDetail