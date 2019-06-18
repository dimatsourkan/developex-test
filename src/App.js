import React from 'react';
import './App.css';
import './../node_modules/bootstrap-css-only/css/bootstrap.min.css';
import './../node_modules/font-awesome/css/font-awesome.min.css';
import './../node_modules/react-toastify/dist/ReactToastify.min.css';
import {AppRouter} from "./App.router";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <div className="App">
            <AppRouter/>
            <ToastContainer />
        </div>
    );
}

export default App;
