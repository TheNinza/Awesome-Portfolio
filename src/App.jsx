import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import Skills from "./pages/skills/skills";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";

const About = lazy(() => import("./pages/about/about"));
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
