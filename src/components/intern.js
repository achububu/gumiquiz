import React, { Component } from 'react';

class InternPage extends Component {

    setPageToShow =  () => {
        this.props.setPageToShow(0);
    };

    render() {
        return (
            <div className="recruitintern leaves">
                <div className="home-button">
                    <i className="glyphicon glyphicon-home" onClick={this.setPageToShow}>HOME</i>
                </div>
                <div className="content">
                    <h3>Yêu cầu chung:</h3>
                    <p>- Sinh viên năm cuối chuyên ngành Công nghệ thông tin các trường Đại Học, Cao Đẳng (ưu
                        tiên cho những bạn có thể giao tiếp bằng tiếng anh)</p>
                    <p>- Thái độ và tác phong làm việc nghiêm túc</p>
                    <p>- Có kiến thức lập trình căn bản</p>

                    <h3>Quyền lợi:</h3>
                    <p>- Được training các công nghệ mới từ các dự án riêng của công ty.</p>
                    <p>- Được tham gia dự án thực tế của công ty.</p>
                    <p>- Làm việc trong môi trường năng động.</p>
                    <p>- Sau quá trình thực tập nếu được đánh giá cao sẽ được trở thành nhân viên chính thức của
                        công ty.</p>
                    <p>- Tham gia lớp học tiếng nhật miễn phí.</p>
                    <p>- Tham gia các hoạt động của công ty (sinh nhật, team building, monthly party...)</p>
                    <p>- Du lịch công ty: 1 lần/1 năm.</p>
                    <p>- Lương thực tập: từ 2.2 triệu đến 6.6 triệu</p>
                    <p>- Hỗ trợ cơm trưa: 10,000 đ/ ngày</p>
                    <p>- Thời gian thực tập: Thoả thuận (yêu cầu fulltime ít nhất 3 ngày trong tuần)</p>
                    <div>
                        <a href="#AIintership" className="collapse-btn" data-toggle="collapse">AI Intership</a>
                        <div id="AIintership" className="collapse content-collapse">
                            <p>- Có tinh thần học hỏi về AI (Math)</p>
                            <p>- Tham gia quá trình đào tạo về AI và thực hành các kiến thức đã học vào dự
                                án cụ
                                thể.</p>
                            <p>- Có kiến thức căn bản về machine learning.</p>
                            <p>- Đã từng sử dụng SLX learning, keras, ... (hoặc bất kỳ thư viện machine
                                learning
                                nào)</p>
                            <form id="aiInternForm" className="inter-form form-info go-bottom">
                                <div>
                                    <input type="text"  name="name" className="text-input" required placeholder="Họ và tên"/>
                                    {/*<label className="text-label">Họ và tên</label>*/}
                                </div>
                                <div>
                                    <input type="email"  name="email" className="text-input" required placeholder="Email"/>
                                    {/*<label className="text-label">Email</label>*/}
                                </div>
                                <div>
                                    <input type="text"  name="phone" className="text-input" required placeholder="Số điện thoại"/>
                                    {/*<label className="text-label">Số điện thoại</label>*/}
                                </div>
                                <button className="submit-intern" type="submit">Ứng tuyển</button>
                            </form>
                        </div>
                    </div>
                    <div>
                        <a href="#Rubyintership" className="collapse-btn" data-toggle="collapse">Ruby on Rails internship</a>
                        <div id="Rubyintership" className="collapse content-collapse">
                            <p>- Có tinh thần học hỏi về Ruby on Rails</p>
                            <p>- Phát triển website application sử dụng Ruby on Rails</p>
                            <p>- Sử dụng các Javascript framework: React JS, Angular JS</p>
                            <p>- Phát triển Restful APIs</p>
                            <form id="aiInternForm" className="inter-form form-info go-bottom">
                                <div>
                                    <input type="text"  name="name" className="text-input" required placeholder="Họ và tên"/>
                                    {/*<label className="text-label">Họ và tên</label>*/}
                                </div>
                                <div>
                                    <input type="email"  name="email" className="text-input" required placeholder="Email"/>
                                    {/*<label className="text-label">Email</label>*/}
                                </div>
                                <div>
                                    <input type="text"  name="phone" className="text-input" required placeholder="Số điện thoại"/>
                                    {/*<label className="text-label">Số điện thoại</label>*/}
                                </div>
                                <button className="submit-intern" type="submit">Ứng tuyển</button>
                            </form>
                        </div>
                    </div>
                    <div>
                        <a href="#ReactJSinternship" className="collapse-btn" data-toggle="collapse">React JS internship</a>
                        <div id="ReactJSinternship" className="collapse content-collapse">
                            <p>- Có tinh thần học hỏi về React</p>
                            <p>- Nghiên cứu và phát triển về React JS</p>
                            <form id="aiInternForm" className="inter-form form-info go-bottom">
                                <div>
                                    <input type="text"  name="name" className="text-input" required placeholder="Họ và tên"/>
                                    {/*<label className="text-label">Họ và tên</label>*/}
                                </div>
                                <div>
                                    <input type="email"  name="email" className="text-input" required placeholder="Email"/>
                                    {/*<label className="text-label">Email</label>*/}
                                </div>
                                <div>
                                    <input type="text"  name="phone" className="text-input" required placeholder="Số điện thoại"/>
                                    {/*<label className="text-label">Số điện thoại</label>*/}
                                </div>
                                <button className="submit-intern" type="submit">Ứng tuyển</button>
                            </form>
                        </div>
                    </div>
                    <div>
                        <a href="#PHPintership" className="collapse-btn" data-toggle="collapse">PHP internship</a>
                        <div id="PHPintership" className="collapse content-collapse">
                            <p>- Có tinh thần học hỏi- Phát triển website sử dụng ngôn ngữ lập trình PHP hoặc trên nền
                                mã nguồn WordPress.</p>
                            <p>- Lập trình với PHP framework (Laravel, Yii, ...)</p>
                            <p>- Phát triển APIs cho hệ thống.</p>
                            <form id="aiInternForm" className="inter-form form-info go-bottom">
                                <div>
                                    <input type="text"  name="name" className="text-input" required placeholder="Họ và tên"/>
                                    {/*<label className="text-label">Họ và tên</label>*/}
                                </div>
                                <div>
                                    <input type="email"  name="email" className="text-input" required placeholder="Email"/>
                                    {/*<label className="text-label">Email</label>*/}
                                </div>
                                <div>
                                    <input type="text"  name="phone" className="text-input" required placeholder="Số điện thoại"/>
                                    {/*<label className="text-label">Số điện thoại</label>*/}
                                </div>
                                <button className="submit-intern" type="submit">Ứng tuyển</button>
                            </form>
                        </div>
                    </div>
                    <div>
                        <a href="#mobileintership" className="collapse-btn" data-toggle="collapse">Mobile internship</a>
                        <div id="mobileintership" className="collapse content-collapse">
                            <p>– Nghiên cứu và phát triển các ứng dụng di động. (IOS/ANDROID)</p>
                            <p>– Làm việc với ngôn ngữ lập trình của Apple (Objective-C, Swift)</p>
                            <p>– Làm việc với server thông qua các API (bao gồm API của bên thứ 3 như: GoolgleAPI,
                                FacebookAPI…)</p>
                            <p>– Làm việc với các framework được phát triển bởi Apple và bên thứ 3.</p>
                            <form id="aiInternForm" className="inter-form form-info go-bottom">
                                <div>
                                    <input type="text"  name="name" className="text-input" required placeholder="Họ và tên"/>
                                    {/*<label className="text-label">Họ và tên</label>*/}
                                </div>
                                <div>
                                    <input type="email"  name="email" className="text-input" required placeholder="Email"/>
                                    {/*<label className="text-label">Email</label>*/}
                                </div>
                                <div>
                                    <input type="text"  name="phone" className="text-input" required placeholder="Số điện thoại"/>
                                    {/*<label className="text-label">Số điện thoại</label>*/}
                                </div>
                                <button className="submit-intern" type="submit">Ứng tuyển</button>
                            </form>
                        </div>
                    </div>
                    <div className="home-button back-btn">
                        <i className="glyphicon glyphicon-chevron-left" onClick={this.setPageToShow}>Back</i>
                    </div>
                </div>
            </div>
        );
    }
}

export default InternPage;