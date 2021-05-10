import React, { useState } from 'react'

const Deadline = () => {
    const [dead, setDead] = useState('')


    return (
        <>
            <input type="date"
                onChange={e => setDead(e.target.value)} />
            <div>{dead}</div>
        </>

    )
}

export default Deadline;