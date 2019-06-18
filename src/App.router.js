import * as ReactRouterDOM from "react-router-dom";
import React from "react";
import {HomePage} from "./pages/home/home.component";
import {Navigation} from "./core/components/navigation";
import {PostsPage} from "./pages/post/post.component";
import {NotFoundPage} from "./pages/not-found/not-found.component";

const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;

export class AppRouter extends React.Component {
    render() {
        return (
            <Router>

                <Navigation/>

                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/post" component={PostsPage}/>
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        );
    }
}