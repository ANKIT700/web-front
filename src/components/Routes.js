import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DraftEditor from "./editor/DraftEditor";
import Registration from "./form/Registration";
import Footer from "./homePage/Footer";
import Header from "./homePage/Header";
import Gallery from "./imageGallery/Gallery";

export default function App() {
  return (
    <Router>
      <div>
        <Header />{" "}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/editor">
            <DraftEditor />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/form">
            <Registration />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
