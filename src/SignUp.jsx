import React,{useState} from 'react'
import firebase from './config/firebase'
import styled from 'styled-components';

const SignUp = ({history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(({user}) => {
            history.push("/");
            user.updateProfile({
                displayName: name
            })
        })
        .catch(err => {
            setEmail('');
            setPassword('');
            alert('Wrong .');
            console.log(err)
        }) 
    }

    const changeSubmit = (e) =>{
        history.push("/login");
    }

    //styled-componensの定義//

    const Title = styled.h1`
    text-align: center;
    font-size: 45px;
    width: 100%;
    `;

    const Wrap = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    `
    const InputWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
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
    const Button = styled.button`
    width: 100%; 
    margin-top:10px;
    margin-bottom:30px;
    padding:15px;
    font-size:18px;
    border:1px solid black;
    `
    


    return (
        <div>
            <Title>Sign Up</Title>
            <form onSubmit={handleSubmit}>
                <Wrap>
                    <InputWrap>
                        <label htmlFor='email'>E-mail</label>
                        <Input
                            onChange={e => setEmail(e.target.value)}
                            name='email' 
                            type='email' 
                            id='email' 
                            placeholder='Email' 
                        />
                    </InputWrap>
                    <InputWrap>
                        <label htmlFor='password'>Password</label>
                        <Input 
                            onChange={e => setPassword(e.target.value)}
                            name='password' 
                            type='password' 
                            id='password' 
                            placeholder='Password' 
                        />
                    </InputWrap>
                    <InputWrap>
                        <label htmlFor='name'>name</label>
                        <Input 
                            onChange={e => setName(e.target.value)}
                            name='name' 
                            type='name' 
                            id='name' 
                            placeholder='name' 
                        />
                    </InputWrap> 
                </Wrap>
                <ButtonWrap>
                    <Button style={{marginBottom: 10}} type='submit'>Sign Up</Button>
                    <Button onClick={changeSubmit}>ログインへ</Button>
                </ButtonWrap>
            </form>
        </div>
    )
}

export default SignUp
