import React from "react";

const Score = (props) => (
    <p>
        Your Score : {props.currentScore}/{props.totalScore}
    </p>
);

export default Score;
