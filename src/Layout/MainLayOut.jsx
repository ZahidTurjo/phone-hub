import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";


const MainLayOut = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
                <Navbar></Navbar>
            <Outlet></Outlet>
        
        </div>
    );
};

export default MainLayOut;