import { useState } from "react";
import ILLUST from "./illust.js"
import Illustration from "./Illustration.jsx"
import Overlay from "./Overlay";

const Gallery = () => {
    const [ selectedIllust, setSelectedIllust] = useState(null);

    return (
        <div>
            <div className="gallery">
                {ILLUST.map((illust) => (
                    <Illustration
                        key={illust.id}
                        illustration={ illust }
                        onClick={() => setSelectedIllust(illust)}
                    />
                ))}
            </div>

            {selectedIllust && (
                <Overlay
                    illustration={ selectedIllust }
                    onClick={() => setSelectedIllust(null)}
                />
            )}
        </div>
    );
}

export default Gallery;