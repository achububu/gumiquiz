import React, { Component } from 'react';


class QuestionOne extends Component {

    nextQuestion = (e) => {
        let id = e.currentTarget.id;

        if( id === "windSpeed" ){
            this.answerRight();
            this.props.nextQuestion();
        }
        else{
            this.props.answerWrong();
            this.props.nextQuestion();
        }
    };
    answerRight = () => {
        this.props.answerRight();
    };


    render() {
        return (
            <div id="questionOne" className="fadein">
                <h3>Question 1:</h3>
                <p>An anemometer is used to measure:</p>
                <button id="temp" ref="temp" onClick={this.nextQuestion}>Temperature</button>
                <button id="windSpeed" onClick={this.nextQuestion}>Wind Speed</button>
                <button id="AtmosPress" onClick={this.nextQuestion}>Atmospheric Pressure</button>
            </div>
        );
    }
}

export default QuestionOne;