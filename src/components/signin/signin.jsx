import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./signin.css";
import { motion } from "framer-motion";
import { connect } from 'react-redux';
import { signinAction } from '../actions/signinAction';

class Signin extends Component {
    state = {
        id: "",
        pw: ""
    }
    onChangeHandler = (e) => {
        let id = e.target.id;
        let value = e.target.value;
        this.setState({
            ...this.state,
            [id]: value
        })
    }
    onClickHandler = () => {
        let userDetails = {
            id: this.state.id,
            pw: this.state.pw
        }
        this.props.signInUser(userDetails);
        this.props.history.push("/");
    }
    render() {
        
        return (<>
            <div className="signin">
                <div className="signin-left">
                    <motion.div className="signin-svg-one"
                        initial={{ x: 0 }}
                        animate={{ x: 40 }}
                        transition={{
                            yoyo: Infinity,
                            delay:0,
                            duration:0.5
                        }}
                    >

                    </motion.div>
                    <div className="signin-svg-two">

                    </div>
                </div>
                <div className="signin-right">
                    <motion.div className="signin-one"
                        initial={{ y: '99vh', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{

                            duration: 1,
                            type: 'spring',
                            stiffness: 150,
                            delay: 1
                        }}
                    >
                        <button className="signin-one-1">Sign In</button>
                        <button className="signin-one-2"><Link to="/sign-up">Sign Up</Link></button>
                    </motion.div>
                    <motion.div className="signin-two"
                        initial={{ y: '99vh', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{

                            duration: 1,
                            type: 'spring',
                            stiffness: 150,
                            delay: 2
                        }}
                    >

                        <div className="signin-two-inner">
                            <p className="signin-two-one">Sign In</p>
                            <p className="signin-two-two">or</p>
                            <p className="signin-two-three"><Link to="/sign-up">Sign Up</Link></p>
                        </div>
                    </motion.div>
                    <motion.div className="signin-three"
                        initial={{ y: '99vh', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{

                            duration: 1,
                            type: 'spring',
                            stiffness: 150,
                            delay: 2
                        }}
                    >

                        <div className="signin-three-inside">
                            <label htmlFor="">E-MAIL ADDRESS</label>
                            <input id="id" onChange={(e) => this.onChangeHandler(e)} type="text" placeholder="Enter your email" />
                        </div>
                        <div className="signin-three-inside">
                            <label htmlFor="">PASSWORD</label>
                            <input id="pw" onChange={(e) => this.onChangeHandler(e)} type="text" placeholder="Enter your password" />
                        </div>
                    </motion.div>
                    <motion.div className="signin-five"
                        initial={{ y: '99vh', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{

                            duration: 1,
                            type: 'spring',
                            stiffness: 150,
                            delay: 3
                        }}
                    >
                        <button onClick={() => this.onClickHandler()}>
                            {/* <Link to="/"> */}
                                Sign In
                                    {/* </Link> */}
                        </button>
                        <Link to="/sign-up"><h3>Create an account</h3></Link>
                    </motion.div>
                </div>
            </div>
        </>);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signInUser : (userDetails) => {dispatch(signinAction(userDetails))}
    };
}

export default connect(null, mapDispatchToProps)(Signin);
