import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import {Link} from "react-router-dom";
export default class Home extends React.Component{
    render() {
        return(
            <div>
                <Navigation/>
                <div className="home-section1">
                    <h1>Organize your<br/>
                        work and life, finally.
                    </h1>
                    <p>
                        Become focused, organized, and calm with YTodolist. The world’s #1 task manager and to-do list app.
                    </p>
                    <button className="btn btn-danger my-2 my-sm-0" type="submit" style={{color:"white"}}><Link to="/signup">Start for free</Link></button>
                </div>
                <div className="container img-paragraph">
                    <div className="row">
                        <div className="col-md-6 ">
                            <img src="https://todoist.com/static/home/features/get-more-done-1008.webp" className="img-left"/>
                        </div>
                        <div className="col-md-6 home-paragraph">
                            <h2>Add your tasks. Organize your life. Achieve more every day.</h2>
                            <p>Add tasks like “Read work emails every day at 10am” to fill your Yto-do list in seconds using
                                Todoist’s powerful natural language recognition and recurring dates.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 home-paragraph">
                            <h2>Reach that mental clarity you’ve been longing for.</h2>
                            <p>Your to-do lists are automatically sorted into Today,
                                Upcoming and custom Filter views to help you focus on your most important things.</p>
                        </div>
                        <div className="col-md-6">
                            <img src="https://todoist.com/static/home/features/clear-your-mind-1008.webp" className="img-right" alt="img-right"/>
                        </div>
                    </div>
                </div>
                <div className="home-foot">
                    <div className="foot-paragraph">
                        <h1>Achieve peace of mind with Todoist</h1>
                        <button className="btn btn-danger my-2 my-sm-0" type="submit" style={{color:"white"}}><Link to="/signup">Start for free</Link></button>
                    </div>
                    <img className="foot-img" src="https://todoist.com/_next/static/images/peace@2x_158f4453627629ae1dd3ec115a559630.webp" alt="foot-img"/>
                </div>
                <Footer/>
            </div>
        )
    }
}