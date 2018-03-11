import React, { Component } from 'react';
import fire from './fire';
import logo from './../logo.png';


class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            fname: '',
            lname: '',
            username: '',
            email: '',
            password: '',
            cpassword: '',
            submitted: false,
            clicked: false
        }
    }

    handleSubmit(e) {
        if (this.refs.text.value === '' || this.refs.etext.value === '' || this.refs.password.value === '' || this.refs.cpassword.value === '' || this.refs.ftext.value === '' || this.refs.ltext.value === '') {
            alert("Enter Details");
        }
        else {
            this.setState({
                username: this.refs.text.value,
                firstname: this.refs.ftext.value,
                lastname: this.refs.ltext.value,
                email: this.refs.etext.value,
                password: this.refs.password.value,
                cpassword: this.refs.cpassword.value,
                submitted: true
            }, function () {
                let user = {
                    username: this.state.username, password: this.state.password, cpassword: this.state.cpassword,
                    firstname: this.state.firstname, lastname: this.state.lastname, email: this.state.email
                };
                // console.log('here: '+user.username);
                fire.database().ref('users').push(user);
                this.refs.text.value = '';;
                this.refs.ftext.value = '';
                this.refs.ltext.value = '';
                this.refs.etext.value = '';
                this.refs.password.value = '';
                this.refs.cpassword.value = '';
                alert("User Signed up successfully!! Let's Chat");
            });
        }
        e.preventDefault();
    }

    handleSubmit2(e) {
        this.setState({ clicked: true });
        e.preventDefault();
    }


    render() {
        return (

            <div className="login-form">
                <img className="login-form-logo" src={logo} alt="signup logo" />
                <p className="form-title">Sign Up to ConnectUs Account</p>
                <form className="form-signin" onSubmit={this.handleSubmit.bind(this)}>
                    <span id="reauth-email" className="reauth-email"></span>
                    <input type="text" ref="text" id="inputUsername" className="form-control" placeholder="Username" required autoFocus />
                    <input type="text" ref="ftext" id="inputFirstname" className="form-control" placeholder="First Name" required autoFocus />
                    <input type="text" ref="ltext" id="inputLastname" className="form-control" placeholder="Last Name" required autoFocus />
                    <input type="email" ref="etext" id="inputEmail" className="form-control" placeholder="Email" required autoFocus />
                    <input type="password" ref="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    <input type="password" ref="cpassword" id="inputCPassword" className="form-control" placeholder="Confirm Password" required />

                    <input className="btn btn-block btn-signin" type="submit" value="Sign Up" />
                </form>
            </div>
        );
    }
}

export default SignUpForm;