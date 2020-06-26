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
    render() {
        const { valueA, valueB, valueC, valueY } = this.state;
        return (
            <div>
                <p>
                    {valueA} + {valueB} + {valueC} = {valueY} ?
                </p>
                <button>True</button>
                <button>False</button>
            </div>
        );
    }
}

export default Game;
