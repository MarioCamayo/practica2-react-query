import { useQuery } from "react-query";
import ProductCard from './ProductCard'
import { useState } from "react";

const ProductsList = () => {
  const [page, setPage] = useState(1)

  const getProducts = async ( {queryKey} ) => {
    const res = await fetch(`https://peticiones.online/api/products?page=${queryKey[1]}`);
    const data = await res.json();
    // return res.json();
    console.log(data); // Verifica qué se está recibiendo
    return data;

  };
  const { data, status } = useQuery(["products", page], getProducts);
  if (status === "loading") {
    return <p>Recuperando los productos...</p>;
  }
  if (status === "error") {
    return <p>Error al recuperar los productos</p>;
  }

  return (
    <div>
      <h1>Lista de productos</h1>
      <div>
        <button onClick={()=>setPage(page - 1)}>Anterior</button>
        <button onClick={()=>setPage(page + 1)}>Siguiente</button>
      </div>
      <div className="products">
        {data.results.map((prod) => (
            <ProductCard key={prod._id} product= {prod} />
       ))}
      </div>
      
    </div>
  );
};



export default ProductsList;
