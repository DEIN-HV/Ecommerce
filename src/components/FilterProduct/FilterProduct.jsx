import React, { useState } from 'react'
import { Grid, Paper, Container, InputBase, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import useStyle from './style';
import SelectCategory from './SelectCategory';

const FilterProduct = ({ categories }) => {

    const classes = useStyle();

    const defaultCategory = { id: 1, name: "All" };

    const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
    const [keyWord, setKeyWord] = useState('');
    const [resultMessage, setResultMessage] = useState('');

    const handleSelectChange = (e) => {
        const { value } = e.target;
        const category = categories.find((category) => category.id == value);
        setSelectedCategory(category);
    }

    const handleInputChange = (e) => {

        setKeyWord(e.target.value);
        console.log(keyWord);

        if (keyWord) setResultMessage('');
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if (!keyWord) setResultMessage("You have no enter a product name");
    }

    return (
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
    )
}

export default FilterProduct
