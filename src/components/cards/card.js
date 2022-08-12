import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid, ImageListItem } from "@mui/material";

import '../../sass/card.scss';


const imageUrl = "https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg";

const CardItem =({data})=>{
    return(
      <Box className="items" sx={{flexGrow: 1, mx: "2rem"}}>
        <Grid
          container
          spacing={{xs: 2, md: 3}}
          columns={{xs: 4, sm: 8, md:12 }}
          >
          {data.map((d,id)=>(
            <Grid item xs={2} sm={4} md={3} key={id}>
            <Card sx={{ maxWidth: 400 }}>
            <ImageListItem>
              <img className="product-image mx-6"
              src={imageUrl}
              alt={d.image}
              />           
            </ImageListItem>
            
    
          <CardContent>
            <Typography gutterBottom component="div">
              Name:{d.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Price:{d.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Created Date:{d.createDate}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Category: {
              d.category.map(c=><span className="category">{c}</span>)
            }
            </Typography>
            </CardContent>
          <CardActions>
            <Button variant="contained">Buy</Button>
          </CardActions>
        </Card>
            </Grid>
          ))}
          </Grid>
      </Box>
    );
};

export default CardItem;