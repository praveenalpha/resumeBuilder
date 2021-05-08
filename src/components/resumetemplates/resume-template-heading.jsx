import React from 'react';
import { motion } from "framer-motion";

const ResumeTemplateHeading = () => {
    return ( <motion.div className="templates-upper"
    initial={{x:'100vw'}}
    animate={{x:0}}
    transition={{
        delay:1,
        duration:1
    }}
>
    <h1>Select a resume template to get started </h1>
    <p>You'll be able to edit and change this template later !!</p>
</motion.div> );
}
 
export default ResumeTemplateHeading;