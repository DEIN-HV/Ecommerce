import React, { useEffect, useState } from 'react'

import { Navbar, Products } from './components';
import { commerce } from './lib/commerce';

const App = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
        console.log(data)
    }
    return (
        <div>
            <Navbar />
            <Products products={products} />
        </div>
    )
}

export default App
