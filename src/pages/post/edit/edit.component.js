import React from "react";
import {PostService} from "../../../core/services/post.service";
import {Loader} from "../../../core/components/loader";
import {toast} from "react-toastify";
import './edit.component.css';

export class PostEditPage extends React.Component {

    constructor(props) {
        super(props);
        this.postService = new PostService();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeBody = this.onChangeBody.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);

        this.state = {
            loading: false,
            id: this.props.match.params.id,
            post : null
        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.postService.getOne(this.state.id).then(res => {
            this.setState({
                loading: false,
                post: res
            });
        });
    }

    redirectToMainPage() {
        this.props.history.push('/post');
    }

    onSubmit() {
        this.setState({ loading: true });
        this.postService.update(this.state.id, this.state.post).then(res => {
            toast.success("Post updated");
            this.redirectToMainPage();
        });
    }

    onChangeTitle(e) {
        this.setState({
            post: {
                ...this.state.post,
                title: e.target.value
            }
        })
    }

    onChangeBody(e) {
        this.setState({
            post: {
                ...this.state.post,
                body: e.target.value
            }
        })
    }

    render() {
        const id = this.props.match.params.id;
        return (
            <div>
                <h2>Posts edit: {id}</h2>
                {
                    this.state.post &&
                    <form className="edit-form">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Title</label>
                            <input type="text" value={this.state.post.title} onChange={this.onChangeTitle} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Body</label>
                            <textarea value={this.state.post.body} onChange={this.onChangeBody} className="form-control"/>
                        </div>
                        <button type="button" onClick={this.onSubmit} className="btn btn-primary">Submit</button>
                    </form>
                }
                <Loader loading={this.state.loading} />
            </div>
        );
    }
}