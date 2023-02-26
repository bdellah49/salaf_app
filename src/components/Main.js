import React from "react";
import "../styles/main.css";
import data from "./main data/main.json";
import { v4 as uniqueId } from "uuid";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
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
    console.log(this.getOutput(this.props.search));
    return (
      <div className="main">
        {this.getOutput(this.props.search.key).map((item) => {
          return (
            <iframe
              key={uniqueId}
              width="100%"
              height="600"
              src="https://www.youtube-nocookie.com/embed/ly36kn0ug4k"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          );
        })}
      </div>
    );
  }
}

export default Main;
