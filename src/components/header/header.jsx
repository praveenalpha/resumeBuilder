import React from 'react';
import { Link } from "react-router-dom"
import "./header.css";
import {motion} from "framer-motion";
import { connect } from 'react-redux';
import { useLocation } from "react-router";



const Header = (props) => {
    const location = useLocation();
    let { auth } = props;
    // console.log(window.location.pathname);
    let clss = location.pathname;
    console.log("header ", clss);
    if(clss === "/final"){
        clss = "header-final";
    }
    else if(clss === "/education" || clss === "/experience" || clss === "/contact" || clss === "/contact-us"){
        clss = "header-change";
    }
    else{
        clss = "header";
    }
    return (<React.Fragment>
        {auth ?
        <motion.div className = {clss}
            initial={{ y: '-100vh' }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 1, type: 'spring', stiffness: 250 }}
        >
                <div className="header-logo">
                    <Link to="/">
                        <i class="fa fa-apple" aria-hidden="true"></i>
                    </Link>
                </div>
                <div className="header-links">
                    <Link className="a" to="/resume-templates">
                        <div className="resume-templates">Resume Templates</div>
                    </Link>
                    <Link className="a" to="/about-us">
                        <div className="about-us">About Us</div>
                    </Link>
                    <Link className="a" to="/contact-us">
                        <div className="about-us">Contact Us</div>
                    </Link>
                    <div className="sign-in" onClick={() => {props.logOut() }}>
                        <Link className="a" to="/">
                            Sign out
                </Link>
                    </div>
                </div>
            </motion.div>
            :
            <motion.div className={clss}
                initial={{ y: '-100vh' }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0, duration: 1, type: 'spring', stiffness: 250 }}
            >
                <div className="header-logo">
                    <Link to="/">
                        <i class="fa fa-apple" aria-hidden="true"></i>
                    </Link>
                </div>
                <div className="header-links">
                    <Link className="a" to="/resume-templates">
                        <div className="resume-templates">Resume Templates</div>
                    </Link>
                    <Link className="a" to="/about-us">
                        <div className="about-us">About Us</div>
                    </Link>
                    <Link to="/sign-up">
                        <div className="register">
                            <button> Sign up
                            </button>
                        </div>
                    </Link>
                    <Link className="a" to="/sign-in">
                        <div className="sign-in">
                            Sign In
                        </div>
                    </Link>
                </div>
            </motion.div>}
    </React.Fragment>);
}


const mapStateToProps = (state)=>{
    return {
        auth: state.auth.auth,
        header: state.document.header
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        logOut: () => { dispatch({type: "LOGOUT" } ) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);