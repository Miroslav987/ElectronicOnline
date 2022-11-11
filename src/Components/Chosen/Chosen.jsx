import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { chosenContext } from "../../context/ChosenContextProvider";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CardActions from "@mui/material/CardActions";
import "./Chosen.css";
const Chosen = () => {
  // productsInChosen.products.map(elem => {
  //   let background = elem.item.color;
  //   let style = {
  //     background,
  //   };
  //   console.log(style);
  // });

  const {
    productsInChosen,
    getChosen,
    changeProductCount,
    deleteChosenProduct,
  } = useContext(chosenContext);

  useEffect(() => {
    getChosen();
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h3" style={{ marginTop: 5 }}>
          Chosen
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start"
          flexWrap="wrap"
          sx={{ width: "90%" }}
          mx="auto"
          my="40px">
          {productsInChosen ? (
            <>
              {productsInChosen.products.map(elem => (
                <Link to={`/details/${elem.item.id}`}>
                  <Card
                    key={elem.item.id}
                    className="card"
                    sx={{ margin: 2, maxWidth: 300, borderRadius: 5 }}>
                    <CardHeader
                    // avatar={
                    //   <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                    //     {obj.category[0].toUpperCase()}
                    //   </Avatar>
                    // }
                    // action={
                    //   <IconButton aria-label="settings">
                    //     <MoreVertIcon />
                    //   </IconButton>
                    // }
                    // title={obj.category.toUpperCase()}
                    />
                    <CardMedia
                      component="img"
                      height="280"
                      image={elem.item.img1}
                      alt={elem.item.title}
                    />
                    <CardContent>
                      <Typography variant="h5" style={{ marginBottom: 10 }}>
                        {elem.item.title} {elem.item.model}
                      </Typography>
                      <div
                        style={{
                          marginBottom: 20,
                          height: 30,
                          display: "flex",
                          alignItems: "center",
                        }}>
                        <h2 className="stcolor">color:</h2>
                        <Box
                          backgroundColor={elem.item.color}
                          className="block1"></Box>
                      </div>

                      <Typography
                        variant="h5"
                        className="cardText"
                        color="text.secondary">
                        {elem.item.price} сом
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>

                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Link>
              ))}
            </>
          ) : (
            <h1>Loading...</h1>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Chosen;
