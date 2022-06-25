import { BrowserRouter, Routes, Route } from "react-router-dom";

// Context Provider
import { UserPosterProvider } from "./Context/poster.context";

// Screens
import { HomeScreen } from "./Screen/home.screen";
import { AddScreen } from "./Screen/add.screen";
import { AboutScreen } from "./Screen/about.screen";

export const MainRouter = () => {

    return (
        <BrowserRouter>
            
            <UserPosterProvider>

                <Routes>
                    <Route path="/" element={ <HomeScreen /> } />
                    <Route path="/add" element={ <AddScreen /> } />
                    <Route path="/about" element={ <AboutScreen /> } />
                </Routes>

            </UserPosterProvider>

        </BrowserRouter>
    )
}
