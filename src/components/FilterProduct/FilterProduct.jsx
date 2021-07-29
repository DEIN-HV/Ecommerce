import React, { useState } from 'react'
import { Grid, Paper, Container, InputBase, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import useStyle from './style';
import SelectCategory from './SelectCategory';
import { commerce } from '../../lib/commerce';
import Product from '../Product/Product';

const FilterProduct = ({ categories, onAddToCart, isLoadSceen, setIsLoadSceen }) => {

    const classes = useStyle();

    const defaultCategory = { id: 1, name: "All" };

    const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
    const [keyWord, setKeyWord] = useState('');

    const [searchResult, setSearchResult] = useState([]);
    const [resultMessage, setResultMessage] = useState('');

    const handleSelectChange = (e) => {
        const { value } = e.target;

        const category = (value == 1)
            ? defaultCategory //filter all
            : categories.find((category) => category.id == value);
        setSelectedCategory(category);
        console.log('SelectedCategory', selectedCategory)
    }

    const handleInputChange = (e) => {

        setKeyWord(e.target.value);
        if (keyWord) setResultMessage('');
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!keyWord) setResultMessage("You have no enter a product name");

        console.log(keyWord);
        console.log(selectedCategory.id);


        if (keyWord) {
            try {
                const categoryId = (selectedCategory.id == 1)
                    ? {}
                    : { category_id: selectedCategory.id }

                const { data } = await commerce.products.list({
                    ...categoryId,
                    query: keyWord,
                });
                console.log({ data });
                setIsLoadSceen(false);

                if (!data) {
                    setSearchResult([]);
                    setResultMessage('No result match');
                    return;
                }
                setSearchResult(data);

            } catch (error) {
                console.log(error);
                setSearchResult([]);
            }
        }
    }

    return (

        <>
            <div className={classes.filterBar}>
                <Container>
                    <Paper component="form" className={classes.root} onSubmit={handleSearch}>
                        <SelectCategory
                            categories={[defaultCategory, ...categories]}
                            selectedCategory={selectedCategory}
                            onChange={handleSelectChange} />
                        <InputBase
                            className={classes.input}
                            onChange={handleInputChange}
                            placeholder="Search for product"
                            inputProps={{ "aria-label": "Search for a product" }}
                        />
                        <IconButton type="submit">
                            <Search />
                        </IconButton>
                    </Paper>

                    {resultMessage && <p className={classes.resultMessage}>{resultMessage}</p>}
                </Container>
            </div>

            {!isLoadSceen &&
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={4}>
                        {searchResult.map((product) => (
                            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                <Product product={product} onAddToCart={onAddToCart} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            }
        </>
    )
}

export default FilterProduct
