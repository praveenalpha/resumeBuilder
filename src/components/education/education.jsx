import React, { Component } from 'react';
import "./education.css";
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {motion} from "framer-motion";
import Preview from '../preview/preview';
import { Link } from "react-router-dom";

class Education extends Component {
    state = {
        educationDetails: this.props.educationDetails,
        contactDetails: this.props.contactDetails,
        experience: false,
        experienceDetails: this.props.experienceDetails,
        skillOne: this.props.educationDetails.one,
        skillTwo: this.props.educationDetails.two,
        skillThree: this.props.educationDetails.three,
        skillOneName :"",
        skillTwoName: "",
        skillThreeName: ""
    }
    addSkillOneHandler = () => {
        this.setState({
            educationDetails: {
                ...this.state.educationDetails,
                one: [...this.state.educationDetails.one, this.state.skillOneName]
            },
            skillOneName: "",
        })
    }
    addSkillTwoHandler = () => {
        this.setState({
            educationDetails: {
                ...this.state.educationDetails,
                two: [...this.state.educationDetails.two, this.state.skillTwoName]
            },
            skillTwoName: "",
        })
    }
    addSkillThreeHandler = () => {
        this.setState({
            educationDetails: {
                ...this.state.educationDetails,
                three: [...this.state.educationDetails.three, this.state.skillThreeName]
            },
            skillThreeName: "",
        })
    }
    onChangeHandler = (e) => {
        let id = e.target.id;
        this.setState({
            educationDetails: { ...this.state.educationDetails , [id]: e.target.value }
            
        })
    }
    onChangeSkillHandler = (e) => {
        let id = e.target.id;
        this.setState({
            ...this.state,
            [id] : e.target.value
        })
    }
    onNextHandler = () => {
        this.props.updateEducationDetails(this.state.educationDetails);
        this.props.history.push("/experience")
    }
    componentWillReceiveProps(newProps){
        this.setState({
            cName: newProps.educationDetails.cName,
            cCity: newProps.educationDetails.cCity,
            cCountry : newProps.educationDetails.cCountry,
            degree: newProps.educationDetails.degree,
            yop: newProps.educationDetails.yop,
            skillOne: newProps.educationDetails.one,
            skillTwo: newProps.educationDetails.two,
            skillThree: newProps.educationDetails.three
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
                            <h2>Education And Skills</h2>
                            <motion.div className="contact-details-inner"
                                initial={{opacity:0}}
                                animate={{opacity:1, rotate:-360}}
                                transition={{duration:2}}
                            >
                                <div className="contact-details-summary">
                                    <TextField id="cName" value={this.state.educationDetails.cName} onChange={(e) => {this.onChangeHandler(e)}} label="College Name" variant="outlined" />
                                </div>
                                <div className="contact-details-lastname">
                                    <TextField id="degree" value={this.state.educationDetails.degree} onChange={(e) => {this.onChangeHandler(e)}}  label="Degree" variant="outlined" />
                                </div>
                                <div className="contact-details-firstname">
                                    <TextField id="cCity" value={this.state.educationDetails.cCity}  onChange={(e) => {this.onChangeHandler(e)}}  label="College City" variant="outlined" /> 
                                </div>
                                <div className="contact-details-email">
                                    <TextField id="cCountry" value={this.state.educationDetails.cCountry}  onChange={(e) => {this.onChangeHandler(e)}}  label="College Country" variant="outlined" />
                                </div>
                                <div className="contact-details-profession">
                                    <TextField id="yop" value={this.state.educationDetails.yop}  onChange={(e) => {this.onChangeHandler(e)}}  label="Year Of Passing" variant="outlined" />
                                </div>
                                <div className="contact-details-profession skills">
                                    
                                    <div className="contact-details-profession-inner">
                                        <TextField id="skillOneName" label="Skill (Excellent)" variant="outlined"  value = {this.state.skillOneName} onChange={(e) => this.onChangeSkillHandler(e)} />
                                        <Button variant="contained" color="primary"  onClick = {() => this.addSkillOneHandler()}>
                                            +
                                        </Button>
                                    </div>
                                </div>
                                <div className="contact-details-profession skills">
                                    <div className="contact-details-profession-inner">
                                    <TextField id="skillTwoName" label="Skill (Intermediate)" variant="outlined"  value = {this.state.skillTwoName} onChange={(e) => this.onChangeSkillHandler(e)} />
                                        <Button variant="contained" color="primary"  onClick = {() => this.addSkillTwoHandler()}>
                                            +
                                        </Button>
                                    </div>
                                </div>
                                <div className="contact-details-profession skills">
                                    <div className="contact-details-profession-inner">
                                    <TextField id="skillThreeName" label="Skill (Basics)" variant="outlined"  value = {this.state.skillThreeName} onChange={(e) => this.onChangeSkillHandler(e)} />
                                        <Button variant="contained" color="primary"  onClick = {() => this.addSkillThreeHandler()}>
                                            +
                                        </Button>
                                    </div>
                                </div>
                                <div className="contact-details-inner-button">
                                    <Button variant="contained" color="primary" onClick = {() => this.onNextHandler()}>
                                        Next Page
                                    </Button>
                                    <Link to="/contact">
                                        <Button variant="contained" color="primary">
                                            Go Back
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                        <div className="contact-preview">
                            <h2>Preview</h2>
                            <Preview  skinCode = {this.props.skinCode} contact={true} contactDetails={this.props.contactDetails} educationDetails={this.state.educationDetails} experienceDetails={this.props.experienceDetails} experienceDetailsLocal={undefined}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{ 
        contactDetails: state.contactDetails,
        educationDetails: state.educationDetails,
        experienceDetails: state.experienceDetails,
        skinCode: state.document.skinCode
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateEducationDetails: (educationDetails) => { dispatch({ type: "UPDATE_EDUCATION", educationDetails: educationDetails })}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Education);