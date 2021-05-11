const TaskHistory = ({ history }) => {
    const returnButton = () => {
        history.push('/')
    }
    return (
        <button onClick={returnButton}>戻る</button>

    )
}

export default TaskHistory