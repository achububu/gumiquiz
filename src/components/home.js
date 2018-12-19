import React, { Component } from 'react';


class HomePage extends Component {


    setPageToShow =  (page) => {
        this.props.setPageToShow(page);
    };

    render() {
        return (
            <div className="home">
                <div className="block leaves intro" onClick={() => {this.setPageToShow(1)}}>GIỚI THIỆU <br/>VỀ GUMI</div>
                <div className="block leaves quiz" onClick={() => {this.setPageToShow(2)}}>IQ Test</div>
                <div className="block leaves recruit-intern" onClick={() => {this.setPageToShow(3)}}>TUYỂN DỤNG INTERNSHIP</div>
                <div className="block leaves recruit-staff" onClick={() => {this.setPageToShow(4)}}>TUYỂN DỤNG STAFF</div>
            </div>
        );
    }
}

export default HomePage;