import React, { Component, useRef } from 'react';
import "./resumetemplates.css";
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import {documentAction} from "../actions/documentAction";
import { motion } from "framer-motion";
import { connect } from 'react-redux';
import ResumeTemplateStar from "./resume-template-star";
import ResumeTemplateHeading from "./resume-template-heading";
import ResumeTemplateSvg from "./resume-template-svg";
class Resumetemplates extends Component {
    state = {
        "one": false,
        "two": false,
        "three": false,
        "four": false,
        "five": false,
        "six": false,
        "seven": false,
        "eight": false
    }
    onClickHandler =  (e) => {
        this.props.chnageSkinCode(e.target.id);
        this.props.history.push("/contact");
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
    render() {
        const breakPoints = [
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 2, itemsToScroll: 2 },
            { width: 768, itemsToShow: 3 },
            { width: 1200, itemsToShow: 4 }
        ];
        return (
            <React.Fragment>

                <motion.div className="templates"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1}}
                >
                    <div className="templates-color"></div>
                    
                    <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 648"><path fill="#A044FF" fill-opacity="1" d="M0,192L60,176C120,160,240,128,360,128C480,128,600,160,720,181.3C840,203,960,213,1080,218.7C1200,224,1320,224,1380,224L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                     <ResumeTemplateSvg />
                    <ResumeTemplateHeading /> 
                    <ResumeTemplateStar/>
                    <motion.div className="templates-bottom"
                        initial={{x:'100vw'}}
                        animate={{x:0}}
                        transition={{
                            delay:1,
                            duration:1
                        }}
                    >
                        <Carousel breakPoints={breakPoints}>
                            <Item>
                                <div className={this.state.one ? "resume-templates-hover" : "resume-templates-div"}>
                                    <img id="one" onClick={(e) => {this.onClickHandler(e)}}   onMouseOver={(e) => { this.mouseEnterHandler(e) }} onMouseLeave={(e) => { this.mouseLeaveHandler(e) }} src="/skin1.svg" alt="" />
                                    
                                </div>
                            </Item>
                            <Item>
                                <div className={this.state.two ? "resume-templates-hover" : "resume-templates-div"} >
                                    <img id="two" onClick={(e) => {this.onClickHandler(e)}} onMouseOver={(e) => this.mouseEnterHandler(e)} onMouseLeave={(e) => this.mouseLeaveHandler(e)} src="/skin2.svg" alt="" />
                                    
                                </div>

                            </Item>
                            <Item>
                                <div className={this.state.three ? "resume-templates-hover" : "resume-templates-div"}>
                                    <img id="three" onClick={(e) => {this.onClickHandler(e)}}   onMouseOver={(e) => this.mouseEnterHandler(e)} onMouseLeave={(e) => this.mouseLeaveHandler(e)} src="/skin3.svg" alt="" />
                                    
                                </div>
                            </Item>
                            <Item>

                                <div className={this.state.four ? "resume-templates-hover" : "resume-templates-div"}>
                                    <img id="four" onClick={(e) => {this.onClickHandler(e)}}   onMouseOver={(e) => this.mouseEnterHandler(e)} onMouseLeave={(e) => this.mouseLeaveHandler(e)} src="/skin4.svg" alt="" />
                                    
                                </div>

                            </Item>
                            <Item>

                                <div className={this.state.five ? "resume-templates-hover" : "resume-templates-div"}>
                                    <img id="five" onClick={(e) => {this.onClickHandler(e)}}   onMouseOver={(e) => this.mouseEnterHandler(e)} onMouseLeave={(e) => this.mouseLeaveHandler(e)} src="/skin5.svg" alt="" />
                                    
                                </div>
                            </Item>
                            <Item>
                                <div className={this.state.six ? "resume-templates-hover" : "resume-templates-div"}>
                                    <img id="six" onClick={(e) => {this.onClickHandler(e)}}   onMouseOver={(e) => this.mouseEnterHandler(e)} onMouseLeave={(e) => this.mouseLeaveHandler(e)} src="/skin6.svg" alt="" />
                                    
                                </div>


                            </Item>
                            <Item>

                                <div className={this.state.seven ? "resume-templates-hover" : "resume-templates-div"}>
                                    <img id="seven" onClick={(e) => {this.onClickHandler(e)}}   onMouseOver={(e) => this.mouseEnterHandler(e)} onMouseLeave={(e) => this.mouseLeaveHandler(e)} src="/skin7.svg" alt="" />
                                    
                                </div>
                            </Item>
                            <Item>

                                <div className={this.state.eight ? "resume-templates-hover" : "resume-templates-div"}>
                                    <img id="eight" onClick={(e) => {this.onClickHandler(e)}}   onMouseOver={(e) => this.mouseEnterHandler(e)} onMouseLeave={(e) => this.mouseLeaveHandler(e)} src="/skin8.svg" alt="" />
                                    
                                </div>

                            </Item>

                        </Carousel>
                    </motion.div>
                </motion.div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        chnageSkinCode: (skinCode) => {dispatch(documentAction(skinCode))}
    }
}

export default connect(null, mapDispatchToProps)(Resumetemplates);