const ItemListContainer = ({bienvenida, introduccion, fuerza}) => {
    return(
        <div className="div-container mt-4">
            <h1>{bienvenida}</h1>
            <h2>{introduccion}</h2>
            <p>{fuerza}</p>
        </div>
    );
};

export default ItemListContainer;