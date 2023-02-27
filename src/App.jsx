import "./App.css";
import Nav from "./Components/Nav/Nav";
// import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";
import { Education } from "./Components/Education/Education";
import { Projects } from "./Components/Projects/Projects";
import { useState } from "react";
import { Contact } from "./Components/Contact/Contact";
import {BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import {Articles} from './Components/Articles/Articles'
function App() {
  // this function will reterieve data from the nav dark toggle button and change the color
  const [state, setstate] = useState(true);

  const callBackFunction = (prop) => {
    setstate(prop);
    console.log(prop);
  };
  return (
    <>
      <div className={state ? "darkMode" : "lightMode"}>
        {/* <Router> */}
          <Nav parent={callBackFunction} /> 
          <Header/>
          <Skills />
          <Education />
          <Projects />
          <Articles/>
          <Contact />
          {/* <Routes>
            <Route path="/home" exact element={<Header />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/" element={Nav} />
          </Routes> */}
        {/* </Router> */}
      </div>
    </>
  );
}

export default App;
