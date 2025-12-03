import Header from './Header';
import Body from './Body';
import { useState } from "react";

function App() {
    const [theme, setTheme] = useState("dark");

    return (
        <div className={`
                ${theme} 
                w-full h-screen bg-light text-black dark:text-light dark:bg-dark
                flex flex-col
            `}>
            <Header
                onClick={() => {
                    theme === "dark" ? setTheme("") : setTheme("dark");
                }}
                theme={ theme }
            />
            <Body />
        </div>
    );
}

export default App
