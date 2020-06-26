import React, { Component } from "react";

class Game extends Component {
    constructor(props) {
        super(props);
        const beginning = this.createNewQuestion();
        this.state = {
            valueA: beginning[0],
            valueB: beginning[1],
            valueC: beginning[2],
            valueY: beginning[3],
        };
    }
    createNewQuestion = () => {
        const valueA = Math.floor(Math.random() * 100);
        const valueB = Math.floor(Math.random() * 100);
        const valueC = Math.floor(Math.random() * 100);
        const valueY =
            Math.floor(Math.random() * 3) + (valueA + valueB + valueC);
        return [valueA, valueB, valueC, valueY];
    };
    handleAnswer = () => {
        const nextQuestion = this.createNewQuestion();
        this.setState((currentState) => ({
            valueA: nextQuestion[0],
            valueB: nextQuestion[1],
            valueC: nextQuestion[2],
            valueY: nextQuestion[3],
        }));
    };
    render() {
        const { valueA, valueB, valueC, valueY } = this.state;
        return (
            <div>
                <p>
                    {valueA} + {valueB} + {valueC} = {valueY} ?
                </p>
                <button onClick={this.handleAnswer}>True</button>
                <button onClick={this.handleAnswer}>False</button>
            </div>
        );
    }
}

export default Game;
