import React from "react";
import "../styles/footer.css";
class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="footer">
        <div className="button">like</div>
        <div className="button">share</div>
        <div className="button">subscribe</div>
      </div>
    );
  }
}

export default Footer;
