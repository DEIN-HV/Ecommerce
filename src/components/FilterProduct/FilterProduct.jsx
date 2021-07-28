import React, { useState } from 'react'
import { Grid, Paper, Container, InputBase, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import useStyle from './style';
import SelectCategory from './SelectCategory';

const FilterProduct = ({ categories }) => {

    const classes = useStyle();

    const defaultCategory = { id: 1, name: "All" };

    const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

    const handleOnchange = (e) => {
        const { value } = e.target;
        const category = categories.find((category) => category.id == value);
        setSelectedCategory(category);
    }

    if (!categories) return "loading...";

    return (
        <div className={classes.filterBar}>
            <Container>
                <Paper component="form" className={classes.root} onSubmit={() => { }}>
                    <SelectCategory
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onChange={() => handleOnchange} />
                    <InputBase
                        className={classes.input}
                        onchange={() => { }}
                        placeholder="Search for product"
                        inputProps={{ "aria-label": "Search for a product" }}
                    />
                    <IconButton type="submit">
                        <Search />
                    </IconButton>
                </Paper>
            </Container>

        </div>
    )
}

export default FilterProduct
