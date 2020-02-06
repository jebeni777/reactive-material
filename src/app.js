import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import './app.css';
import 'typeface-roboto';
import Routes from "./Routes";
// import ButtonAppBar from './ButtonAppBar'
import ResponsiveDrawer from './ResponsiveDrawer';

class App extends Component {
  render() {
    // const appProps = { name: "Becky" }
    return (
      // <BrowserRouter>
      //   <Route path="/" component={ResponsiveDrawer} />
      // </BrowserRouter>
      <div>
        <header className="header">
        </header>
        <div className="content">
          <ResponsiveDrawer />
          {/* <Routes appProps={appProps} /> */}
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
