import React from "react";
import PropTypes from "prop-types";

// Style
import "./index.css";

class NavItem extends React.PureComponent {
  render() {
    return (
      <div className={this.props.focused ? "active" : ""}>
        {this.props.logo}
      </div>
    );
  }
}

// Type checking
NavItem.propTypes = {
  focused: PropTypes.bool.isRequired,
};

export default NavItem;
