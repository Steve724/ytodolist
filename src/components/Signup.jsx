import React from "react";
import {Link, useNavigate} from "react-router-dom";
import Navigation from "./Navigation";
import {useEffect, useState} from "react";

function Signup(){
    const [items,setItems] = useState([
        {
            username:""
        }
    ]);
    const navigate = useNavigate();
    const [password,setPassword] = useState("");
    const [userInputName,setUserInputName] = useState("");

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    function changeHandler(e){
        let username = e.target.value;
        setItems({username:username});
        setUserInputName(e.target.value);
    }

    function changePasswordHandler(e){
        setPassword(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        let user = "username="+userInputName+"&password="+password;
        fetch('api/signup',{
            method:"POST",
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            body: user
        }).then((res)=>{
            console.log(res);
            if(res.status===404){
                navigate('/signup',{replace:false});
            }else if(res.status===200){
                navigate('/app/today',{replace:false});
            }
        })

    }

    return(
        <div>
            <Navigation/>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={handleSubmit}>
                    {/*<img className="mb-4" src="images/logo.png" alt="" width="80" height="80"/>*/}
                    <h1 className="h3 mb-3 fw-normal">Sign up to Ytodolist!</h1>
                    <input type="email" className="form-control top" id="username" placeholder="username"
                           name="username" onChange={changeHandler} required/>
                    <input type="password" className="form-control middle" id="password" placeholder="password"
                           name="password" onChange={changePasswordHandler} required/>
                    <input type="password" className="form-control bottom" id="confirmPassword" placeholder="confirmPassword"
                           name="confirmPassword" required/>
                    <button className="w-100 btn btn-lg btn-primary btn-danger" type="submit">Sign up</button>
                    <p className="mt-5 mb-3 text-muted">&copy; Chris Website</p>
                </form>
                <Link to="/login">Log in</Link>
            </main>
        </div>

    )
}

export default Signup;