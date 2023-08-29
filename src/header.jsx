// HeaderContentComponent.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./header.css"; // Make sure to import your CSS file
import Home from "./home"; // Import your Home component or other components
import Mentors from './mentor'
import Team from "./team";
import Meetings from "./meetings";
import Milestones from "./milestones";
import Videos from "./videos";

 
//const Team = () => <h2>I am Team</h2>;
//const Meetings = () => <h2>I am Meetings</h2>;
//const Milestones = () => <h2>I am Milestones</h2>;
//const Videos = () => <h2>I am Videos</h2>;

function HeaderContentComponent() {
  return (
    <Router>
      <div className="header-content-container">
        <header className="header">
          <div className="sales-application">
            <h1> UHCL Sales, Limited</h1>
          </div>
          <nav className="navigation">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/mentors">Mentors</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/meetings">Meetings</Link></li>
              <li><Link to="/milestones">Milestones</Link></li>
              <li><Link to="/videos">Videos</Link></li>
            </ul>
          </nav>
        </header>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/team" element={<Team />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/milestones" element={<Milestones />} />
            <Route path="/videos" element={<Videos />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default HeaderContentComponent;
