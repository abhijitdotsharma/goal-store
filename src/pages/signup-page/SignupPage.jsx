import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { NavigationTop } from "../../components";
import "../login-page/login-page.css";
import { useAuth } from "../../context/auth-context";

export default function SignupPage() {

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const { isLoggedIn, setIsLoggedIn } = useAuth();

    const navigate = useNavigate();

    function handleEmailInput(email){
        setUser(prev => ({...prev, email: email}))
    }

    function handlePasswordInput(password) {
        setUser(prev => ({ ...prev, password: password }))
    }

    async function signupHandler() {
        console.log("signupHandler fired")
        try {
            const response = await axios.post(`/api/auth/signup`, {
                email: user.email,
                password: user.password
            })

            console.log("response signup - ", response)

            if(response?.request?.status === 201){
                console.log("Created signup")

                localStorage.setItem("userSignedInStatus", true)
                setIsLoggedIn(prev => prev = true);
                navigate("/products")
            }
        } catch (error) {
            
        }
    }


    return (
        <>
            <NavigationTop />
            <div className="login-wrapper">
                <h3>Signup</h3>

                <div className="input-div">
                    <label for="">Email</label>
                    <input 
                    type="email" 
                    value={user.email}
                    onChange={(e) => handleEmailInput(e.target.value)}
                    />
                    <label for="">Password</label>
                    <input 
                    type="password" 
                    onChange={(e) => handlePasswordInput(e.target.value)}
                    />
                </div>

                <div className="checkbox-div">
                    <label className="checkbox-label" for="checkbox">
                        <input className="vertical-align-checkbox" type="checkbox" id="checkbox"/>
                        <span>I accept all Terms and Conditions</span>
                    </label>
                </div>

                <div className="login-div">
                    <button
                        onClick={signupHandler}
                    >Create New Account</button>
                    <Link to="/login">Already have an account</Link>
                </div>
            </div>
        </>
    )
}