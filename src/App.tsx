import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CardsContainer from "./components/CardsContainer";

const App = () => {
    const [theme, setTheme] = useState<string>(
        localStorage.getItem("theme") ?? "light"
    );

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.querySelector("html")?.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div className="h-screen flex flex-col">
            <Navbar theme={theme} setTheme={setTheme} />
            <div className="flex-1 overflow-y-auto">
                <Hero theme={theme} setTheme={setTheme} />
                <div className="divider"/>
                <CardsContainer setTheme={setTheme} />
                <Footer />
            </div>
        </div>
    );
};

export default App;