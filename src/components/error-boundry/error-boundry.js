import React, { Component } from "react";

export default class ErrorBoundry extends Component {

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-block">
                    <img src="assets/img/error.png" alt="Error"/>
                </div>
            )
        } else {
            return this.props.children;
        }
    }

}