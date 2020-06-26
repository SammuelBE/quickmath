import React, { Component } from "react";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <p>A + B + C + D = Y ?</p>
                <button>True</button>
                <button>False</button>
            </div>
        );
    }
}

export default Game;
