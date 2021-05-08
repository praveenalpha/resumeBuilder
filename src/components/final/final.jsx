import React, { Component } from 'react';

import "./final.css";
import Particles from "../ParticleFinal";
import {motion} from "framer-motion";
import { connect } from "react-redux";
import { finalAction } from "../actions/finalAction";
import FinalPreview from '../final-preview/finalPreview';
import FinalTemplates from '../final-templates/final-templates';

class Final extends Component {
  state = {

  }
  editContactHandler = () => {
    this.props.history.push("/contact");
  }
  editEducationHandler = () => {
    this.props.history.push("/education");
  }
  editExperienceHandler = () => {
    this.props.history.push("/experience");
  }
  
  saveAndDownloadHandler = () => {
    this.props.sendDetailsToFirestore(this.props.contactDetails, this.props.educationDetails, this.props.experienceDetails, this.props.auth.uid);
    console.log("saveAndDownload");
  }
  mouseEnterHandler = (e) => {
    let id = e.target.id;
    this.setState({
      [id]: true
    })
  }
  mouseLeaveHandler = (e) => {
    let id = e.target.id;
    this.setState({
      [id]: false
    })
  }
  handleSkinChange = (e) => {
    console.log("inside final", e.target.id);
    this.props.changeSkinCode(e.target.id);
  }
  render() {
    
    return (
      <div className="final-page">
        <Particles />
        <Particles />
        <Particles />

        <motion.div className="final-container"
          initial={{y:'-100vh', opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{
            delay:1,
            duration:1,
            type:'spring',
            stiffness: 150
          }}
        >
          <FinalPreview skinCode = {this.props.skinCode}  contact={false} contactDetails={this.props.contactDetails} educationDetails={this.props.educationDetails} experienceDetails={this.props.experienceDetails}  />

          
          <div className="final-right">
            <FinalTemplates />
            
          </div>
        </motion.div>
      </div>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    contactDetails : state.contactDetails,
    educationDetails: state.educationDetails,
    experienceDetails: state.experienceDetails,
    auth: state.auth,
    skinCode: state.document.skinCode
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendDetailsToFirestore : (contactDetails, educationDetails, experienceDetails, uid) => {dispatch(finalAction(contactDetails, educationDetails, experienceDetails, uid))},
    changeSkinCode: (skinCode) => {dispatch({type: "CHANGE_SKIN", skinCode: skinCode})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Final);