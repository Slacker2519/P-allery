import Gallery from "./Gallery.jsx";
import Sidebar from "./Sidebar.jsx";
import Search from './Search';

const Body = (props) => {
    const { sidebarOpen, setSidebarOpen, searchOpen, setSearchOpen } = props;

    return (
        <div className="flex flex-1 overflow-hidden">
            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />
            <Search
                isOpen={searchOpen}
                onClose={() => setSearchOpen(false)}
            />
            <div className="flex-1 overflow-y-auto px-5 pb-5">
                <Gallery />
            </div>
        </div>
    );
}

export default Body;