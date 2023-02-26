import React from "react";
import "../styles/main.css";
import data from "./main data/main.json";
import video from "../logos/vd.mp4";
import { v4 as uniqueId } from "uuid";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    window.onscroll = function (e) {};
  }
  OutputValide(search) {
    return search === "" ? false : true;
  }
  getOutput(search) {
    if (this.OutputValide(search)) {
      return [search];
    } else {
      return data;
    }
  }
  render() {
    console.log(this.props.search);
    return (
      <div className="main">
        <video
          src={video}
          width="100%"
          height="100%"
          controls
          fullscreen="false"
          muted
        />
      </div>
    );
  }
}

export default Main;
