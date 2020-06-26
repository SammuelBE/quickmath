import React, { Component } from "react";

class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <p>Your Score : Correct/Total</p>
            </div>
        );
    }
}

export default Score;
