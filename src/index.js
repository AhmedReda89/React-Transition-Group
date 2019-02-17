import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appearHome: false
    };
  }
  componentDidMount() {
    this.setState(state => {
      return { appearHome: true };
    });
  }

  render() {
    return (
      <div className="App">
        <CSSTransition
          in={this.state.appearHome}
          appear={true}
          timeout={600}
          classNames="fade"
        >
          <h1>Hello CodeSandbox</h1>
        </CSSTransition>
        <CSSTransition
          in={this.state.appearHome}
          appear={true}
          timeout={600}
          classNames="slideUp"
        >
          <h2>Start editing to see some magic happen!</h2>
        </CSSTransition>
        <CSSTransition
          in={this.state.appearHome}
          appear={true}
          timeout={600}
          classNames="slideDown"
        >
          <h2>Start editing to see some magic happen!</h2>
        </CSSTransition>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
