import React from "react";
import {PostService} from "../../../core/services/post.service";
import {NavLink} from "react-router-dom";
import './show.component.css';
import {Loader} from "../../../core/components/loader";
import {CommentsComponent} from "./comments-component/comments.component";
import {toast} from "react-toastify";

export class PostPage extends React.Component {

    constructor(props) {
        super(props);
        this.postService = new PostService();
        this.state = {
            loading: false,
            id: this.props.match.params.id,
            post: null
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        this.postService.getOne(this.state.id)
            .then(res => {
                this.setState({
                    loading: false,
                    post: res
                });
            });
    }

    deletePost() {
        if (window.confirm('Do you really want to delete this post?')) {
            this.postService.delete(this.state.id).then(res => {
                toast.success("Post removed");
                this.redirectToMainPage();
            })
        }
    }

    redirectToMainPage() {
        this.props.history.push('/post');
    }

    render() {
        return (
            <div className="post-container">
                <h2>Post: {this.state.id}</h2>
                {
                    this.state.post &&
                    <div className="card">

                        <div className="card-body">
                            <h5 className="card-title">{this.state.post.title}</h5>
                            <p className="card-text">{this.state.post.body}</p>
                        </div>

                        <div className="card-footer">

                            <NavLink to={`/post/${this.state.post.id}/edit`} className="btn btn-warning btn-sm"
                                     title="Edit post">
                                <i className="fa fa-edit"/>
                            </NavLink>

                            <button onClick={this.deletePost.bind(this)} className="btn btn-danger btn-sm" title="Delete post">
                                <i className="fa fa-close"/>
                            </button>

                        </div>

                    </div>
                }

                <CommentsComponent postId={this.state.id}/>
                <Loader loading={this.state.loading}/>
            </div>
        );
    }
}