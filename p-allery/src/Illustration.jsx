const Illustration = (props) => {
    const { illustration } = props;

    return (
        <div>
            <button className="mb-2">
                <img
                    id={illustration.id}
                    src={illustration.imageUrl}
                    alt={illustration.description}
                    className="illustration"
                />
            </button>
        </div>
    );
}

export default Illustration;