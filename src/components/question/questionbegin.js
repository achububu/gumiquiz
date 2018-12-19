import React, { Component } from 'react';


class QuestionBegin extends Component {

    nextQuestion = () => {
        this.props.nextQuestion();
    };

    render() {
        return (
            <div id="begin">
                <button onClick={this.nextQuestion}>Begin the Quiz</button>
            </div>

        );
    }
}

export default QuestionBegin;