import React, { Component } from 'react';
import "./experience.css";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import Preview from '../preview/preview';


class Experience extends Component {
    state = {
        contactDetails: this.props.contactDetails,
        educationDetails: this.props.educationDetails,
        experienceDetails: this.props.experienceDetails,
        experienceDetailsLocal: {
            cmName: "",
            sMonth: "",
            sYear: "",
            eMonth: "",
            eYear: "",
            descriptionTemp: "",
            description: [],
            designation: "",
        },
        experience: true
    }
    onNextHandler = () => {
        
        this.props.addExperience(this.state.experienceDetailsLocal);
        this.props.history.push("/final");
    }
    onChangeHandler = (e) => {
        let id = e.target.id;
        this.setState({
            ...this.state,
            experienceDetailsLocal: { ...this.state.experienceDetailsLocal, [id]: e.target.value }

        })
    }
    addDescriptionHandler = () => {
        this.setState({
            ...this.state,
            experienceDetailsLocal: {
                ...this.state.experienceDetailsLocal,
                description: [...this.state.experienceDetailsLocal.description, this.state.experienceDetailsLocal.descriptionTemp],
                descriptionTemp: ""
            }

        })
    }
    addExperienceHandler = () => {
        console.log("inside addExperienceHandler")
        
        this.props.addExperience(this.state.experienceDetailsLocal);
    }
    componentWillReceiveProps(props){
        console.log("props have updated", props)
        this.setState({
            ...this.state,
            experienceDetails: this.props.experienceDetails,
            experienceDetailsLocal: {
                cmName: "",
                sMonth: "",
                sYear: "",
                eMonth: "",
                eYear: "",
                descriptionTemp: "",
                description: [],
                designation: "",
            }
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
                            <h2>Experience Details</h2>
                            <div className="contact-details-inner">
                                <div className="contact-details-lastname">
                                    <TextField id="cmName" value={this.state.experienceDetailsLocal.cmName} onChange={(e) => this.onChangeHandler(e)} label="Company Name" variant="outlined" />
                                </div>
                                <div className="contact-details-firstname">
                                    <TextField id="designation" value={this.state.experienceDetailsLocal.designation}  onChange={(e) => this.onChangeHandler(e)} label="Designation" variant="outlined" />
                                </div>
                                <div className="contact-details-email">
                                    <TextField id="sMonth" value={this.state.experienceDetailsLocal.sMonth}  onChange={(e) => this.onChangeHandler(e)} label="Start Month" variant="outlined" />
                                </div>
                                <div className="contact-details-street">
                                    <TextField id="sYear" value={this.state.experienceDetailsLocal.sYear}  onChange={(e) => this.onChangeHandler(e)} label="Start Year" variant="outlined" />
                                </div>
                                <div className="contact-details-profession">
                                    <TextField id="eMonth" value={this.state.experienceDetailsLocal.eMonth}  onChange={(e) => this.onChangeHandler(e)} label="End Month" variant="outlined" />
                                </div>
                                <div className="contact-details-phone">
                                    <TextField id="eYear" value={this.state.experienceDetailsLocal.eYear}  onChange={(e) => this.onChangeHandler(e)} label="End Year" variant="outlined" />
                                </div>
                                <div className="contact-details-phone descriptionTemp">
                                    <TextField id="descriptionTemp" value={this.state.experienceDetailsLocal.descriptionTemp} onChange={(e) => this.onChangeHandler(e)} label="Description" variant="outlined" />
                                    <Button variant="contained" color="primary" onClick={() => this.addDescriptionHandler()} >
                                       Save And Add Description
                                    </Button>
                                </div>
                                <div className="contact-details-inner-button">
                                    <Button variant="contained" color="primary" onClick={() => this.addExperienceHandler()}  >
                                        Add Experience
                                    </Button>
                                    <Button variant="contained" color="primary" onClick={() => this.onNextHandler()}>
                                        Next Page
                                    </Button>
                                    <Link to="/education">
                                        <Button variant="contained" color="primary">
                                            Go Back
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="contact-preview">
                            <h2>Preview</h2>
                            <Preview skinCode={this.props.skinCode} contact={true} contactDetails={this.state.contactDetails} educationDetails={this.props.educationDetails} experienceDetails={this.props.experienceDetails} experienceDetailsLocal={this.state.experienceDetailsLocal} />
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
    console.log("experience mapdispatch")
    return {
        addExperience: (experienceDetails) => { dispatch({ type: "UPDATE_EXPERIENCE", experienceDetails: experienceDetails }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Experience);