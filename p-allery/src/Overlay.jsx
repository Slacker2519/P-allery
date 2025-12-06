const Overlay = (props) => {
    const { onClick, children } = props;

    return (
        <div
            className="overlay animate-fadeIn"
            onClick={onClick}
        >
            <div onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Overlay;