import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import './Main.css'

const Main = () => {
    return (
        <div className="main-section">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;