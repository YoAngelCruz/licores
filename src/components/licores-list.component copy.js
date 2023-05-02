import React, { Component } from "react";
import LicorDataService from "../services/licores.service";
import '../styles/list.css'

import Licor from "./licores.component";

export default class LicoresList extends Component {
    constructor(props) {
        super(props);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveLicor = this.setActiveLicor.bind(this);
        this.onDataChange = this.onDataChange.bind(this);

        this.state = {
            licores: [],
            currentLicor: null,
            currentIndex: -1,
        };

        this.unsubscribe = undefined;
    }

    componentDidMount() {
        this.unsubscribe = LicorDataService.getAll().orderBy("title", "asc").onSnapshot(this.onDataChange);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onDataChange(items) {
        let licores = [];
        console.log(items);

        items.forEach((item) => {
            let id = item.id;
            let data = item.data();
            licores.push({
                id: id,
                title: data.title,
                description: data.description,
                published: data.published,
            });
        });

        this.setState({
            licores: licores,
        });
    }

    refreshList() {
        this.setState({
            currentLicor: null,
            currentIndex: -1,
        });
    }

    setActiveLicor(licor, index) {
        this.setState({
            currentLicor: licor,
            currentIndex: index,
        });
    }

    render() { const { licores, currentLicor, currentIndex } = this.state;
    
    return (
      <div className="padre">
       <div className="list row">
        <div className="col-md-6">
          <h4>Licores List</h4>

          <ul className="list-group">
            {licores &&
              licores.map((licor, index) => (
                <li
                  className={ "list-group-item " + (index === currentIndex ? "active" : "") }
                  onClick={() => this.setActiveLicor(licor, index)}
                  key={index}
                >
                  {licor.title}
                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-6">
          {currentLicor ? (
            <Licor
              licor={currentLicor}
              refreshList={this.refreshList}
            />
          ) : (
            <div>
              <br />
              <p>Please click on a Licor. ..</p>
            </div>
          )}
        </div>
       </div>
      </div>
    );
  } 
} 