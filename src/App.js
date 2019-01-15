import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Home, Write } from "./routes";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/write" component={Write} />
          <Route
            render={() => {
              return <Redirect to="home" />
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
