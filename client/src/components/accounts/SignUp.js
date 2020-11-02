import React from 'react'
import {NavLink} from 'react-router-dom';
import './accounts.css'

function SignUp() {
    return (
        <div className='signUp-page'>
            <div className="container d-flex flex-column justify-content-center align-items-end h-100">
                <div className="form-group w-100" style={{maxWidth:"300px"}}>
                    <h3 className="text-white lead">Name</h3>
                    <input type="text"
                        style={{borderLeft: "1px solid white", borderRight: "1px solid rgba(255,255,255,.2)"}} className="form-control bg-black text-white lead" name="" id="" aria-describedby="helpId" placeholder="Rohan Punjani" />
                    <br/>
                    <h3 className="text-white lead">Email</h3>
                    <input type="text"
                        style={{borderLeft: "1px solid white", borderRight: "1px solid rgba(255,255,255,.2)"}} className="form-control bg-black text-white lead" name="" id="" aria-describedby="helpId" placeholder="rohan@gmail.com " />
                    <br/>
                    <h3 className="text-white lead">Password</h3>
                    <input type="password"
                        style={{borderLeft: "1px solid white", borderRight: "1px solid rgba(255,255,255,.2)"}} className="form-control bg-black text-white lead" name="" id="" aria-describedby="helpId" placeholder="***********" />
                    <br/>
                    <button type="button" className="btn bg-black login-btn">Register</button>&nbsp;&nbsp;
                    <NavLink type="button" to="/login" className="btn bg-black login-btn">Login</NavLink>
                </div>
            </div>
        </div>
    )
}

export default SignUp
