import React from 'react';

const ScoreBoard = (props) => (
  <div className="ScoreBoard">
    <h2>Guesses Made: {props.guesses}</h2>
    <h2>High Score(Standard): {props.highScoreStandard}</h2>
    <h2>High Score(Expert): {props.highScoreExpert}</h2>
  </div>
);

export default ScoreBoard;