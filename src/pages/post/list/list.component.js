import React from "react";
import {PostService} from "../../../core/services/post.service";
import {PostListItem} from "../../../core/components/post/list-item";
import './list.component.css';
import {Loader} from "../../../core/components/loader";
import {NavLink} from "react-router-dom";
import {toast} from "react-toastify";

export class PostListPage extends React.Component {

    constructor(props) {
        super(props);
        this.postService = new PostService();
        this.state = {
            loading: false,
            posts : []
        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.postService.getAll().then(res => {
            this.setState({
                loading: false,
                posts : res
            });
        });
    }

    removeFromList(index) {
        this.state.posts.splice(index, 1);
        this.setState({
            posts: this.state.posts
        });
    }

    removePost(id, index) {
        if (window.confirm('Do you really want to delete this post?')) {
            this.postService.delete(id).then(res => {
                toast.success("Post removed");
                this.removeFromList(index);
            })
        }
    }

    render() {
        return (
            <div>
                <h2 className="list-title">
                    Posts list
                    <NavLink to="/post/create" className="btn btn-primary btn-sm">
                        Create post
                    </NavLink>
                </h2>
                <div className="card-container">
                {
                    this.state.posts.map((item, i) => {
                        return (
                            <div className="card-item" key={i}>
                                <PostListItem id={item.id}
                                              title={item.title}
                                              body={item.body}
                                              onRemove={this.removePost.bind(this, item.id, i)} />
                            </div>
                        );
                    })
                }
                </div>
                <Loader loading={this.state.loading} />
            </div>
        );
    }
}