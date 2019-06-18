import React from "react";
import {NavLink} from "react-router-dom";
import './index.css';

export class PostListItem extends React.Component {

    toRemove() {
        if (typeof this.props.onRemove === 'function') {
            this.props.onRemove();
        }
    }

    render() {

        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.body}</p>
                </div>
                <div className="card-footer">
                    <NavLink to={`/post/${this.props.id}`} className="btn btn-primary btn-sm" title="Show post">
                        <i className="fa fa-link" />
                    </NavLink>
                    <NavLink to={`/post/${this.props.id}/edit`} className="btn btn-warning btn-sm" title="Edit post">
                        <i className="fa fa-edit" />
                    </NavLink>
                    <button onClick={this.toRemove.bind(this)} className="btn btn-danger btn-sm" title="Delete post">
                        <i className="fa fa-close" />
                    </button>
                </div>
            </div>
        );
    }
}