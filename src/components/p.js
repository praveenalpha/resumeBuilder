import React from "react";
import Particles from "./Particles";
import "./p.css";

const styles = {
  root1: {
    fontFamily: "sans-serif",
    textAlign: "center",
    height: "100%",
    background: "#005670",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

const P = () => (
  <div className = "p" style={styles.root1}>
    <Particles />
  </div>
);

export default P;