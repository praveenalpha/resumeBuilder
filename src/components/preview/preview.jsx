import React from 'react';
import {motion} from "framer-motion";
import Skin1 from "../skins/skin1/skin1";
import Skin2 from "../skins/skin2/skin2";
import Skin3 from "../skins/skin3/skin3";
import Skin4 from "../skins/skin4/skin4";
import Skin5 from "../skins/skin5/skin5";
import Skin6 from "../skins/skin6/skin6";
import Skin7 from "../skins/skin7/skin7";
import Skin8 from "../skins/skin8/skin8";

const Preview = (props) => {
    // console.log(props)
    return (
        <motion.div className="contact-preview-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{ duration: 2 }}
        >
            {props.skinCode === "one" && <Skin1 contact={true} contactDetails={props.contactDetails} educationDetails={props.educationDetails} experienceDetails={props.experienceDetails} experienceDetailsLocal={props.experienceDetailsLocal}/>}
            {props.skinCode === "two" && <Skin2 contact={true} contactDetails={props.contactDetails} educationDetails={props.educationDetails} experienceDetails={props.experienceDetails} experienceDetailsLocal={props.experienceDetailsLocal} />}
            {props.skinCode === "three" && <Skin3 contact={true} contactDetails={props.contactDetails} educationDetails={props.educationDetails} experienceDetails={props.experienceDetails} experienceDetailsLocal={props.experienceDetailsLocal} />}
            {props.skinCode === "four" && <Skin4 contact={true} contactDetails={props.contactDetails} educationDetails={props.educationDetails} experienceDetails={props.experienceDetails} experienceDetailsLocal={props.experienceDetailsLocal} />}
            {props.skinCode === "five" && <Skin5 contact={true} contactDetails={props.contactDetails} educationDetails={props.educationDetails} experienceDetails={props.experienceDetails} experienceDetailsLocal={props.experienceDetailsLocal} />}
            {props.skinCode === "six" && <Skin6 contact={true} contactDetails={props.contactDetails} educationDetails={props.educationDetails} experienceDetails={props.experienceDetails} experienceDetailsLocal={props.experienceDetailsLocal} />}
            {props.skinCode === "seven" && <Skin7 contact={true} contactDetails={props.contactDetails} educationDetails={props.educationDetails} experienceDetails={props.experienceDetails} experienceDetailsLocal={props.experienceDetailsLocal} />}
            {props.skinCode === "eight" && <Skin8 contact={true} contactDetails={props.contactDetails} educationDetails={props.educationDetails} experienceDetails={props.experienceDetails} experienceDetailsLocal={props.experienceDetailsLocal} />}

        </motion.div>
    );
}

export default Preview;