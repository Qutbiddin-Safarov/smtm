import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import { Container } from "../../../utils/Components";
import Store from "../Store";
import loading from "../../../assets/images/loading.gif"
import {AiOutlineArrowRight , AiOutlineArrowLeft} from "react-icons/ai"

const Products = () => {
    const { id } = useParams();
    const next = useRef();
    const [offset, setOffset] = useState(0)
    const [data, isLoading] = useFetchData(`/categories/1/products?offset=${offset}&limit=20`)
    console.log(data);
    useEffect(() => {
        if(offset = 0){
            
        }
    }, [])
  return (
    <section>
      <Container>
        <Store/>
        <div>Products {id}</div>
        {
            !isLoading ? (
                data.map(products => (
                    <h1 key={products.id}>{products.title}</h1>
                ))
            ): <img src={loading} alt="loading"/>
        }
        <div className="pagination">
            <Link onClick={() => setOffset(offset-20)}><AiOutlineArrowLeft/></Link>
            <Link style={{}} onClick={() => setOffset(offset+20)}><AiOutlineArrowRight/></Link>
        </div>
      </Container>
    </section>
  );
};

export default Products;
