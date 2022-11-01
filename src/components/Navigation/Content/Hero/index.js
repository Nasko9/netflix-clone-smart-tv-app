import React from "react";
import PropTypes from "prop-types";

import "./index.css";

class Hero extends React.PureComponent {
  render() {
    const { program } = this.props;

    return (
      <div
        className="hero"
        style={{ backgroundColor: program ? program.color : "#B9090B" }}
      >
        <h1>{program ? program.title : "No program"}</h1>
      </div>
    );
  }
}

// Type checking
Hero.propTypes = {
  program: PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }),
};

// Default prop value
Hero.defaultProps = {
  program: null,
};

export default Hero;
