const Illustration = (props) => {
    const { illustration } = props;

    return (
        <div>
            <img
                id={illustration.id}
                src={illustration.imageUrl}
                alt={illustration.description}
                className="illustration"
            />
        </div>
    );
}

export default Illustration;