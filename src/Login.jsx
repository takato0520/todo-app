import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './AuthService'
import firebase from './config/firebase'
import styled from 'styled-components'

const Login = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/")
            })
            .catch(err => {
                console.log(err)
                alert(err)
            })
    }

    const user = useContext(AuthContext)

    const moveToSignUp = () => {
        history.push("/signup")
    }

    if (user) {
        return <Redirect to="/" />
    }

    return (
        <>
            <Title>Login</Title>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        onChange={
                            e => {
                                setEmail(e.target.value)
                            }
                        }
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='password'
                        onChange={
                            e => {
                                setPassword(e.target.value)
                            }
                        }

                    />
                </div>
                <button type='submit'>Login</button>
                <button onClick={moveToSignUp}>Sign Upへ</button>
            </form>
        </>
    )


}

//styled-componentsの定義

const Title = styled.h1`
    text-align:center;
    font-size:45px;
    `

export default Login