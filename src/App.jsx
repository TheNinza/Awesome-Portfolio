import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";

const About = lazy(() => import("./pages/about/about"));
const Skills = lazy(() => import("./pages/skills/skills"));
const Projects = lazy(() => import("./pages/projects/projects"));
const Contact = lazy(() => import("./pages/contact/contact"));
const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Suspense fallback={<div>Loading......</div>}>
          <Route exact path="/" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Suspense>
      </Switch>
    </div>
  );
};

export default App;
