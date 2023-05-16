import { useState } from "react";
import { NavigationTop } from "../../components"
import "./login-page.css";
import axios from "axios";
import { useAuth } from "../../context/auth-context";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function LoginPage() {

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    function handleEmailInput(email) {
        setUser(prev => ({ ...prev, email: email }))
    }

    function handlePasswordInput(password) {
        setUser(prev => ({ ...prev, password: password }))
    }

    async function loginHandler() {
        try {
            //send login credentials to server
            const response = await axios.post(`/api/auth/login`, {
                email: user.email,
                password: user.password
            })

            //responseFromServerCheck()
            //if loggedIn, setIsLoggedIn to true and navigate to were you came from
            if (response?.request?.status === 200) {
                console.log("I am in: isLoggedIn inside - ", isLoggedIn)

                localStorage.setItem("userSignedInStatus", true);
                setIsLoggedIn(prev => prev = true);
                navigate(location?.state?.from?.pathname, {replace: true})
            }

            // save encodedToken in localstorage, used in accessing private routes
            localStorage.setItem("token", response?.data?.encodedToken)

        } catch (error) {
            console.log("err is: ", error)
        }

    }

    const guest = {
        email: "abhijit@gmail.com",
        password: "abhijit",
    };

    async function guestLoginHandler(){
        try {
            //send login credentials to server
            const response = await axios.post(`/api/auth/login`, {
                email: guest.email,
                password: guest.password
            })

            //responseFromServerCheck()
            //if loggedIn, setIsLoggedIn to true and navigate to were you came from
            if (response?.request?.status === 200) {
                console.log("I am in: isLoggedIn inside - ", isLoggedIn)

                localStorage.setItem("userSignedInStatus", true);
                setIsLoggedIn(prev => prev = true);
                navigate(location?.state?.from?.pathname, {replace: true})
            }

            // save encodedToken in localstorage, used in accessing private routes
            localStorage.setItem("token", response?.data?.encodedToken)

        } catch (error) {
            console.log("err is: ", error)
        }
    }


    return (
        <>
            <NavigationTop />
            <div className="login-wrapper">
                <h3>Login</h3>

                <div className="input-div">
                    <label >Email</label>
                    <input
                        type="email"
                        value={user.email}
                        onChange={(e) => handleEmailInput(e.target.value)}
                    />
                    <label >Password</label>
                    <input
                        type="password"
                        value={user.password}
                        onChange={(e) => handlePasswordInput(e.target.value)}
                    />
                </div>

                <div className="checkbox-div">
                    <label className="checkbox-label" for="checkbox">
                        <input className="vertical-align-checkbox" type="checkbox" id="checkbox" />
                        <span>Remember me</span>
                    </label>
                    <a href="#">Forgot Password?</a>
                </div>

                <div className="login-div">
                    <button
                        onClick={loginHandler}
                    >Login</button>

                    <button
                        onClick={guestLoginHandler}
                    >Guest Login</button>
                    <Link to="/signup">Create New Account - </Link>
                </div>
            </div>
        </>
    )
}