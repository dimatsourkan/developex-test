import React from "react";
import './comment.component.css';
import {PostService} from "../../../../../core/services/post.service";
import {toast} from "react-toastify";
import {Loader} from "../../../../../core/components/loader";
import ReactDOM from 'react-dom';

export class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            edited: false,
            loading: false,
            comment: this.props.comment.body
        };
        this.postService = new PostService();
        this.saveComment = this.saveComment.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
    }

    toggleEditState() {
        this.setState({
            edited: !this.state.edited
        })
    }

    onChangeComment(e) {
        this.setState({
            comment: e.target.value
        })
    }

    saveComment() {
        this.setState({loading: true});
        /**
         * Апи не поддерживает данный метод
         */
        this.postService.updateComment(this.props.comment.postId, this.props.comment.id)
            .then(res => {
                toast.success('Comment updated');
                this.setState({
                    comment: res
                })
            })
            .finally(() => {
                this.setState({
                    loading: false,
                    edited: false
                })
            })
    }

    deleteComment() {
        if (window.confirm('Do you really want to delete this comment?')) {
            /**
             * Апи не поддерживает данный метод
             */
            this.postService.deleteComment(this.props.comment.postId, this.props.comment.id)
        }
    }

    openLink(link) {
        if (window.isElectron) {
            const { shell } = window.require('electron');
            shell.openExternal(link)
        }
    }

    componentDidMount() {
        if (window.isElectron) {
            ReactDOM.findDOMNode(this).addEventListener('click', (e) => {
                if (e.target.nodeName.toUpperCase() === 'A') {
                    e.preventDefault();
                    e.stopPropagation();
                    this.openLink(e.target.href);
                }
            });
        }
    }

    render() {
        return (
            <div className="position-relative">
                <div className="media">
                    <img src="http://placehold.it/64x64" className="mr-3" alt="..."/>
                    <div className="media-body">
                        <h5 className="mt-0 comment-name">
                            { this.props.comment.name } ({this.props.comment.email})
                            <div>
                                <button onClick={this.toggleEditState.bind(this)} className="btn btn-warning btn-sm" title="Edit comment">
                                    <i className="fa fa-edit"/>
                                </button>
                                <button onClick={this.deleteComment.bind(this)} className="btn btn-danger btn-sm" title="Delete comment">
                                    <i className="fa fa-close"/>
                                </button>
                            </div>
                        </h5>
                        {
                            !this.state.edited && <div>
                                { this.props.comment.body } <a href="http://www.google.com">Any link</a>
                            </div>
                        }
                        {
                            this.state.edited &&
                            <div>
                                <textarea value={this.state.comment} onChange={this.onChangeComment} className="form-control" />
                                <button type="button" onClick={this.saveComment} className="btn btn-primary mt-2">Save</button>
                            </div>
                        }
                    </div>
                </div>
                <hr/>
                <Loader loading={this.state.loading}/>
            </div>
        );
    }
}
