const Header = () => {
    return (
        <div className="flex items-center justify-between w-screen p-4 fixed top-0 z-50">
            <i className="fa-solid fa-bars text-2xl"></i>
            <div className="flex items-center border-3 rounded-full w-xl h-10 px-3 py-5">
                <i className="fa-solid fa-magnifying-glass text-xl m-2"></i>
                <input type="text" className="w-xl outline-none"/>
            </div>
            <i className="fa-solid fa-user text-2xl"></i>
        </div>
    );
};

export default Header;