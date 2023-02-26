import "./styles/App.css";
import React from "react";
import Header from "./components/Header"
import Main from "./components/Main";
import Footer from "./components/Footer"
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
        <Header className='header' getState={this.HeaderToApp} />
        <Main search={this.state.data}/>
        <Footer className='footer'/>
      </div>
    );
  }
}
export default App;
