import React, { useEffect, useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithRedirect } from "firebase/auth";
import AddLicor from "./add-licor.component";
import "../styles/login.css";

function Login() {

    const [value, setValue] = useState("")
    const handelClick = () => {
        signInWithRedirect(auth, provider).then((data) => {
            setValue(data.user.displayName)
            localStorage.setItem("user", data.user.displayName)
            window.location.reload();
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem('user'))
    }, [])

    return (
        <div>
            {value ? <AddLicor /> :
                <div className="container">
                    <p className="g">Para poder subir imagenes de licores necesitas iniciar sesión:</p>
                    <button class="google-login-button" onClick={handelClick}>
                        <span class="icon"></span>
                        Iniciar sesión con Google
                    </button>
                </div>
            }
        </div>
    )
};

export default Login;
