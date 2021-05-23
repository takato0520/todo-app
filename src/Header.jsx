import React from 'react'
import styled from 'styled-components'
import { useHistory, useLocation } from 'react-router-dom'

const Header = () => {
    const history = useHistory()
    const location = useLocation()

    const moveToTaskHistory = () => {
        history.push("/taskHistory");
    }

    const moveToRoom = () => {
        history.push("/");
    }

    const moveToLogin = () => {
        history.push("login")
    }

    return (
        <>
            {(location.pathname === "/" || location.pathname === "/taskHistory") ?
                < Ul >
                    <Li onClick={moveToLogin}>logout</Li>
                    {
                        (location.pathname === "/") ?
                            <Li onClick={moveToTaskHistory}>履歴</Li>
                            : <Li onClick={moveToRoom}>戻る</Li>
                    }

                </Ul > : <></>
            }
        </>
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
