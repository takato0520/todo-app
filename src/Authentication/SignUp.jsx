import React, { useState } from 'react'
import firebase from '../config/firebase'
import styled from 'styled-components';

const SignUp = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/");
            })
            .catch(err => {
                setEmail('');
                setPassword('');
                alert(err);
                console.log(err)
            })
    }

    const changeSubmit = (e) => {
        history.push("/login");
    }



    return (
        <div>
            <Title>Sign Up</Title>
            <form onSubmit={handleSubmit}>
                <Box>
                    <InputBox>
                        <label htmlFor='email'>E-mail</label>
                        <Input
                            onChange={e => { setEmail(e.target.value) }}
                            name='email'
                            type='email'
                            id='email'
                            placeholder='Email'
                        />
                    </InputBox>
                    <InputBox>
                        <label htmlFor='password'>Password</label>
                        <Input
                            onChange={e => { setPassword(e.target.value) }}
                            name='password'
                            type='password'
                            id='password'
                            placeholder='Password'
                        />
                    </InputBox>
                    <ButtonWrap>
                        <SignupButton type='submit'>Sign Up</SignupButton>
                        <LoginButton onClick={changeSubmit}>アカウントをお持ちの方はこちら</LoginButton>
                    </ButtonWrap>
                </Box>
            </form>
        </div>
    )
}

//styled-componensの定義//

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
const SignupButton = styled.button`
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

const LoginButton = styled.div`
 width: 100%;
 font-size:18px;
 cursor:pointer;
 :hover{
     color:blue;
 }
 `

export default SignUp
