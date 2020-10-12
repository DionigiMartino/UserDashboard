import React, { Component } from 'react';
import LoginStyle from './Login.module.css';
import {ReactComponent as Logo} from '../../assets/img/logo_aicon.svg';

// Importing Hoc

import Hoc from '../../Hoc/Hoc';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            disabled: true,
            userNameInput: '',
            passwordInput: ''
        }
    }

    changeInput(){
        if((this.inputUsername.value.length > 1) && (this.inputPassword.value.length > 1)){
            this.setState({
                disabled: false
            })
        } else {
            this.setState({
                disabled: true
            })
        }

        if(this.inputUsername.value.length > 1){
            this.setState({
                userNameInput: this.inputUsername.value
            })
        } else {
            this.setState({
                userNameInput: ''
            })
        }
        
        if(this.inputPassword.value.length > 1){
            this.setState({
                passwordInput: this.inputPassword.value
            })
        } else {
            this.setState({
                passwordInput: ''
            })
        }
    }

    render(){
        // eslint-disable-next-line
        let classes = [];

        return(
            <Hoc>
                <div className={LoginStyle.cont__login}>
                    <Logo className={LoginStyle.cont__login_icon} />
                    <form className={LoginStyle.cont__login_form} onChange={() => this.changeInput()} onSubmit={(e) => {e.preventDefault()}} >
                        <input ref={a => this.inputUsername = a} name="username" type="text" className={this.state.userNameInput !== '' ? classes = [LoginStyle.cont__login_form_input, LoginStyle.Green].join(' ') : [LoginStyle.cont__login_form_input, LoginStyle.Red].join(' ')} placeholder="Username" />
                        <input ref={a => this.inputPassword = a} name="password" type="password" className={this.state.passwordInput !== '' ? classes = [LoginStyle.cont__login_form_input, LoginStyle.Green].join(' ') : [LoginStyle.cont__login_form_input, LoginStyle.Red].join(' ')} placeholder="Password"/>

                        <input name="submit" type="submit" className={this.state.disabled ? classes = [LoginStyle.cont__login_form_button, LoginStyle.disabled].join(' ') : [LoginStyle.cont__login_form_button] } value="Enter" disabled={this.state.disabled} />
                    </form>
                </div>
            </Hoc>
        )
    }
}

export default Login;