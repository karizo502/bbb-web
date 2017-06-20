import React, { Component } from "react";
import NavBar from "Components/NavBar";
import Routes from "Components/Routes";

export default class extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <NavBar />
        <section className="section main">
          <div className="container">
            <Routes />
          </div>
        </section>
      </div>
    );
  }
}
