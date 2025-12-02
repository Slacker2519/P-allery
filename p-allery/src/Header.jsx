const Header = () => {
    return (
        <div className="header">
            <i className="fa-solid fa-bars icon"></i>
            <div className="hidden md:flex items-center border-3 rounded-full w-xl h-10 px-3 py-5">
                <i className="fa-solid fa-magnifying-glass text-xl m-2"></i>
                <input type="text" className="w-xl outline-none"/>
            </div>
            <div className="hidden md:inline-block">
                <i className="fa-solid fa-user text-2xl"></i>
            </div>
            <div className="md:hidden">
                <i className="fa-solid fa-magnifying-glass text-xl m-2"></i>
            </div>
        </div>
    );
}

export default Header;