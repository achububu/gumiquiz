import React, { Component } from 'react';

let mamma = 1;
let ele = 1;
let cumu = 1;
let nimbus = 1;

class QuestionThree extends Component {

    nextQuestion = () => {
        if( (mamma%2 ===0) && (cumu%2 ===0) && (nimbus%2 ===0) && (ele%2 !== 0)){
            this.answerRight();
            mamma = 1;
            ele = 1;
            cumu = 1;
            nimbus = 1;
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

    checkCheckBoxChecked = (e) => {
        switch (e.target.value) {
            case 'mammatus':
            {
                mamma++;
                console.log(mamma, ele, cumu, nimbus);
                return;
            }
            case 'elephant':
            {
                ele++;
                console.log(mamma, ele, cumu, nimbus);
                return;
            }
            case 'cumulus':
            {
                cumu++;
                console.log(mamma, ele, cumu, nimbus);
                return;
            }
            case 'nimbus':
            {
                nimbus++;
                console.log(mamma, ele, cumu, nimbus);
                return;
            }
            default:
                return;
        }
    };

    render() {
        return (
            <div id="questionThree" className="fadein">
                <h3>Question 3:</h3>
                <p>Which of the below are a type of cloud? (Check all 3 correct answers)</p>
                <div className="boxes">
                    <p>
                        <input type="checkbox" id="mammatus" value="mammatus" name="q3" onChange={this.checkCheckBoxChecked}/>
                        <label htmlFor="mammatus">Mammatus</label>
                    </p>
                    <p>
                        <input type="checkbox" id="elephant" value="elephant" name="q3" onChange={this.checkCheckBoxChecked}/>
                        <label htmlFor="elephant">Elephant</label>
                    </p>
                    <p>
                        <input type="checkbox" id="cumulus" value="cumulus" name="q3" onChange={this.checkCheckBoxChecked}/>
                        <label htmlFor="cumulus">Cumulus</label>
                    </p>
                    <p>
                        <input type="checkbox" id="nimbus" value="nimbus" name="q3" onChange={this.checkCheckBoxChecked}/>
                        <label htmlFor="nimbus">Nimbus</label>
                    </p>
                </div>
                <button onClick={this.nextQuestion}>Submit Answer</button>
            </div>
        );
    }
}

export default QuestionThree;