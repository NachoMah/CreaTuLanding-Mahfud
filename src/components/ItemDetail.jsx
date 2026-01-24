const ItemDetail = ({detail}) => {
    return (
        <div>
            <h1>Detalle del producto: {detail.name}</h1>
            <img src={detail.img} alt={detail.name} />
        </div>
    )
}

export default ItemDetail