const Overlay = (props) => {
    const { illustration, onClick } = props;

    return (
        <div
            className="fixed flex items-center justify-center bg-black/70
            inset-0 z-2 p-4 md:p-8"
            onClick={onClick}
        >
            <div className="bg-light w-3/4 h-auto md:h-3/4 md:w-auto p-2 md:p-4
                rounded-lg shadow-lg shadow-light/50">
                <img
                    src={illustration.imageUrl}
                    alt={illustration.description}
                    className="max-w-full max-h-full object-contain"
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
        </div>
    );
}

export default Overlay;