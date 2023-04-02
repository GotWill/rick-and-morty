import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Bg } from "../components/Bg";

export function Layout (){
    return (
        <div>
            <Bg/>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}