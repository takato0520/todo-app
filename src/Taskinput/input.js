import React, { useState } from 'react'

/* const Input = ({ onAdd }) => {
    const [text, setText] = useState('')



    const handlesubmit = (e) => {
        e.preventdefault()
        onAdd(text)
    }

    return (
        <form onSubmit={handlesubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </form>
    )
} */

const Input = () => {
    const [time, setTime] = useState('')

    const options = [

    ]
    const Change = e => {
        console.log(setTime(e.target.value))
        setTime(e.target.value)
    }

    console.log(options.value)
    console.log(time)
    return (
        <>
            <p>想定される時間</p>
            <select
                onChange={Change}
                value={time}
            >
                <option value="1h">1h</option>
                <option value="2h">2h</option>
                <option value="3h">3h</option>
                <option value="4h">4h</option>
                <option value="5h">5h</option>
                <option value="6h">6h</option>
            </select>
            <div>{time}</div>
        </>

    )
}

export default Input;