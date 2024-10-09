import {memo} from "react"
import { Link } from "react-router-dom";
import "./style.scss"
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";


const Footer = ()=>{
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">

            {/* Thông tin liên hệ*/}
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="footer_about">
                        <h1 className="footer_about_logo">
                            T SHOP
                        </h1>
                        <ul>
                            <li>Địa chỉ: 113 Phan Xích Long</li>
                            <li>SĐT: 0977-232-232</li>
                            <li>Email: tshop@gmail.com</li>
                        </ul>
                    </div>
                </div>

                {/* Cửa hàng */}
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="footer_widget">
                        <h6>Cửa hàng</h6>
                        <ul>
                            <li>
                            <Link to=""> Liên hệ </Link>
                            </li>
                            <li>
                            <Link to=""> Thông tin về chúng tôi </Link>
                            </li>
                            <li>
                            <Link to=""> Sản phẩm kinh doanh </Link>
                            </li>
                        </ul>

                        <ul>
                            <li>
                            <Link to=""> Thông tin tài khoản </Link>
                            </li>
                            <li>
                            <Link to=""> Giỏ hàng </Link>
                            </li>
                            <li>
                            <Link to=""> Danh sách ưa thích </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                   
                {/* Khuyễn mãi & Ưu đãi */}
                <div className="col-lg-3  col-md-12 col-sm-12 col-xs-12">
                    <div className="footer_widget">
                        <h6>Khuyến mãi & ưu đãi</h6>
                        <p> Đăng ký nhận thông tin tại đây</p>
                        <form action="#">
                            <div className="input_group">
                                <input type="text" placeholder="Nhập email" />
                                <button type="submit" className="btn_submit"> Đăng ký</button>
                            </div>
                            <div className="footer_widget_social">
                                <div>
                                    <AiOutlineFacebook/>
                                </div>
                                <div>
                                    <AiOutlineInstagram/>
                                </div>
                                <div>
                                    <AiOutlineLinkedin/>
                                </div>
                            </div>
                        </form>
                    </div> 
                </div>
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer)