import { Component } from "react";
import HomePage from "./pages/users/homePage";

const renderUserRoute =()=>{
    const userRouter = [
        {
            path:ROUTERS.USER.HOME,
            component: <HomePage/>
        }
    ]

    return (
        <Routers>
            {
                userRouters.map((item,key)=>((<Router key={key} path={item.path} element={item.component} />)))
            }
        </Routers>
    )
}

const RouterCustom = ()=>{
    return renderUserRouter();
}
export default RouterCustom;