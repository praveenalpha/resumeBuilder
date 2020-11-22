import React, { Component } from "react";
import { connect } from "react-redux";
import "./finalize.css";
import Preview from "./preview";

import skin1 from "../static/images/skin1.svg";
import skin2 from "../static/images/skin2.svg";
import skin3 from "../static/images/skin3.svg";
import skin4 from "../static/images/skin4.svg";
import { Link } from "react-router-dom";



class Finalize extends Component {
  state = {
    contact: this.props.contact,
    education: this.props.education,
  };
  render() {
    let { contact, education } = this.state;
    return (
      <div className="finalize">
        <div className="final-preview">
          <Preview contact={contact} education={education}></Preview>
        </div>
        <div className="final-templates">
          <div className="template">
            <img src={skin1} alt="" />
            <Link to="/contact">
              <button class="template-btn">USE TEMPLATE</button>
            </Link>
          </div>
          <div className="template">
            <img src={skin2} alt="" />
            <Link to="/contact">
              <button class="template-btn">USE TEMPLATE</button>
            </Link>
          </div>
          <div className="template">
            <img src={skin3} alt="" />
            <Link to="/contact">
              <button class="template-btn">USE TEMPLATE</button>
            </Link>
          </div>
          <div className="template">
            <img src={skin4} alt="" />
            <Link to="/contact">
              <button class="template-btn">USE TEMPLATE</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contact: state.contactDetails,
    education: state.educationDetails,
  };
};

export default connect(mapStateToProps)(Finalize);