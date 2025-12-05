import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

const Header = (props) => {
    const { onClick, theme } = props;

    return (
        <div className="header">
            <button>
                <i className="fa-solid fa-bars text-xl xl:text-2xl"></i>
            </button>
            <div className="hidden md:flex search-bar">
                <i className="fa-solid fa-magnifying-glass text-xl m-2"></i>
                <input type="text" className="w-xl outline-none"/>
            </div>
            <div className="flex items-center gap-5">
                <button className="hidden md:inline-block">
                    <i className="fa-solid fa-user text-2xl"></i>
                </button>
                <div className="md:hidden">
                    <button>
                        <i className="fa-solid fa-magnifying-glass text-xl m-2"></i>
                    </button>
                </div>
                <button
                    className="icon"
                    onClick={onClick}
                >
                    {
                        theme === "dark" ?
                            <FiMoon className="text-3xl"/> :
                            <FiSun className="text-3xl"/>
                    }
                </button>
            </div>
        </div>
    );
}

export default Header;