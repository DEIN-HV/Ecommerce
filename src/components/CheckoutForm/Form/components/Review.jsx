import React from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";

const Review = ({ checkoutToken }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List>
        {checkoutToken.live.line_items.map((item) => (
          <ListItem key={item.name}>
            <ListItemText
              primary={item.name}
              secondary={`Quantity: ${item.quantity}`}
            />
            <Typography variant="subtitle1">
              {item.line_total.formatted_with_symbol}
            </Typography>
          </ListItem>
        ))}

        <ListItem>
          <ListItemText primary="Total" />
          <Typography variant="h6" style={{ fontWeight: 700 }}>
            {checkoutToken.live.subtotal.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
