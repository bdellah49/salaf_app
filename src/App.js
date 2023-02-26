import "./styles/App.css";
import React from "react";
import Header from "./components/Header"
import Main from "./components/Main.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:''
    };
  }
  HeaderToApp = (info) => {
    this.setState({data:info})
  };

  render() {
    return (
      <div className="App">
        <Header getState={this.HeaderToApp} />
        <Main search={this.state.data}/>
      </div>
    );
  }
}
export default App;
