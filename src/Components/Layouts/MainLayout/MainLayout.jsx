import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import NavigationBar from "../../Pages/Shared/Header/NavigationBar/NavigationBar";

const MainLayout = () => {
    return (
        <>
            <NavigationBar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default MainLayout;