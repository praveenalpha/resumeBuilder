import React from 'react';
import { Link } from "react-router-dom";
import Skin1 from "../skins/skin1/skin1";
import Skin2 from "../skins/skin2/skin2";
import Skin3 from "../skins/skin3/skin3";
import Skin4 from "../skins/skin4/skin4";
import Skin5 from "../skins/skin5/skin5";
import Skin6 from "../skins/skin6/skin6";
import Skin7 from "../skins/skin7/skin7";
import Skin8 from "../skins/skin8/skin8";
import Button from '@material-ui/core/Button';
import Pdf from 'react-to-pdf';
import {finalAction} from "../actions/finalAction";
import {connect} from "react-redux";

const FinalPreview = (props) => {
    const onClickHandler = () => {
      props.onSave(props.contactDetails, props.educationDetails, props.experienceDetails, props.uid)
      alert("Users Info Saved On Successfully Firebase !!")
    }
    const ref = React.createRef();
    return (
        <React.Fragment>
            <div className="final" ref={ref}>
                {props.skinCode === "one" && <Skin1 contact={false} contactDetails={props.contactDetails} educationDetails={props.educationDetails} experienceDetails={props.experienceDetails}  experienceDetailsLocal={props.experienceDetailsLocal}/>}
                {props.skinCode === "two" && <Skin2 contact={false} contactDetails={props.contactDetails} educationDetails={props.educationDetails} experienceDetails={props.experienceDetails}  experienceDetailsLocal={props.experienceDetailsLocal}/>}
                {props.skinCode === "three" && <Skin3 contact={false} contactDetails={props.contactDetails} educationDetails={props.educationDetails} experienceDetails={props.experienceDetails}  experienceDetailsLocal={props.experienceDetailsLocal}/>}
                {props.skinCode === "four" && <Skin4 contact={false} contactDetails={props.contactDetails} educationDetails={props.educationDetails} experienceDetails={props.experienceDetails}  experienceDetailsLocal={props.experienceDetailsLocal}/>}
                {props.skinCode === "five" && <Skin5 contact={false} contactDetails={props.contactDetails} educationDetails={props.educationDetails} experienceDetails={props.experienceDetails}  experienceDetailsLocal={props.experienceDetailsLocal}/>}
                {props.skinCode === "six" && <Skin6 contact={false} contactDetails={props.contactDetails} educationDetails={props.educationDetails} experienceDetails={props.experienceDetails}  experienceDetailsLocal={props.experienceDetailsLocal}/>}
                {props.skinCode === "seven" && <Skin7 contact={false} contactDetails={props.contactDetails} educationDetails={props.educationDetails} experienceDetails={props.experienceDetails}  experienceDetailsLocal={props.experienceDetailsLocal}/>}
                {props.skinCode === "eight" && <Skin8 contact={false} contactDetails={props.contactDetails} educationDetails={props.educationDetails} experienceDetails={props.experienceDetails}  experienceDetailsLocal={props.experienceDetailsLocal}/>}
            </div>
            <div className="final-right-upper">
              <Button variant="contained" onClick = {() => {onClickHandler()}}>Save Details</Button>
              <Link to="/contact"><Button variant="contained">Edit Contact Details</Button></Link>
              <Link to="/education"><Button variant="contained">Edit Education And Skills</Button></Link>
              <Link to = "/experience"><Button variant="contained" >Edit Experience Details</Button></Link>
              <Pdf targetRef={ref} filename="resume.pdf" scale={0.9}>
                {({ toPdf }) => (
                  <Button variant="contained" id="final-page-long-btn" onClick={toPdf}>Download As pdf</Button>
                )}
              </Pdf>

            </div>
        </React.Fragment>
    );
}
const mapStateToProps = (state) => {
  return {
    uid: state.auth.uid
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSave : (contactDetails, educationDetails, experienceDetails, uid) => {dispatch(finalAction(contactDetails, educationDetails, experienceDetails, uid))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FinalPreview);