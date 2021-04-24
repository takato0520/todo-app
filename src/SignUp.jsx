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
    `;

    const Wrap = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    `
    const inputWrapper = styled.div`
    margin-bottom: 10px;
    `

    const ButtonWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `
    const Button = styled.button`
    width:200px; 
    margin-top:10px;
    margin-bottom:30px;
    padding:15px;
    font-size:18px;
    border:1px solid black;
    `
    const Input = styled.input`
    width:300px; 
    padding:5px;
    font-size:20px;
    border:1px solid black;
    `


    return (
        <div>
            <Title>Sign Up</Title>
            <form onSubmit={handleSubmit}>
                <Wrap>
                    <div>
                        <label htmlFor='email'>E-mail</label>
                        <Input
                            onChange={e => setEmail(e.target.value)}
                            name='email' 
                            type='email' 
                            id='email' 
                            placeholder='Email' 
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <Input 
                            onChange={e => setPassword(e.target.value)}
                            name='password' 
                            type='password' 
                            id='password' 
                            placeholder='Password' 
                        />
                    </div>
                    <div>
                        <label htmlFor='name'>name</label>
                        <Input 
                            onChange={e => setName(e.target.value)}
                            name='name' 
                            type='name' 
                            id='name' 
                            placeholder='name' 
                        />
                    </div> 
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
