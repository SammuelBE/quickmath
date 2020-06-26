import React, { Component } from "react";
import Game from "./Game";
import Score from "./Score.js";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentScore: 0,
            totalScore: 0,
        };
    }
    render() {
        return (
            <div>
                <h1>Quick Math</h1>
                <Game />
                <Score
                    currentScore={this.state.currentScore}
                    totalScore={this.state.totalScore}
                />
            </div>
        );
    }
}

export default App;
