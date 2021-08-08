import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import useStyle from './style';

const MenuRedirectMenu = ({ categories, onSetIconCategory }) => {
    const classes = useStyle();
    return (
        <List>
            <Link to={'/'} className={classes.link}>
                <ListItem button key='99'>
                    <ListItemIcon>{onSetIconCategory('all')}</ListItemIcon>
                    <ListItemText primary="All" />
                </ListItem>
            </Link>

            {categories.map((category) => (
                <Link to={`/${category.slug}`} className={classes.link}>
                    <ListItem button key={category.id}>
                        <ListItemIcon>{onSetIconCategory(category.slug)}</ListItemIcon>
                        <ListItemText primary={category.name} />
                    </ListItem>
                </Link>
            ))}
        </List>

    )
}

export default MenuRedirectMenu
