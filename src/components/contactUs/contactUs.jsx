import React, { Component } from 'react';
import F from '../f';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaMailBulk } from "react-icons/fa";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import "./contactUs.css";
import { motion } from "framer-motion";
import { withTheme } from 'styled-components';

class ContactUs extends Component {
    state = {
        name: "",
        email: "",
        message: ""
    }
    onChangeHandler = (e) => {
        let id = e.target.id;
        this.setState({
            [id] : e.target.value
        })
    }
    onSubmitHandler = (e)=>{
        // e.prevenDefault();
        console.log("on submit handler()")
        emailjs.sendForm(
            'secret_ID1',
            'secret_ID2',
            '.credit',
            'secret_ID3'
        ).then( obj => {
            console.log("sent email")
        }).catch(err => {
            console.log("error occured")
        })

    }
    render() {
        
        return (
            <div className="contact-us">
                <div class="cow-container">
                    <div class="cow-body">
                        <div class="head">
                            <div class="astronaut-helmet">
                                <div class="glare"></div>
                            </div>
                            <div class="cow-head">
                                <div class="eyes">
                                    <div class="eye left"></div>
                                    <div class="eye right"></div>
                                </div>

                                <div class="spot"></div>

                                <div class="nose">
                                    <div class="nostrils">
                                        <div class="nostril left"></div>
                                        <div class="nostril right"></div>
                                    </div>
                                </div>

                                <div class="horns">
                                    <div class="horn left"></div>
                                    <div class="horn right"></div>
                                </div>

                                <div class="ears">
                                    <div class="ear left"></div>
                                    <div class="ear right"></div>
                                </div>
                            </div>
                        </div>
                        <div class="body-spot"></div>
                        <div class="legs">
                            <div class="leg left">
                                <div class="hoof"></div>
                            </div>
                            <div class="leg right">
                                <div class="hoof"></div>
                            </div>
                        </div>
                        <div class="tail"></div>
                    </div>
                </div>

                {/* <div > */}
                    <form action="" class="credit">
                        <TextField id="name" label="Your Name" name="name" variant="outlined" onChange = {(e) => {this.onChangeHandler(e)}}/>
                        <TextField id="email" label="Your Email" name = "email" variant="outlined" onChange = {(e) => {this.onChangeHandler(e)}} />
                        <TextField id="message" label="Your Message" name = "message" variant="outlined" onChange = {(e) => {this.onChangeHandler(e)}} />
                        <Button variant="contained" color="primary" onClick = {(e) => {this.onSubmitHandler(e)}}>
                            Send Mail
                        </Button>
                    </form>

                {/* </div> */}

            </div>
        );
    }
}

export default ContactUs;