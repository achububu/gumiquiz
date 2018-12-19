import React, {Component} from 'react';
import './styles/main.scss';
import logo from './img/logo.png'
import IntroPage from  './components/introduction'
import InternPage from './components/intern'
import StaffPage from './components/staff'
import HomePage from './components/home'
import QuizPage from './components/quiz'




class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            showState : 0,
        }
    }

    checkState = () =>{

        switch (this.state.showState) {
            case 1:
                return <IntroPage setPageToShow={this.setPageToShow}  />;
            case 2:
                return <QuizPage setPageToShow={this.setPageToShow}  />;
            case 3:
                return <InternPage setPageToShow={this.setPageToShow} />;
            case 4:
                return <StaffPage setPageToShow={this.setPageToShow} />;
            default:
                return <HomePage setPageToShow={this.setPageToShow} />
        }
    };

    setPageToShow = (data) => {
        this.setState({showState: data});
    };


    render() {
        return (
            <div className="body">
                <div className="container slidein">
                    <section className="title">
                        <div className="title-text">
                            <h1>Hi UITer!</h1>
                            <h2>Glad to meet you at<br/>~ UIT career day ~</h2>
                        </div>
                    </section>
                    <section className="app">
                        <div className="app-container">
                            {this.checkState()}
                        </div>
                        <img src={logo} className="img-responsive logo" alt="logo"/>
                    </section>
                </div>
            </div>
        );
    }
}

export default App;
