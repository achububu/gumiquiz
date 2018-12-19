import React, { Component } from 'react';

class StaffPage extends Component {

    setPageToShow =  () => {
        this.props.setPageToShow(0);
    };

    render() {
        return (
            <div className="recruitstaff leaves">
                <div className="home-button">
                    <i className="glyphicon glyphicon-home" onClick={this.setPageToShow}>HOME</i>
                </div>
                <div className="content">
                    <h3>Hồ sơ dự tuyển dành cho Staff:</h3>
                    <p>Gửi CV về địa chỉ email: <b>contact@gumiviet.com</b></p>
                    <p>Nội dung bao gồm:</p>
                    <p>- Thông tin cá nhân</p>
                    <p>- Kiến thức, kỹ năng, thời gian kinh nghiệm (nếu có) cho từng kỹ năng</p>
                    <p>- Các project đã thực hiện trong thời gian học và kỹ năng đạt được trên từng
                        project (nếu
                        có)</p>
                    <p>Tiêu đề email dự tuyển ghi rõ: <b>Hồ sơ dự tuyển vị trí Staff_Họ và tên</b></p>

                    <a href="#phpstaff" className="collapse-btn" data-toggle="collapse">PHP:(1 position)</a>
                    <div id="phpstaff" className="collapse content-collapse">
                        <p>- 1+ years of experience in PHP</p>
                        <p>- Experience with HTML, CSS , JavaScript, ReactJS or AngularJS or
                            Angular.</p>
                        <p>- Learning/Experience: RoR or Python or NodeJS is a PLUS</p>
                        <p>- RESTful API web services</p>
                        <p>- Knowledge about OOP</p>
                        <p>- Able to write well-structured, maintainable code</p>
                        <p>- Knowledge about DB design, ORM, UNIX, IT-architecture, object oriented
                            frameworks and
                            beautiful code</p>
                        <p>- Fluent in English (Major)</p>
                    </div>
                    <a href="#reactstaff" className="collapse-btn" data-toggle="collapse">React JS: (1 position)</a>
                    <div id="reactstaff" className="collapse content-collapse">
                        <p>- Working with a modern Front-end JavaScript framework (e.g. React,
                            AngularJS)</p>
                        <p>- Understanding your team’s product domain, and its customers</p>
                        <p>- Writing semantic HTML whilst utilising templating languages (e.g. JSX,
                            Jade/Pug)</p>
                        <p>- Creating re-usable CSS using pre-processors (mostly SCSS)</p>
                        <p>- Working with NodeJS development tools (eg. Gulp, NPM, Makefiles)</p>
                        <p>- Writing the right Tests at the right levels (Jasmine, Jest, Selenium)</p>
                        <p>- Embedding UI libraries correctly (we use our own in-house library similar
                            to
                            Bootstrap / Foundation)</p>
                        <p>- Ensuring the creation of highly accessible code (W3C WCAG 2.0, ARIA)</p>
                        <p>- Working with task workflow & continuous integration tools (JIRA Agile,
                            Confluence,
                            Bamboo)</p>
                        <p>- Managing and maintaining code with Git (ideally Bitbucket)</p>
                    </div>
                    <a href="#festaff" className="collapse-btn" data-toggle="collapse">FRONTEND (VueJS/AngularJS/ReactJS) (4 Position)</a>
                    <div id="festaff" className="collapse content-collapse">
                        <p>- Strong knowledge of Javascript language.</p>
                        <p>- Developers have at least two-year experiences working with HTML5/JS.</p>
                        <p>- Willing to learn JS framework or new technologies.</p>
                        <p>- Experience in VueJS, AngularJS, ReactJS is a plus.</p>
                        <p>- Strong expertise with HTML, CSS, and writing cross-browser compatible
                            code.</p>
                        <p>- Adheres to programming conventions.</p>
                        <p>- Competent in English and has the ability to communicate with the client
                            effectively.</p>
                        <p>- Proficient understanding of code versioning GIT.</p>
                    </div>
                    <a href="#aistaff" className="collapse-btn" data-toggle="collapse">AI: (1 Position)</a>
                    <div id="aistaff" className="collapse content-collapse">
                        <p>- Bachelor's degree or Master’s degree in Computer Science</p>
                        <p>- Computer Science Fundamentals and Programming (include data structures,
                            algorithms,
                            computability and complexity, computer architecture, etc.)</p>
                        <p>- Experience with OPENCV and image processing.</p>
                        <p>- Knowledge of, and interest in Artificial Intelligence, Machine Learning,
                            and Deep
                            learning technology and industry </p>
                        <p>- Enjoy Mathematics and Statistics</p>
                        <p>- Professional knowledge of at least one programming language. Python is
                            preferred</p>
                        <p>- Excellent problem-solving skills</p>
                        <p>- Outside-of-the-box thinker</p>
                        <p>- Deep understanding of machine learning techniques and algorithms is a
                            plus</p>
                        <p>- Have experiences with deep learning packages (Tensorflow, Keras, Pytorch,
                            Caffe,
                            Theano).</p>
                        <p>- Domain knowledge in computer vision is preferred</p>
                        <p>- Experience with applied statistics and optimization is a plus</p>
                        <p>- Experience in AWS、GoogleCloudPlatform、MicrosoftAzure is a definite plus</p>
                        <p>- Research and development in the cloud environment (Amazon, Google, IBM)</p>
                        <p>- Presenting complex technical topics in a clear and structured way, ability
                            to
                            moderate discussions, meetings, and projects. </p>
                        <p>- English skill for AI researching.</p>
                    </div>
                    <div className="home-button back-btn">
                        <i className="glyphicon glyphicon-chevron-left" onClick={this.setPageToShow}>Back</i>
                    </div>
                </div>
            </div>

        );
    }
}

export default StaffPage;