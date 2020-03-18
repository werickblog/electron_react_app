import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./bulma.css";
import "./assets/scss/app.scss";

import DashboardView from "./pages/Dashboard";
import ImageEditorView from "./pages/ImageEditor";

class App extends React.Component {
  state = {
    checked: localStorage.getItem("theme") === "dark" ? true : false
  };

  componentDidMount() {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }

  toggleThemeChange = () => {
    const { checked } = this.state;

    if (checked === false) {
      localStorage.setItem("theme", "dark");

      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));

      this.setState({
        checked: true
      });
    } else {
      localStorage.setItem("theme", "light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      this.setState({
        checked: false
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={DashboardView} />
            <Route exact path="/image-editor" component={ImageEditorView} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
