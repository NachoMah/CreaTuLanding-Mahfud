const ItemDetail = ({detail}) => {
    return (
        <div>
            <h1>Detalle del producto: {detail.name}</h1>
            <img src={detail.img} alt={detail.name} />
            <p>{detail.description}</p>
            <p>Precio: ${detail.price}</p>
            <p>Stock disponible: {detail.stock}</p>
        </div>
    )
}

export default ItemDetail