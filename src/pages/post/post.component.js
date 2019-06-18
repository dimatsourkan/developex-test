import React from "react";
import {PostListPage} from "./list/list.component";
import {PostCreatePage} from "./create/create.component";
import {PostEditPage} from "./edit/edit.component";
import {PostPage} from "./show/show.component";
import * as ReactRouterDOM from "react-router";

const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;

export class PostsPage extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/post" component={PostListPage} />
                <Route exact path="/post/create" component={PostCreatePage} />
                <Route exact path="/post/:id/edit" component={PostEditPage} />
                <Route exact path="/post/:id" component={PostPage} />
            </Switch>
        );
    }
}