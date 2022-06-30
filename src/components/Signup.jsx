import React from "react";
import {Link} from "react-router-dom";
import Navigation from "./Navigation";

function Signup(){
    return(
        <div>
            <Navigation/>
            <main className="form-signin w-100 m-auto">
                <form action="/api/signup" method="post">
                    {/*<img className="mb-4" src="images/logo.png" alt="" width="80" height="80"/>*/}
                    <h1 className="h3 mb-3 fw-normal">Sign up to Ytodolist!</h1>
                    <input type="email" className="form-control top" id="username" placeholder="username"
                           name="username" required/>
                    <input type="password" className="form-control middle" id="password" placeholder="password"
                           name="password" required/>
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