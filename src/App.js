import React, { useEffect, useState } from 'react'

import { Navbar, Products } from './components';
import { commerce } from './lib/commerce';

const App = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
        console.log(data)
    }

    const fetchCart = async () => {
        const { cart } = await commerce.cart.retrieve();
        setCart(cart);
        console.log(cart);
    }

    const hanleAddCart = async (productId, quantity) => {
        const cartItem = await commerce.cart.add(productId, quantity);
        console.log(cartItem);
    }

    return (
        <div>
            <Navbar />
            <Products products={products} onAddToCart={hanleAddCart} />
        </div>
    )
}

export default App
