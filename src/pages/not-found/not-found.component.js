import React from "react";
import {Redirect} from "react-router-dom";

export class NotFoundPage extends React.Component {
    render() {
        return (
            <Redirect to="/"/>
        )
    }
}