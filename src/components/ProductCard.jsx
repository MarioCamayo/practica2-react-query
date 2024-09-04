
const ProductCard = ({product} ) => {
  return (
    <div className="product"> 
      <div className="left" style={{backgroundImage:`url(${product.image})`}}></div>
      <div className="right">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p> Categoria: {product.category} </p>
        <p> Precio: {product.price} </p>
      </div>
    </div>
  )
}


export default ProductCard