import { Outlet } from "react-router-dom";
import Header from "./assets/Header/Header";
import Footer from "./assets/Footer/Footer";

const Layout = ()=>{
    return(
        <>
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </>
    )
}

export default Layout;