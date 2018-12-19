import React, { Component } from 'react';


class QuestionTwo extends Component {

    nextQuestion = (e) => {
        let id = e.currentTarget.id;
        if( id === "sun" ){
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
            <div id="questionTwo" className="fadein">
                <h3>Question 2:</h3>
                <p>Click on the image below that depicts:</p>
                <div className="images">
                    <img src="https://image.ibb.co/fKgav6/rain.png" alt="rainy day" id="rain"
                         onClick={this.nextQuestion}/>
                    <img src="https://image.ibb.co/jpKTF6/sun.png" alt="wind farm" id="sun"
                         onClick={this.nextQuestion}/>
                    <img src="https://image.ibb.co/jypjoR/clouds.png" alt="beautiful clouds" id="clouds"
                         onClick={this.nextQuestion}/>
                </div>
            </div>
        );
    }
}

export default QuestionTwo;