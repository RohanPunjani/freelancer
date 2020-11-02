import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import './accounts.css'
import axios from 'axios'

function FreeSignUp() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        profession: '',
        password: ''
    });
    const [errors, setErrors] = useState('');

    const Register = () => {
        axios.post(process.env.API_URL + '/freelancer/register', user)
            .then(response => {
                console.log(response.data.data.user)
                sessionStorage.setItem('token', response.data.data.token)
            })
            .catch(err => {
                setErrors(err.response.data.msg)
            });
    }
    return (
        <div className='signUp-page'>
            <div className="container d-flex flex-column justify-content-center align-items-end h-100">
                <div className="form-group w-100" style={{maxWidth:"300px"}}>
                    {errors ? <div className="p-2 bg-danger border-0 text-white">{errors}</div> : null}
                    <br/>
                    <h3 className="text-white lead">Name</h3>
                    <input type="text"
                        style={{borderLeft: "1px solid white", borderRight: "1px solid rgba(255,255,255,.2)"}} 
                        className="form-control bg-black text-white lead" 
                        name="name" 
                        id="name" 
                        onChange={e => 
                            {
                                setErrors('')
                                setUser({...user, name: e.target.value})
                            }
                        }
                        placeholder="Rohan Punjani" />
                    <br/>
                    <h3 className="text-white lead">Email</h3>
                    <input type="text"
                        style={{borderLeft: "1px solid white", borderRight: "1px solid rgba(255,255,255,.2)"}} 
                        className="form-control bg-black text-white lead" 
                        name="email" 
                        id="email" 
                        onChange={e => 
                            {
                                setErrors('')
                                setUser({...user, email: e.target.value})
                            }
                        }
                        placeholder="rohan@gmail.com " />
                    <br/>
                    <h3 className="text-white lead">Profession Title</h3>
                    <input type="text"
                        style={{borderLeft: "1px solid white", borderRight: "1px solid rgba(255,255,255,.2)"}} 
                        className="form-control bg-black text-white lead" 
                        name="profession" 
                        id="profession" 
                        onChange={e => 
                            {
                                setErrors('')
                                setUser({...user, profession: e.target.value})
                            }
                        }
                        placeholder="Data Scientist" />
                    <br/>
                    <h3 className="text-white lead">Password</h3>
                    <input type="password"
                        style={{borderLeft: "1px solid white", borderRight: "1px solid rgba(255,255,255,.2)"}} 
                        className="form-control bg-black text-white lead" 
                        name="password" 
                        id="password" 
                        onChange={e => 
                            {
                                setErrors('')
                                setUser({...user, password: e.target.value})
                            }
                        }
                        placeholder="***********" />
                    <br/>
                    <button type="button" className="btn bg-black login-btn" onClick={Register}>Register</button>&nbsp;&nbsp;
                    <NavLink type="button" to="/login" className="btn bg-black login-btn">Login</NavLink>
                </div>
            </div>
        </div>
    )
}

export default FreeSignUp
