import React, { Component } from "react";
import LicorDataService from "../services/licores.service";
import "firebase/storage"
export default class Licor extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.updatePublished = this.updatePublished.bind(this);
        this.updateLicor = this.updateLicor.bind(this);
        this.deleteLicor = this.deleteLicor.bind(this);
        

        this.state = {
            currentLicor: {
                id: null,
                title: "",
                description: "",
                published: false,
            },
            message: "",
        };
    }
    

    static getDerivedStateFromProps(nextProps, prevState) {
        const { licor } = nextProps;
        if (prevState.currentLicor.id !== licor.id) {
            return {
                currentLicor: licor,
                message: ""
            };
        }

        return prevState.currentLicor;
    }

    componentDidMount() {
        this.setState({
            currentLicor: this.props.licor,
        });
    }

    onChangeTitle(e) {
        const title = e.target.value;

        this.setState(function (prevState) {
            return {
                currentLicor: {
                    ...prevState.currentLicor,
                    title: title,
                },
            };
        });
    }

    onChangeDescription(e) {
        const description = e.target.value;

        this.setState((prevState) => ({
            currentLicor: {
                ...prevState.currentLicor,
                description: description,
            },
        }));
    }

    updatePublished(status) {
        LicorDataService.update(this.state.currentLicor.id, {
            published: status,
        })
            .then(() => {
                this.setState((prevState) => ({
                    currentLicor: {
                        ...prevState.currentLicor,
                        published: status,
                    },
                    message: "The status was updated successfully!",
                }));
            })
            .catch((e) => {
                console.log(e);
            });
    }

    updateLicor() {
        const data = {
            title: this.state.currentLicor.title,
            description: this.state.currentLicor.description,
        };

        LicorDataService.update(this.state.currentLicor.id, data)
            .then(() => {
                this.setState({
                    message: "The Licor was updated successfully!",
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }

    deleteLicor() {
        LicorDataService.delete(this.state.currentLicor.id)
            .then(() => {
                this.props.refreshList();
            })
            .catch((e) => {
                console.log(e);
            });
    }





    render() {
        const { currentLicor } = this.state;

        return (
            <div>
                <h4>Licor</h4>
                {currentLicor ? (
                    <div className="edit-form">
                        <form>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    value={currentLicor.title}
                                    onChange={this.onChangeTitle}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    value={currentLicor.description}
                                    onChange={this.onChangeDescription}
                                />
                            </div>

                            <div className="form-group">
                                <label>
                                    <strong>Status:</strong>
                                </label>
                                {currentLicor.published ? "Published" : "Pending"}
                            </div>
                        </form>

                        {currentLicor.published ? (
                            <button
                                className="badge badge-primary mr-2"
                                onClick={() => this.updatePublished(false)}
                            >
                                UnPublish
                            </button>
                        ) : (
                            <button
                                className="badge badge-primary mr-2"
                                onClick={() => this.updatePublished(true)}
                            >
                                Publish
                            </button>
                        )}

                        <button
                            className="badge badge-danger mr-2"
                            onClick={this.deleteLicor}
                        >
                            Delete
                        </button>

                        <button
                            type="submit"
                            className="badge badge-success"
                            onClick={this.updateLicor}
                        >
                            Update
                        </button>
                        <p>{this.state.message}</p>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Please click on a Licorrr...</p>
                    </div>
                )}
            </div>
        );
    }
}