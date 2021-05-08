import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import P from "../p";

import "./landing.css";
import { connect } from 'react-redux';
class Landing extends Component {
    state = {
    }
    render() {
        return (
            <motion.div className="landing"
            // initial={{opacity: 0}}
            // animate={{opacity: 1}}
            >
                <P />
                <div className="landing-img1">

                </div>
                <div className="landing-h1">
                    <motion.h1
                        initial={{ y: '-100vh' }}
                        animate={{ y: 0 }}
                        transition={{ delay: 1, duration: 1, type: 'spring', stiffness: 250 }}
                    >Create A Resume That Stands Out !!
                    </motion.h1>
                </div>
                <div className="landing-h4">
                    <motion.h4
                        initial={{ y: '-100vh' }}
                        animate={{ y: 0 }}
                        transition={{ delay: 2, duration: 1, type: 'spring', stiffness: 250 }}
                    >
                        Create a resume that perfectly describes your skills and job profile.
                    </motion.h4>
                </div>
                <Link to="/resume-templates">
                    <motion.div className="landing-btn"
                        initial={{ y: '-100vh' }}
                        animate={{ y: 0 }}
                        transition={{ delay: 3, type: 'spring', stiffness: 250 }}
                    >
                        <motion.button

                         whileHover={{
                            cursor:'pointer',
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255, 255, 255",
                            boxShadow: "0px 0px 8px rgb(255, 255, 255",
                            transition: {
                                duration: 0.2,
                                yoyo: Infinity
                            }
                        }}
                        >
                            Get Started For Free
                        </motion.button>
                    </motion.div>
                </Link>
                <div className="landing-img">
                    {/* <img src="/resume.png" alt="" /> */}
                </div>
            </motion.div>
        );
    }
}

export default Landing;