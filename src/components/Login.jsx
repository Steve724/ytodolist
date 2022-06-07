import React from "react";
import {Link} from "react-router-dom";

function Login(){
    return(
        <main className="form-signin w-100 m-auto">
            <form action="/api/login" method="post">
                {/*<img className="mb-4" src="images/logo.png" alt="" width="80" height="80"/>*/}
                    <h1 className="h3 mb-3 fw-normal">Login to Ytodolist!</h1>
                        <input type="email" className="form-control middle" id="username" placeholder="username"
                               name="username" required/>
                            <input type="password" className="form-control bottom" id="password" placeholder="password"
                                   name="password" required/>
                                <button className="w-100 btn btn-lg btn-primary" type="submit">Log in</button>
                                <p className="mt-5 mb-3 text-muted">&copy; Chris Website</p>
            </form>
            <Link to="/signup">sign up</Link>
        </main>
    )
}

export default Login;