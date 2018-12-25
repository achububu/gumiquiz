import React, { Component } from 'react';

//TODO: gom question 1 2 3 4 lại thành 1 component, dữ liệu động
//TODO: Câu trả lời theo kiểu trắc nghiệm (chỉ có hình + text, ko cần input)
//TODO: Bỏ tính năng thông báo trả lời đúng sai, bước cuối cùng mới show điểm
//TODO: Thêm nút back để quay lại câu hỏi trước
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