import {memo} from "react"
import Header from "../header";
import Footer from "../footer";
import '/src/style/pages/_all.scss'

const MasterLayout = ({children, ...props})=>{
    return (
        <div {...props}>
        <div className="wrapper">
        <Header />
        {children}
        <Footer/>
        </div>
        </div>
    );
};

export default memo(MasterLayout)