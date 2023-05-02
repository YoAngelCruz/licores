import React, { Component } from "react";
import { Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddLicor from "./components/add-licor.component";
import LicoresList from "./components/licores-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/licores" className="navbar-brand">
            bezKoder
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/licores"} className="nav-link">
                Licores
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <h2>React Firestore CRUD</h2>
          <Routes>
            <Route exact path="/licores" element={<LicoresList/>} />
            <Route exact path="add" element={<AddLicor/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;