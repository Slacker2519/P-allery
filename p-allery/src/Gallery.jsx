import ILLUST from "./illust.js"
import Illustration from "./Illustration.jsx"

const Gallery = () => {
    return (
        <div className="gallery">
            {ILLUST.map((illust) => (
                <Illustration key={illust.id} illustration={illust} />
            ))}
        </div>
    );
}

export default Gallery;