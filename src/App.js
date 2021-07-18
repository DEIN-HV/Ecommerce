import React, { useEffect, useState } from 'react'

import { Navbar, Products, Checkout, Cart } from './components';
import { commerce } from './lib/commerce';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
        const response = await commerce.cart.add(productId, quantity);
        setCart(response.cart);
        // console.log('cart items:', cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const response = await commerce.cart.update(productId, { quantity });
        setCart(response.cart);
    }

    const handleRemoveCartItem = async (productId) => {
        const response = await commerce.cart.remove(productId);
        setCart(response.cart);
    }

    const hanleEmptyCart = async () => {
        const response = await commerce.cart.empty();
        setCart(response.cart);
    }

    return (
        <BrowserRouter>
            <div>
                <Navbar total_items={cart.total_items} />
                <Switch>
                    <Route exact path="/">
                        <Products products={products} onAddToCart={hanleAddCart} />
                    </Route>
                    <Route exact path="/cart">
                        <Cart cart={cart}
                            onUpdateCartQty={handleUpdateCartQty}
                            onRemoveCartItem={handleRemoveCartItem}
                            onEmptyCart={hanleEmptyCart}
                        />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout cart={cart} />
                    </Route>
                </Switch>

            </div>
        </BrowserRouter>

    )
}

export default App