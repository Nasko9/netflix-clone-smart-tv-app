import React from "react";
import PropTypes from "prop-types";

// Style
import "./index.css";

class Card extends React.PureComponent {
  render() {
    const { color, onPress, focused, title } = this.props;

    return (
      <div
        onClick={onPress}
        style={{ backgroundColor: color }}
        className={focused ? "card focused" : "card"}
      >
        {title}
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  focused: PropTypes.bool.isRequired,
};

export default Card;
