import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from '../utils/axiosWithAuth';

const initialState = {
  username: '',
  password: '', 
}

const Login = () => {
  const [credentials, setCredentials] = useState(initialState);
  const history = useHistory();
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const changeHandler = (evt) => {
    evt.preventDefault();
    const {name, value} = evt.target;
    console.log(name, value, "NM VALUE")
    setCredentials({
      ...credentials,
      [name]: value
    })

    console.log(credentials, "CREDENTIALS POST SETTTING");
  }

  const submitHandler = (evt) => {
    evt.preventDefault();
    axiosWithAuth()
      .post('/api/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        history.push('/protected');
      })
      .catch(err => {
        alert(err)
      })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={submitHandler}>
        <input
        type='text'
        name='username'
        placeholder='Username'
        value={credentials.username}
        onChange={changeHandler}
        />

        <input
        type='password'
        name='password'
        placeholder='Password'
        value={credentials.password}
        onChange={changeHandler}
        />

        <button>Login</button>

      </form>
    </>
  );
};

export default Login;