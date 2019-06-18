import React from "react";

export class HomePage extends React.Component {
    render() {
        const style = {
            fontSize: '30px',
            padding: '50px',
            textAlign: 'center'
        };
        return (
            <div style={style}>
                Home page
            </div>
        );
    }
}