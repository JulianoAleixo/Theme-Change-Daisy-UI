import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
    const [theme, setTheme] = useState<string>(
        localStorage.getItem("theme") ?? "light"
    );

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.querySelector("html")?.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div>
            <Navbar theme={theme} setTheme={setTheme} />
            <Hero theme={theme} setTheme={setTheme} />
        </div>
    );
};

export default App;