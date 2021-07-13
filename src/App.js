import React, { useEffect, useState } from 'react'

import { Navbar, Products } from './components';
import { commerce } from './lib/commerce';

const App = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    useEffect(() => {
        fetchData();
        fetchCart();
    }, []);

    const fetchData = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
        // console.log(data)
    }

    //render cart item quantity in load page
    const fetchCart = async () => {
        const cartInfo = await commerce.cart.retrieve();
        setCart(cartInfo);
        // console.log('cart info:', cartInfo);
    }

    //increase cart item quantity when add new item
    const hanleAddCart = async (productId, quantity) => {
        const cartItem = await commerce.cart.add(productId, quantity);
        setCart(cartItem.cart);
        // console.log('cart items:', cartItem.cart);
    }

    return (
        <div>
            <Navbar total_items={cart.total_items} />
            <Products products={products} onAddToCart={hanleAddCart} />
        </div>
    )
}

export default App
