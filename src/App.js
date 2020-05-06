import React from "react";
//import {render} from 'react-dom';
import ReactDOM from "react-dom";
//import  Pet  from './Pet';
import Searchparams from "./Searchparams";
import { Router, Link } from "@reach/router";
import Details from "./Details";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     breed: "Cockatiel"
  //   }),
  //   React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" })
  // ]);
  return (
    <div>
      <header>
        <Link to="/">Adopt Me</Link>
      </header>

      {/* <Pet name="Sudeep" animal="dog" breed="chillar"/>
            <Pet name="Sudeep" animal="dog" breed="chillar"/>
            <Pet name="Sudeep" animal="dog" breed="chillar"/> */}
      <Router>
        <Searchparams path="/" />

        <Details path="/details/:id" />
      </Router>
    </div>
  );
};
//   ReactDOM.render(React.createElement(App), document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
