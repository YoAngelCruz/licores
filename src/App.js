import React, { Component } from "react";
import { Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

import AddLicor from "./components/add-licor.component";
import LicoresList from "./components/licores-list.component";
import Perfil from "./components/perfil";
import Login from "./components/login";

class App extends Component {
  render() {
    const user = localStorage.getItem("user");
    function logout () {
      localStorage.clear();
      window.location.reload();
    }
    return (
      <div>
        <nav className="header">
          <div className="cinta">
            <li className="nav-item">
            <Link to={"/perfil"} className="link">
                Perfil
              </Link>
              <Link to={"/licores"} className="link">
                Licores
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="link">
                Add
              </Link>
            </li>
            <li className="nav-item">
              {
                user &&
                <Link onClick={logout} className="link">
                Cierrar Sesion
              </Link>
              }
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path='/perfil' element={<Perfil/>}/>
            <Route exact path="/licores" element={<LicoresList/>} />
            <Route exact path="add" element={<Login/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;