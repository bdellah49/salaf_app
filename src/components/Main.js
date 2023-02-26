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
              title={uniqueId}
              width="100%"
              height="700"
              allowfullscreen="false"
              src="https://www.youtube.com/embed/-VsnhrnIAko?autoplay=1?rel=0&amp;controls=0&amp;showinfo=0;modestbranding=1" allow="autoplay;encrypted-media" frameborder="0"
            ></iframe>
          );
        })}
      </div>
    );
  }
}

export default Main;
