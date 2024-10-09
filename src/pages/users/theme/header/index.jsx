import React,{useState,memo} from "react"
import "./style.scss"
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import {formatter} from "/src/utils/formatter";
import { LuShoppingCart } from "react-icons/lu";
import { ROUTERS } from "/src/utils/router";

const Header = ()=>{

    //
    const[menus,setMenus] = useState([
    {
        name:"Trang chủ",
        path: ROUTERS.USER.HOME,
    },
    {
        name:"Cửa hàng",
        path: ROUTERS.USER.PRODUCT,
    },
    {
        name:"Sản phẩm",
        path: ROUTERS.USER.HOME,
        isShowSubmenu:false,
        child:[
            {
                name:"Thịt",
                path:""
            },
            {
                name:"Rau củ",
                path:""
            },
            {
                name:"Thức ăn nhanh",
                path:""
            }
        ]
    },
    {
        name:"Bài viết",
        path: ROUTERS.USER.HOME,
    },
    {
        name:"Liên hệ",
        path: ROUTERS.USER.HOME,
    },
]);

    return (
    <>
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
                        menus?.map((menu,menukey)=>(
                            <li key={menukey} className={menukey===0?"active":""}>
                                <Link to={menu?.path}>{menu?.name}</Link>
                                {menu.child && (
                                        <ul className="header_menu_dropdown">
                                            {
                                                menu.child.map((childItem,childKey)=>(
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
    </>
    );
};

export default memo(Header)