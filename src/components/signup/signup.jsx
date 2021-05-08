import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./signup.css";
import { connect } from 'react-redux';
import { signupAction } from '../actions/signupAction';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Signup extends Component {
    state = {
        email: "",
        pw: "",
        fname: "",
        lname: ""
    }
    onChangeHandler = (e) => {
        let id = e.target.id;
        let value = e.target.value;
        this.setState({
            [id]: value
        })
    }
    onSubmit = () => {
        let userInfo = {
            email: this.state.email,
            fname: this.state.fname,
            lname: this.state.lname,
            pw: this.state.pw
        };
        this.props.signupUser(userInfo);
        this.props.history.push("/");
    }
    render() {
        return (<>
            <div id="Clouds">
                <div class="Cloud Foreground"></div>
                <div class="Cloud Background"></div>
                <div class="Cloud Foreground"></div>
                <div class="Cloud Background"></div>
                <div class="Cloud Foreground"></div>
                <div class="Cloud Background"></div>
                <div class="Cloud Background"></div>
                <div class="Cloud Foreground"></div>
                <div class="Cloud Background"></div>
                <div class="Cloud Background"></div>
                <svg viewBox="0 0 40 24" class="Cloud"><use xlinkHref="#Cloud"></use></svg>
            </div>
            <div className="signup">
            <TextField id="fname" value = {this.state.fname} onChange={(e) => {this.onChangeHandler(e)}} label="First Name" variant="filled" />
            <TextField id="lname" value = {this.state.lname} onChange={(e) => {this.onChangeHandler(e)}}   label="Last Name" variant="filled" />
            <TextField id="email" value = {this.state.email} onChange={(e) => {this.onChangeHandler(e)}}   label="Email" variant="filled" />
            <TextField id="pw" value = {this.state.pw} onChange={(e) => {this.onChangeHandler(e)}}   label="Password" variant="filled" />
            <Button onClick={() => {this.onSubmit()}} variant="contained">Sign Up</Button>
            </div>
        </>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signupUser: (userInfo) => { dispatch(signupAction(userInfo)) }
    }
}
export default connect(null, mapDispatchToProps)(Signup);