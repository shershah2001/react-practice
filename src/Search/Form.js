import React, { useState } from 'react';
import './Form.css';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
const Form = () => {
    const [inputValue, setInputValue] = useState({
        username: '',
        email: '',
        number: '',
        password: '',
        confirmPassword: '',

    });
    const [country,setCountry] = useState('us')
    const changeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        console.log(name)
        setInputValue(prev => ({ ...prev, [name]: value }))
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(inputValue)
        setInputValue({
            username: '',
            email: '',
            number: '',
            password: '',
            confirmPassword: '',
        })

    }
    const closureFuct = (password, password_eye) => {
        // return  function(){
        const pass_Input = document.querySelector(`#${password}`);
        const pass_eye = document.querySelector(`#${password_eye}`);
        if (pass_Input.type === "password") {
            pass_Input.type = 'text'
            pass_eye.classList.replace('fa-eye-slash', 'fa-eye')
        } else {
            pass_Input.type = 'password'
            pass_eye.classList.replace('fa-eye', 'fa-eye-slash')
        }
        // }
    }

    return (
        <>
            <div className='d-flex justify-content-center'>
                <form >
                    <label htmlFor="username">username</label>
                    <input type="text"
                        id='username'
                        value={inputValue.username}
                        placeholder='username'
                        className='form-control w-100'
                        onChange={changeHandler}
                        autoComplete='none'
                        name='username'
                    />
                    {/* username */}
                    <label htmlFor="email">Email Address</label>
                    <input type="email"
                        id='email'
                        value={inputValue.email}
                        placeholder='email address'
                        className='form-control  w-100 '
                        onChange={changeHandler}
                        autoComplete='none'
                        name='email'
                    />
                    {/* email */}
                    <label htmlFor="number">mobile number</label>
                    <PhoneInput
                        type="number"
                        id='number'
                        value={inputValue.number}
                        placeholder='enter your number'
                        className='form-control  w-100'
                        onChange={changeHandler}
                        autoComplete='none'
                        name='number'
                        country={'us'}
                    />
                    {/* mobile number */}
                    <label htmlFor="password">password</label>
                    <div className="password">
                        <input type="password"
                            id='password'
                            value={inputValue.password}
                            placeholder='password'
                            className="form-control"
                            onChange={changeHandler}
                            autoComplete='none'
                            name='password'
                        />
                        <i className="fa fa-eye-slash text-primary" id="password_eye" aria-hidden="true" onClick={() => closureFuct('password', 'password_eye')}></i>
                    </div>
                    {/*  password */}
                    <br />
                    <label htmlFor="conformPassword">conformPassword</label>
                    <div className='con_password'>
                        <input type="password"
                            id='conformPassword'
                            value={inputValue.confirmPassword}
                            placeholder='confirm password'
                            className='form-control'
                            onChange={changeHandler}
                            autoComplete='none'
                            name='confirmPassword'
                        />
                        <i className="fa fa-eye-slash text-primary"
                            aria-hidden="true"
                            id='conf_password_eye'
                            onClick={() => closureFuct('conformPassword', 'conf_password_eye')}
                        ></i>
                    </div>
                    {/* confirm password */}
                    <br />
                    <button type='submit' onClick={submitHandler} className="btn btn-primary" >submit</button>
                </form>
            </div>
        </>
    )
}

export default Form
