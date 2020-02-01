import React, { Component } from 'react';
import './app.css';
import 'typeface-roboto';
import Routes from "./Routes";

// import ButtonAppBar from './ButtonAppBar'
import ResponsiveDrawer from './ResponsiveDrawer';

class App extends Component {
  render() {
    const appProps = { name: "Becky" }
    return (
      <div>
        <header className="header">

        </header>
        <div className="content">
          <ResponsiveDrawer />
          {/* <Routes appProps={appProps} /> */}
        </div>
      </div>
    );
  }
}

export default App;
