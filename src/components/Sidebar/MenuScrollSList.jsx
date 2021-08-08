import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-scroll';

const MenuScrollSList = ({ categories, onSetIconCategory }) => {
    return (
        <List>
            {categories.map((category) => (
                <Link to={category.slug}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>

                    <ListItem button key={category.id}>
                        <ListItemIcon>{onSetIconCategory(category.slug)}</ListItemIcon>
                        <ListItemText primary={category.name} />
                    </ListItem>
                </Link>
            ))}
        </List>

    )
}

export default MenuScrollSList
