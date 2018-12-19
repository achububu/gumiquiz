import React, { Component } from 'react';
import logo from "../img/logo.png";

class IntroPage extends Component {


    setPageToShow =  () => {
        this.props.setPageToShow(0);
    };

    render() {
        return (
            <div className="introduction leaves">
                <div className="home-button">
                    <i className="glyphicon glyphicon-home" onClick={this.setPageToShow}>HOME</i>
                </div>
                <div className="content">
                    <img src={logo} alt="logo" className="img-responsive text-center"/>
                    <p>
                        Công ty gumi Việt Nam là công ty chuyên về thiết kế web, lập trình và phát triển các ứng
                        dụng dành cho smart phone.
                        Cùng với liên kết chặt chẽ giữa công ty mẹ gumi (trụ sở Tokyo) và gumi Việt Nam ( trụ sở
                        Hồ Chí Minh) chắc chắn sẽ tạo được những sản phẩm tốt nhất đến cho khách hàng trong nước
                        và ngoài nước. Cùng với đội ngũ nhân viên Nhật Bản và Việt Nam, công ty chúng tôi luôn sẵn
                        sàng chấp nhận mọi “thách thức” để phấn đấu trở thành công ty IT hàng đầu tại Việt Nam.
                    </p>
                    <div className="home-button back-btn">
                        <i className="glyphicon glyphicon-chevron-left" onClick={this.setPageToShow}>Back</i>
                    </div>
                </div>
            </div>
        );
    }
}

export default IntroPage;