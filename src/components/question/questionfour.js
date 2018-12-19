import React, { Component } from 'react';

let value = '';

class QuestionFour extends Component {

    nextQuestion = () => {
        this.props.nextQuestion();
        let valueLoweCase  = value.toLowerCase();

        if (parseInt(value) === 4|| valueLoweCase === 'four'){
            value = '';
            this.answerRight();
            this.props.nextQuestion();
        }
        else {
            value = '';
            this.props.answerWrong();
            this.props.nextQuestion();
        }
    };

    answerRight = () => {
        this.props.answerRight();
    };

    checkAnswer = (e) =>{
        value = (e.target.value);
    };


    render() {
        return (
            <div id="questionFour" className="fadein">
                <h3>Question 4:</h3>
                <p>
                    <small>(Last Question)</small>
                </p>
                <p>How many questions does this quiz have? (Answer with words or numbers)</p>
                <input id="stringOrNumber" onChange={this.checkAnswer}/>
                <button onClick={this.nextQuestion}>Submit Answer</button>
            </div>
        );
    }
}

export default QuestionFour;