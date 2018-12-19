import React, { Component } from "react";
import Header from "./Header";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

class App extends Component {
  render() {
    return <Header />;
  }
}

export default App;