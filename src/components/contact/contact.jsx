import React, { Component } from 'react';
import "./contact.css";
import { Link } from "react-router-dom";
import Preview from "../preview/preview";
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {motion} from "framer-motion";


class Contact extends Component {
    state = {
        contactDetails : this.props.contactDetails,
        experience: false,
        educationDetails: this.props.educationDetails,
        skillDetails: this.props.skillDetails,
        experienceDetails: this.props.experienceDetails

    }
    // componentWillReceiveProps(newProps) {
    //     console.log("inside recieveProps", newProps);
    //     this.setState({
    //         fname: newProps.contactDetails.fname,
    //         lname: newProps.contactDetails.lname,
    //         pSummary: newProps.contactDetails.pSummary,
    //         email: newProps.contactDetails.email,
    //         phone: newProps.contactDetails.phone,
    //         hNo: newProps.contactDetails.hNo,
    //         street: newProps.contactDetails.street,
    //         city: newProps.contactDetails.city,
    //         pin: newProps.contactDetails.pin,
    //         state: newProps.contactDetails.state,
    //         country: newProps.contactDetails.country
    //     })
    // }
    onNextHandler = () => {
        console.log(this.state.contactDetails);
        this.props.updateContactDetails(this.state.contactDetails);
        this.props.history.push("/education");
    }
    onChangeHandler = (e) => {
        let id = e.target.id;
        this.setState({
            contactDetails: {...this.state.contactDetails, [id]: e.target.value}
        })
    }
    render() {
        return (
            <div className="contact">
                <div class="ocean">
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div className="contact-inner">
                        <div className="contact-details">
                            <h2>Contact Details</h2>
                            <motion.div className="contact-details-inner"
                                initial={{opacity:0}}
                                animate={{opacity:1, rotate:-360}}
                                transition={{duration:2}}
                            >
                                <div className="contact-details-firstname">
                                    <TextField id="fname" value={this.state.contactDetails.fname} onChange = {(e) => {this.onChangeHandler(e)}} label="First Name" variant="outlined" />
                                </div>
                                <div className="contact-details-lastname">
                                    <TextField id="lname" value={this.state.contactDetails.lname}  onChange = {(e) => {this.onChangeHandler(e)}}  label="Last Name" variant="outlined" />
                                </div>
                                <div className="contact-details-summary">
                                          <TextField id="pSummary" value={this.state.contactDetails.pSummary}  onChange = {(e) => {this.onChangeHandler(e)}}  label="Proffessional Summary" variant="outlined" />
                                </div>
                                <div className="contact-details-email">
                                          <TextField id="email" value={this.state.contactDetails.email}  onChange = {(e) => {this.onChangeHandler(e)}}  label="E-Mail" variant="outlined" />
                                </div>
                                <div className="contact-details-phone">
                                          <TextField id="phone" value={this.state.contactDetails.phone}  onChange = {(e) => {this.onChangeHandler(e)}}  label="Phone" variant="outlined" />
                                </div>
                                <div className="contact-details-profession">
                                          <TextField id="hNo" value={this.state.contactDetails.hNo}  onChange = {(e) => {this.onChangeHandler(e)}}  label="House Number" variant="outlined" />
                                </div>
                                <div className="contact-details-street">
                                          <TextField id="street" value={this.state.contactDetails.street}  onChange = {(e) => {this.onChangeHandler(e)}}  label="Street" variant="outlined" />
                                </div>
                                <div className="contact-details-city">
                                          <TextField id="city" value={this.state.contactDetails.city}  onChange = {(e) => {this.onChangeHandler(e)}}  label="City" variant="outlined" />
                                </div>
                                <div className="contact-details-state">
                                          <TextField id="state" value={this.state.contactDetails.state}  onChange = {(e) => {this.onChangeHandler(e)}}  label="State" variant="outlined" />
                                </div>
                                <div className="contact-details-pincode">
                                          <TextField id="pin" value={this.state.contactDetails.pin}  onChange = {(e) => {this.onChangeHandler(e)}}  label="Pin Code" variant="outlined" />
                                </div>
                                <div className="contact-details-country">
                                          <TextField id="country" value={this.state.contactDetails.country}  onChange = {(e) => {this.onChangeHandler(e)}}  label="Country" variant="outlined" />
                                </div>
                                <div className="contact-details-inner-button">
                                    <Button variant="contained" color="primary"  onClick={() => this.onNextHandler()}>
                                        Next Page
                                    </Button>
                                    <Link to="/resume-templates">
                                    <Button variant="contained" color="primary">
                                        Go Back
                                    </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                        <div className="contact-preview">
                            <h2>Preview</h2>
                            <Preview skinCode = {this.props.skinCode} contact={true} contactDetails={this.state.contactDetails} educationDetails={this.props.educationDetails} experienceDetails={this.props.experienceDetails}  experienceDetailsLocal={undefined}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contactDetails: state.contactDetails,
        educationDetails: state.educationDetails,
        experienceDetails: state.experienceDetails,
        skinCode: state.document.skinCode
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateContactDetails: (contactDetails) => { dispatch( { type: "UPDATE_CONTACT", contactDetails: contactDetails }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);