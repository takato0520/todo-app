import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <Ul>
            <Li>mycalender</Li>
            <Li>通知設定</Li>
            <Li>logout</Li>
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

export default Header;