import React from 'react'
import { Button, Container, Grid, Typography } from "@material-ui/core";
import useStyle from "./style";
import Spinner from '../Spinner/Spinner';
import Product from '../Product/Product';
import { Link } from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';

function ProductPerCategory({ prouductPerCategory, onAddToCart }) {
    const classes = useStyle();
    if (prouductPerCategory.length == 0) return <Spinner />;
    return (
        <>



            {prouductPerCategory.map((category) => (

                <div key={category.id}>
                    <div className={classes.productPerCategory}>
                        <Typography
                            variant="h5"
                            className={classes.productPerCategoryTitle}
                        >
                            {category.name}{" "}
                        </Typography>

                        <Link id={category.slug} to={`/${category.slug}`} className={classes.viewLink}>
                            View all ＞
                            {/* <h3 ref={scrollToCategory}>Scroll to category</h3> */}
                        </Link>
                    </div>

                    <Grid item xs={12}>
                        <Grid container justifyContent="flex-start" spacing={4}>
                            {category.productData.map((product) => (
                                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                    <Product product={product} onAddToCart={onAddToCart} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </div>
            ))}

        </>
    )
}

export default ProductPerCategory
