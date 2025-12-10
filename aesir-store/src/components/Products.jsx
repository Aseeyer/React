import React from "react";
import { useGetAllProductsQuery } from "../apis/productApis";

const Products = ()=> {

    const data = useGetAllProductsQuery();
    console.log(data.data);

    return(
        <div>

        </div>
    )
}

export default Products;