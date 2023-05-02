import React, { Component } from "react";
import LicorDataService from "../services/licores.service";
import "../styles/mostrar.css";

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
        url: data.url
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

  render() {
    const { licores, currentLicor} = this.state;

    return (
      <>
        <h1>Licores: </h1>
        <div className="contenedorListVistas">
          {licores &&
            licores.map((licor) => {
              return (
                <div className="minVista" key={licor.id}>
                  <div className="card" onClick={() => this.setActiveLicor(licor)}>
                    <img src={licor.url} alt={licor.title} />
                    <span>{licor.title}</span>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="vista">
          {currentLicor ? (
            <Licor licor={currentLicor} refreshList={this.refreshList} />
          ) : (
            <div>
              <br />
              <p>Please click on a Licor...</p>
            </div>
          )}
        </div>
      </>
    );
  }
}