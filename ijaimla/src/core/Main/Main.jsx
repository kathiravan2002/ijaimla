import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx"
import Sidebar from "../Sidebar/Sidebar.jsx";


export default function Main() {
    return (

        <div>
            <Header />
           
            <main className={`w-auto mx-auto lg:mt-32 mt-24  lg:pr-2 pr-2 lg:p-0 p-2  xl:max-w-[1500px] md:max-w-[920px] lg:mb-6 mb-3 min-h-[85vh] `}>
               
                <Outlet />
            </main>
            <Footer />
        </div>


    );
}
