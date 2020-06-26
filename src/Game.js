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
    handleAnswer = (e) => {
        this.props.handleNewScore(this.verifyAnwser(e));
        const nextQuestion = this.createNewQuestion();
        this.setState((currentState) => ({
            valueA: nextQuestion[0],
            valueB: nextQuestion[1],
            valueC: nextQuestion[2],
            valueY: nextQuestion[3],
        }));
    };
    verifyAnwser = (e) => {
        const { valueA, valueB, valueC, valueY } = this.state;
        const isQuestionCorrect = valueA + valueB + valueC == valueY;
        return isQuestionCorrect.toString() == e.target.innerHTML
            ? true
            : false;
    };
    render() {
        const { valueA, valueB, valueC, valueY } = this.state;
        return (
            <div className="container">
                <p id="mathQuestion" className="my-5">
                    {valueA} + {valueB} + {valueC} = {valueY} ?
                </p>
                <button
                    style={{ padding: "0.5rem 2rem", fontSize: "2rem" }}
                    className="btn btn-success text-capitalize mx-3"
                    onClick={this.handleAnswer}
                >
                    true
                </button>
                <button
                    style={{ padding: "0.5rem 2rem", fontSize: "2rem" }}
                    className="btn btn-danger text-capitalize mx-3"
                    onClick={this.handleAnswer}
                >
                    false
                </button>
            </div>
        );
    }
}

export default Game;
