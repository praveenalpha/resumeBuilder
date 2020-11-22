import React from 'react'
import "./skin7.css";
import {Link} from "react-router-dom";
// import {Link} from "react-router-dom";
const Skin7 = () => {
    return ( 
        <>
        <div className="head">
            <div className="name">NAME </div>
            <div className="bio">
                <div className="phone">1234567 |</div>
                <div className="email"> ABC@ACS.COM |</div>
                <div className="address"> \TEST STREET</div>
                
            </div>
        </div>
        <div className="proffesional-summary">
            PROFESSIONAL summary
            <hr/>
            <div className="proffessional-details">
                asdkljfladskjflsadkjfklsd<br></br>ajfdfksadfjlskdfjl<br></br>skdfjls
                salkjdflksajfksdfksdj<br></br>fskldfksfjlsdk
                
            </div>

        </div>
        <div className="skills">
            <div className="ul1">
                <ul>
                    <li>skill1</li>
                    <li>skill2</li>
                    <li>skill3</li>
                    
                </ul>
            </div>
            <div className="ul2">
            <ul>
                    <li>skill4</li>
                    <li>skill5</li>
                    <li>skill6</li>
                    
                </ul>
            </div>
            <div className="ul3">
            <ul>
                    <li>skill7</li>
                    <li>skill8</li>
                    <li>skill9</li>
                    
                </ul>
            </div>
            
        </div>
        
        <div className="experience">Experience
            <hr/>
            <div className="experience1">
                <div className="experince1-head">
                    <div className="experience1-tittle">Experience1-title</div>
                    <div className="experience1-date">Experience1-date</div>
                </div>
                <ul>
                    <li>tell me something 1</li>
                    <li>tell me something 2</li>
                    <li>tell me something 3</li>
                    <li>tell me something 4</li>
                </ul>
            </div>
            <div className="experience2">
            
                <div className="experince2-head">
                    <div className="experience2-tittle">Experience2-title</div>
                    <div className="experience2-date">Experience2-date</div>
                </div>
                <ul>
                    <li>tell me something 1</li>
                    <li>tell me something 2</li>
                    
                </ul>
            
            </div>

        </div>
        <div className="education">
            <div className="education-head">Education
                <hr/>
                <div className="education-title">Education-title</div>
                <div className="education-date">Education-date</div>
            </div>
            <ul>
                <li>education-details 1</li>
                <li>education-details 1</li>
                <li>education-details 1</li>
                
            </ul>
        </div>
        </>
     );
}
 
export default Skin7;