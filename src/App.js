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
    handleNewScore = (answerStatus) => {
        this.setState((currentState) => ({
            totalScore: currentState.totalScore + 1,
        }));
        if (answerStatus) {
            this.setState((currentState) => ({
                currentScore: currentState.currentScore + 1,
            }));
        }
    };
    render() {
        return (
            <div className="mt-5">
                <h1>Quick Math</h1>
                <Game handleNewScore={this.handleNewScore} />
                <Score
                    currentScore={this.state.currentScore}
                    totalScore={this.state.totalScore}
                />
            </div>
        );
    }
}

export default App;
