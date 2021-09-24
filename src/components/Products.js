import React, {useEffect, useState} from "react";
import {Toast, Col, Button,} from 'react-bootstrap';
import { Product } from './models/Product';

export default function Products({}) {



    const [products, setProducts] = useState([]);
    const [products2, setProducts2] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    
  
  
    useEffect(() => {
      fetch('http://localhost:8080/api/products')
      .then((res) => res.json())
      .then(data => {
        setProducts2(...data)
        let tempUsers=[];
        data._embedded.products.forEach((item)=>{
           tempUsers.push(new Product(
             item.nameOfProduct
            ,item.brand
            ,item.pricePerItem
            ,item.productCode
            ,item.category));
        })
        console.log(tempUsers)
        setProducts(tempUsers);
    
    })
    .then(setisLoading(false));
  
    }, []);

  
    return (

  
    <div>
          {isLoading ? (

            <div className='spinner-border text-primary' role='status'>

              {' '}

            <span className='sr-only'>Loading...</span>{' '}

            </div>

      ) : (

        JSON.stringify(products2)
       
      )}
    </div>
    );
  

  
  }