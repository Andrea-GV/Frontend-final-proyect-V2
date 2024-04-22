import React, { useEffect, useState } from 'react'
import './diary.css'
import axios from 'axios';
import Bttn_Back from '../../components/bttns/bttn_Back/Bttn_Back';

export default function Diary() {

    const [products, setProducts] = useState();

    const getAllProducts = async () => {

        axios.get(`https://node-basic-wheat.vercel.app/producto`)
            .then(res => setProducts(res.data.data))

    }
    
    console.log(products)

    useEffect(() => {

        getAllProducts()

    }, []);
    
    return (
    <>
      <div className='back-button'>
      <Bttn_Back></Bttn_Back></div>
      <div className='list'>
                <h1>Tus productos escaneados</h1>
    <div className='products'>
        {products?.map(product => (
        <div  className='product-container' key={product._id}>
            <h2>{product.name}</h2>
        <div className='product-image'>
            <img src={product.coverImage} alt="product" />
        </div>
          {/* <h3>Ingredients</h3>
        <ul className='product-ingredients'>
            {product.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul> */}
        </div>
      ))}
    </div>
    </div>   
        
        
    </>
    )

}