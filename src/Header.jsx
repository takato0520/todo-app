import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

const Header = ({ history }) => {

    const taskCompleted = (e) => {
        history.push("/taskHistory");
    }
    return (
        <Ul>
            <Li>mycalender</Li>
            <Li>通知設定</Li>
            <Li>logout</Li>
            <Li onClick={taskCompleted}>履歴画面</Li>
        </Ul>
    )

}

const Li = styled.li`
    list-style : none;
    padding: 0 30px;
    cursor: pointer;
    
`

const Ul = styled.ul`
    display: flex;
    justify-content: flex-end;
    background-color: #fff636;
    margin: 0;
`

export default withRouter(Header);