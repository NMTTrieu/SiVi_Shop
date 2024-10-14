import { useState, memo } from "react"
import "./style.scss"
import { AiOutlineFacebook, AiOutlineMenu, AiOutlinePhone } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { formatter } from "/src/utils/formatter";
import { LuShoppingCart } from "react-icons/lu";
import { ROUTERS } from "/src/utils/router";

const Header = () => {

    const [isShowCategories, setShowCategories] = useState(false);

    //
    const [menus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.PRODUCT,
        },
        {
            name: "Sản phẩm",
            path: ROUTERS.USER.HOME,
            isShowSubmenu: false,
            child: [
                {
                    name: "Thịt",
                    path: ""
                },
                {
                    name: "Rau củ",
                    path: ""
                },
                {
                    name: "Thức ăn nhanh",
                    path: ""
                }
            ]
        },
        {
            name: "Bài viết",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Liên hệ",
            path: ROUTERS.USER.HOME,
        },
    ]);

    return (
        <>
            {/* Header Top */}
            <div className="header_top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header_top_left">
                            <ul>
                                <li>
                                    <MdOutlineEmail />
                                    hello@gmail.com
                                </li>
                                <li>
                                    Miễn phí ship đơn từ {formatter(200000)}
                                </li>
                            </ul>
                        </div>

                        <div className="col-6 header_top_right">
                            <ul>
                                <li >
                                    <Link to={""}>
                                        <AiOutlineFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <FaInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <CiLinkedin />
                                    </Link>
                                </li>
                                <li>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <FaRegUser />
                                    </Link>
                                    <span>Đăng nhập</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* Header Middle */}
            <div className="container">

                <div className="row">
                    <div className="col-xl-3">
                        <div className="header_logo">
                            <h1>T SHOP</h1>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <nav className="header_menu">
                            <ul>
                                {
                                    menus?.map((menu, menukey) => (
                                        <li key={menukey} className={menukey === 0 ? "active" : ""}>
                                            <Link to={menu?.path}>{menu?.name}</Link>
                                            {menu.child && (
                                                <ul className="header_menu_dropdown">
                                                    {
                                                        menu.child.map((childItem, childKey) => (
                                                            <li key={'${menukey} - ${childKey}'}>
                                                                <Link to={childItem.path}>
                                                                    {childItem.name}
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }

                                                </ul>
                                            )
                                            }
                                        </li>
                                    ))
                                }

                            </ul>
                        </nav>
                    </div>

                    <div className="col-xl-3">
                        <div className="header_cart">
                            <div className="header_cart_price">
                                <span>{formatter(1001230)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to="#">
                                        <span>5</span>
                                        <LuShoppingCart />
                                    </Link>
                                </li>
                                <li>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header Bot */}
            <div className="container">
                <div>
                    <div className="row hero-categories_container">

                        {/* Danh sách sản phẩm  */}
                        <div className="hero_categories col-xl -3 col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                            <div className="hero_categories_all"
                                onClick={() => setShowCategories(!isShowCategories)}>
                                <AiOutlineMenu />
                                <p>Danh sách sản phẩm</p>
                            </div>
                            {isShowCategories && (
                                <ul className={setShowCategories ? "" : "hidden"} >
                                    <li> <Link to="#">Thịt tươi</Link> </li>
                                    <li> <Link to="#">Rau củ</Link> </li>
                                    <li> <Link to="#">Nước trái cây</Link> </li>
                                    <li> <Link to="#">Trái cây</Link> </li>
                                    <li> <Link to="#">Hải sản</Link> </li>
                                </ul>
                            )}

                        </div>

                        {/*  */}
                        <div className="hero_sreach_container col-xl-9 col-lg-9 col-md-6 col-sm-12 col-xs-12 ">
                            {/* <div className="hero_sreach"> */}


                            <div className="row hero_sreach">
                                {/* Tìm kiếm */}
                                <div className="hero_sreach_form">
                                    <form>
                                        <input type="text" placeholder="Nhập tên sản phẩm" />
                                        <button type="submit" className="site-btn"> Tìm kiếm</button>
                                    </form>
                                </div>

                                {/* Số điện thoại */}
                                <div className="hero_sreach_phone">
                                    <div className="hero_sreach_phone_icon">
                                        <AiOutlinePhone />
                                    </div>
                                    <div className="hero_sreach_phone_text">
                                        <p>0656.789.456</p>
                                        <span>Hỗ trợ 24/7</span>
                                    </div>
                                </div>
                            </div>

                            {/* SlideShow */}
                            <div className="row hero_item">
                                <div className="hero_text">
                                    <span>Trái cây tươi</span>
                                    <h2>Rau quả<br />
                                        sạch 100%
                                    </h2>
                                    <p>Miễn phí giao hàng tận nơi</p>
                                    <Link to="" className="primary_btn">
                                        Mua ngay
                                    </Link>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Header)