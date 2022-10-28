import React from "react";
import PropTypes from "prop-types";

// Styles
import "./index.css";

class Card extends React.PureComponent {
  render() {
    const { color, onPress, focused, title } = this.props;

    return (
      <div
        className={focused ? "card active" : "card"}
        style={{ backgroundColor: color ? color : "#6d6d6e" }}
        onPress={onPress}
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
