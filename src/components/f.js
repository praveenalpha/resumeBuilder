import React, { Component } from "react";

// import "../node_modules/react-dat-gui/build/react-dat-gui.css";
import "../../node_modules/react-dat-gui/build/react-dat-gui.css";
import DatGui, { DatNumber, DatSelect, DatButton } from "react-dat-gui";

import FluidAnimation from "../react-fluid-animation";
import random from "random";
import Robot1 from "./robot";

const defaultConfig = {
  textureDownsample: 1,
  densityDissipation: 0.98,
  velocityDissipation: 0.99,
  pressureDissipation: 0.8,
  pressureIterations: 25,
  curl: 30,
  splatRadius: 0.005
};

export default class F extends Component {
  state = {
    config: {
      ...defaultConfig
    }
  };

  componentDidMount() {
    this._reset();
  }

  render() {
    const { config } = this.state;

    return (
      <div
        style={{
          height: "100vh",
          width: "100%"
        }}
      >
        <FluidAnimation config={config} animationRef={this._animationRef} />

        <div
          style={{
            position: "absolute",
            zIndex: 1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: "1em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontFamily: 'Quicksand, "Helvetica Neue", sans-serif',
            pointerEvents: "none"
          }}
        >
            <Robot1 />
            <p>Do you have any comments or questions? Our team will be happy to assist you. Send us a message.</p>
            <h2
                style={{
                    fontSize: "3em",
                    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)"
                  }}
            >support@resumebuilder.com</h2>
            <p>We are here to answer any questions regarding our resume generator, do not hesitate to contact us for any reason. We will respond in less than 24 hours from receipt of the email. Thanks for trusting us</p>
                
         
        </div>

      </div>
    );
  }

  _animationRef = ref => {
    this._animation = ref;
    this._reset();
  };

  _onUpdate = config => {
    this.setState({ config });
  };

  _onClickRandomSplats = () => {
    this._animation.addSplats((5 + Math.random() * 20) | 0);
  };

  _onReset = () => {
    this.setState({ config: { ...defaultConfig } });
  };

  _reset() {
    if (this._animation) {
      this._animation.addRandomSplats(random.int(100, 180));
    }
  }
}
