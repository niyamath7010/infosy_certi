import { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
export default function ProductDetails(){

    const [productDetailss, setProductDetailss] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        axios.get('./ListOfProduct.json')
            .then(response => setProductDetailss(response.data))
            .catch(error => setError(error))
    }, []);

    return(
        <>
            {productDetailss.map((prod)=>{
                return <Product productDetailss={productDetailss} />
            })}
        </>
    )
}