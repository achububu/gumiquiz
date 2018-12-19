import React, { Component } from 'react';


class QuestionFinish extends Component {

    setPageToShow =  (page) => {
        this.props.setPageToShow(page);
    };

    render() {
        return (
            <div id="finish" className="fadein">
                <p>You've completed the quiz with a score of: {this.props.score} </p>
                <button id="resetButton" onClick={() => this.setPageToShow(0)}>Play Again</button>
            </div>
        );
    }
}

export default QuestionFinish;