import React from "react";
import '../styles.css';
import tempLogo from '../../../images/logo512.png';


const usernames = ["username"]

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = { username: "", password: "" };
    }

    usernameChangeHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    passwordChangeHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    handleClick(event) {
        event.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);
        if (this.state.username === "") {
            alert("Please enter a username.");
        }
        else if (this.state.password === "") {
            alert("Please enter a password");
        }
        else if (usernames.includes(this.state.username)) {
            alert("User is already registered!")

        } else {
            usernames.push(this.state.username)
            alert("You are now registered.");
        }
    }

    render() {
        return (
            <div>
                <form className="login-form">
                    <img id="login-logo" src={tempLogo} alt={"tempLogo"} />
                    <h1>Welcome!</h1>
                    <div className="form-block">
                        <label>Username:</label><br />
                        <input type="text" id="fusername" name="fusername" onChange={this.usernameChangeHandler}></input><br />
                    </div>
                    <div className="form-block">
                        <label>Password: </label><br />
                        <input type="text" id="fpassword" name="fpassword" onChange={this.passwordChangeHandler}></input><br />
                    </div>
                    <button id="btn-login" onClick={(event) => this.handleClick(event)}>Submit</button><br />
                    <p>Already have an account? Click here to login!</p><br />
                </form>
            </div>
        )
    }
}

export default Register