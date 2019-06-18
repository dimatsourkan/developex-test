import React from "react";
import './index.css';

export class Loader extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.loading && <div className="loader">
                        <div className="spinner">
                            <div className="double-bounce1"/>
                            <div className="double-bounce2"/>
                        </div>
                    </div>
                }
            </div>
        )
    }
}