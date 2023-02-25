import React from "react";
import logo from "../logos/logo1.png";
import pin from "../logos/pin.png";
import search from "../logos/search.png";
import "../styles/header.css";
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const data = "test";
    return (
      <div className="header">
        <img className="logo" src={logo} alt="logo" />
        <div className="search">
          <input
            className="search_input"
            type="text"
            name="search"
            onKeyUp={(e) => e.code === 'Enter' ? this.props.getState(data) : -1}
          />
          <img src={search} alt="search_icon" className="search_icon" />
        </div>
        <div className="pin">
          <img className="pin_img" src={pin} alt="pin" />
        </div>
      </div>
    );
  }
}

export default Header;
