import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './AuthService'
import firebase from '../config/firebase'
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
                <Box>
                    <InputBox>
                        <label htmlFor='email'>E-mail</label>
                        <Input
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
                    </InputBox>
                    <InputBox>
                        <label htmlFor='password'>Password</label>
                        <Input
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
                    </InputBox>
                    <ButtonWrap>
                        <LoginButton type='submit'>Login</LoginButton>
                        <SignupButton onClick={moveToSignUp}>アカウントをお持ちでない方はこちら</SignupButton>
                    </ButtonWrap>
                </Box>
            </form>
        </>
    )


}

//styled-componentsの定義

const Title = styled.h1`
 text-align: center;
 margin-top:10px;
 font-size: 45px;
 width: 100%;
 `;

const Box = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 `
const InputBox = styled.div`
 display: flex;
 flex-direction: column;
 padding:10px;
 width: 60%;
 `
const Input = styled.input`
 padding:5px;
 font-size:20px;
 border:1px solid black;
 `

const ButtonWrap = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 `
const LoginButton = styled.button`
 width: 100%;
 margin-top:10px;
 margin-bottom:30px;
 padding:15px;
 font-size:18px;
 border:1px solid black;
 background-color:#00DD00;
 color:white;
 cursor:pointer;pointer;
 :hover{
     background-color:#CCFFFF;
     color:black
 }
 `

const SignupButton = styled.div`
 width: 100%;
 font-size:18px;
 cursor:pointer;
 :hover{
     color:blue;
 }
 `

export default Login
