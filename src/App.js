import "./styles/App.css";
import React from "react";
import Header from "./components/Header"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  HeaderToApp(info){
    console.log(info)
    return info
  }
  render() {
    return (
      <div className="App">
        <Header getState={this.HeaderToApp}/>
        {/* <Main/> */}
      </div>
    );
  }
}
export default App;
