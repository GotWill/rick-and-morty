import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Character } from "./pages/Character";
import { Locations } from "./pages/Locations";
import { Favorites } from "./pages/Favorites";
import { Episodes } from "./pages/Episodes";
import { Layout } from "./layout";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/character/:id" element={<Character/>}/>
            <Route path="/locations" element={<Locations/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/episodes" element={<Episodes/>}/>
            </Route>
           
        </Routes>
    )
}