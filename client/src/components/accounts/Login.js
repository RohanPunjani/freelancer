import React, {useState} from 'react'
import {NavLink, Redirect} from 'react-router-dom';
import './accounts.css'
import axios from 'axios'

function Login() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState('');
    
    if(sessionStorage.getItem('token')){
        return <Redirect to="/main" />
    }
    
    const login = () => {
        axios.post('http://localhost:5000/api/user/login', user)
            .then(response => {
                console.log(response.data.data.user)
                sessionStorage.setItem('token', response.data.data.token);
                sessionStorage.setItem('userName', response.data.data.user.name);
                return <Redirect to='/main'/>;
            })
            .catch(err => {
                setErrors(err.response.data.msg)
            });
    }
    return (
        <div className='login-page'>
            <div className="container d-flex flex-column justify-content-center h-100">
                <div className="form-group" style={{maxWidth:"300px"}}>    
                    {errors ? <div className="p-2 bg-danger border-0 text-white">{errors}</div> : null}
                    <br/>
                    <h3 className="text-white lead">Email</h3>
                    <input type="text"
                        className="form-control bg-black text-white lead" name="" id="" aria-describedby="helpId" placeholder="rohan@gmail.com " onChange={e=>{setErrors('');setUser({...user, email: e.target.value})}}  />
                    <br/>
                    <h3 className="text-white lead">Password</h3>
                    <input type="password"
                        className="form-control bg-black text-white lead" name="" id="" aria-describedby="helpId" placeholder="***********" onChange={e=> {setErrors('');setUser({...user, password: e.target.value})}} />
                    <br/>
                    <button type="button" onClick={login} className="btn bg-black login-btn">Login</button>&nbsp;&nbsp;
                    <NavLink type="button" to="/signUp" className="btn bg-black login-btn">Register</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Login
