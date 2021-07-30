import React, { useEffect, useState } from 'react'
import { Navbar, Products, Checkout, Cart, Auth, Footer } from './components';
import { commerce } from './lib/commerce';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const App = () => {

    // Configure Firebase.
    const config = {
        apiKey: 'AIzaSyBlqvwn--P4hemu_TG1rWIyA49EuN1H8kU',
        authDomain: 'ecommerce-f2c5a.firebaseapp.com',
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    } else {
        firebase.app();
    }

    // Listen to the Firebase Auth state and set the local state.
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
            setUser(user);

            console.log('user:', user);
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [categories, SetCategories] = useState([]);
    const [isLoadSceen, setIsLoadSceen] = useState(true);
    const [prouductByCategory, setProuductByCategory] = useState([]);

    useEffect(() => {
        fetchData();
        fetchCategory();
        fetchCart();
        fetchProducts();

    }, []);

    const fetchProducts = async () => {
        const { data: products } = await commerce.products.list();
        const { data: categoriesData } = await commerce.categories.list();

        const fetchProductPerCategory = categoriesData.reduce((acc, category) => {
            return ([
                ...acc,
                {
                    ...category,
                    productData: products.filter((product) =>
                        product.categories.find((cat) => cat.id === category.id)
                    ),
                }
            ])
        }, []);
        setProuductByCategory(fetchProductPerCategory);
        //console.log(prouductByCategory);
    }


    const fetchData = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
        console.log('product', products)
    }

    const fetchCategory = async () => {
        const { data } = await commerce.categories.list();
        SetCategories(data);
        console.log('category:', data);
    }

    //render cart item quantity in load page
    const fetchCart = async () => {
        const cartInfo = await commerce.cart.retrieve();
        setCart(cartInfo);
        console.log('cart info:', cartInfo);
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

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        setCart(newCart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
            setOrder(incomingOrder);
            refreshCart();
        }
        catch (error) {
            setErrorMessage(error.data.error.message);
        }
    }

    const handleClearSearch = () => {
        setIsLoadSceen(true);
    }

    return (
        <BrowserRouter>
            <div>
                <Navbar total_items={cart.total_items}
                    isSignedIn={isSignedIn} user={user}
                    onRefreshProduct={handleClearSearch} />
                <Switch>
                    <Route exact path="/">
                        <Products products={products}
                            onAddToCart={hanleAddCart}
                            categories={categories}
                            isLoadSceen={isLoadSceen}
                            setIsLoadSceen={setIsLoadSceen}
                            prouductByCategory={prouductByCategory} />
                    </Route>
                    <Route exact path="/signin">
                        <Auth isSignedIn={isSignedIn} />
                    </Route>
                    <Route exact path="/cart">
                        <Cart cart={cart}
                            onUpdateCartQty={handleUpdateCartQty}
                            onRemoveCartItem={handleRemoveCartItem}
                            onEmptyCart={hanleEmptyCart}
                        />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout cart={cart}
                            order={order}
                            onCaptureCheckout={handleCaptureCheckout}
                            errorMessage={errorMessage} />
                    </Route>
                </Switch>
                {/* <Footer /> */}

            </div>
        </BrowserRouter>

    )
}

export default App