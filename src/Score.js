import React from "react";

const Score = (props) => (
    <p className="mt-5 text-uppercase font-weight-bold text-monospace">
        Your Score : {props.currentScore}/{props.totalScore}
        <br />
        Correct : {((props.currentScore / props.totalScore) * 100).toFixed(0)}%
    </p>
);

export default Score;
