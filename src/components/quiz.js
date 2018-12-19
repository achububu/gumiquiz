import React, { Component } from 'react';
import QuestionOne from './question/questionone'
import QuestionTwo from './question/questiontwo'
import QuestionThree from './question/questionthree'
import QuestionFour from './question/questionfour'
import QuestionFinish from './question/questionfinish'
import QuestionBegin from "./question/questionbegin";


class QuizPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showState : 0,
            score: 0,
            previousAnswer: false
        }
    }

    checkState = () =>{
        switch (this.state.showState) {
            case 1:
                return <QuestionOne  nextQuestion={this.nextQuestion} score={this.state.score} answerRight={this.answerRight} answerWrong={this.answerWrong}/>;
            case 2:
                return <QuestionTwo  nextQuestion={this.nextQuestion} score={this.state.score} answerRight={this.answerRight} answerWrong={this.answerWrong} />;
            case 3:
                return <QuestionThree  nextQuestion={this.nextQuestion} score={this.state.score} answerRight={this.answerRight}  answerWrong={this.answerWrong}/>;
            case 4:
                return <QuestionFour  nextQuestion={this.nextQuestion} score={this.state.score} answerRight={this.answerRight} answerWrong={this.answerWrong}/>;
            case 5:
                return <QuestionFinish setPageToShow={this.props.setPageToShow} score={this.state.score} nextQuestion={this.nextQuestion} />;
            default:
                return <QuestionBegin   nextQuestion={this.nextQuestion} />
        }
    };

    nextQuestion = () => {
        let page = this.state.showState;
        page++;
        this.setState({showState: page});
    };

    answerRight = () => {
        let score = this.state.score;
        score++;
        this.setState({score: score});
        this.setState({previousAnswer: true});
    };
    answerWrong = () => {
        this.setState({previousAnswer: false});
    };
    showScore=() =>{
        if (this.state.showState >0 && this.state.showState < 5)
            return <div className="text-center score fadein">score: {this.state.score}</div>
    };
    answer = () =>{
        if (this.state.showState > 1 && this.state.showState < 5)
        {
            if (this.state.previousAnswer)
                return <div className="text-center score fadein"><span className="label label-success">Correct!</span></div>;
            else
                return <div className="text-center score fadein"><span className="label label-danger">Sorry, wrong answer.</span></div>
        }

    };

    render() {
        return (
            <section id="quizSection" className="slidein">
                {this.showScore()}
                {this.answer()}
                {this.checkState()}
            </section>
        );
    }
}

export default QuizPage;
