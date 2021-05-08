import React, { Component } from 'react';
import F from '../f';
import "./aboutus.css";
import {motion} from "framer-motion";

class Aboutus extends Component {
    state = {  }
    render() { 
        return ( 
            <motion.div className="aboutus"
                initial={{opacity: 0}}
                animate={{opacity:1}}
                transition={{duration:1}}
            >
                <F />
            </motion.div>
        );
    }
}
 
export default Aboutus;
