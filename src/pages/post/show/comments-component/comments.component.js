import {PostService} from "../../../../core/services/post.service";
import {Comment} from "./comment-component/comment.component";
import React from "react";
import {Loader} from "../../../../core/components/loader";
import './comments.component.css';

class NewComment extends React.Component {

    constructor(props) {
        super(props);
        this.postService = new PostService();
        this.state = {
            comment: ''
        }
    }

    /**
     * Апи не поддерживает данный метод
     */
    addComment() {
        this.postService.addComment(this.props.postId, this.state)
            .then()
    }

    onChangeComment(e) {
        this.setState({
            comment: e.target.value
        })
    }

    render() {
        return (
            <form className="add-comment-form">
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Body</label>
                    <textarea value={this.state.comment}
                              onChange={this.onChangeComment}
                              className="form-control"/>
                </div>
                <button type="button" onClick={this.addComment.bind(this)} className="btn btn-primary">Save</button>
            </form>
        );
    }
}

export class CommentsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.postService = new PostService();
        this.state = {
            newCommentShowed: false,
            loading: false,
            comments: null
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        });
        this.postService.getComments(this.props.postId).then(res => {
            this.setState({
                comments: res,
                loading: false
            })
        })
    }

    toggleNewComment() {
        this.setState({
            newCommentShowed: !this.state.newCommentShowed
        });
    }

    render() {

        const comments = this.state.comments || [];

        return (
            <div className="position-relative">
                <h2 className="comment-title">
                    Comments
                    <button className="btn btn-primary btn-sm" onClick={this.toggleNewComment.bind(this)}>
                        Add comment
                    </button>
                </h2>

                {
                    this.state.newCommentShowed && <NewComment postId={this.props.postId}/>
                }
                {
                    comments.map((comment, i) => {
                        return (<Comment key={i} comment={comment}/>)
                    })
                }
                <Loader loading={this.state.loading}/>
            </div>
        );
    }
}