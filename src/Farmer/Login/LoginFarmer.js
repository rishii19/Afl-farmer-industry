import React, { useState, useEffect } from 'react'
import './LoginFarmer.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import LoginProto from './images/LoginProto.svg'
import Afl from './images/AFL.svg'


function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            history("/loginfarmer")
        }
    }, [])


    async function login() {
        console.warn("data", username, password)
        let item = { username, password }
        console.warn(item)
        let result = await fetch("http://localhost:8000/api/login/", {
            method: 'POST',
            headers: {

                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.warn("result", result)
        if (result.id) {
            localStorage.setItem('user', JSON.stringify(result));
            history("/homepagefarmer")
        }
        else {
            alert("Please enter correct details")
        }
    }


    return (
        <div>
            <div className="login_wrapper">
                <div className="left_content">
                    <div className="header_absolute">
                        <div className='divhead'>Don't have an Account?</div>
                        <Link to="/signupfarmer">
                        <button  type="button"className="btn btn-outline-primary btn-lg">Sign Up</button>
                        </Link>
                    </div>
                    <img src={LoginProto}></img>
                </div>
                <div className="right_content">
                    <div className="signuptext">
                        Login in to your Account
                    </div>
                    <div className="signin_form">
                        <form>
                            <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} className='form-control' />
                            <br />
                            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' />
                            <br />
                            <button type="button" onClick={login} className='btn btn-primary'>Login</button>
                        </form>
                    </div>
                    <div className="other_opts">
                        <div className="small_screen_signup">
                            Don’t have an account?{" "}
                            <Link to="signupfarmer">
                                <u>Sign Up</u>
                            </Link>
                        </div>
                        <div className="other_opts_opts">
                            <div className="afl" tabIndex={1} style={{ marginLeft: '40%' }}>
                                <img src={Afl}></img>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Login