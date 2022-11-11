import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { productContext } from "../../../context/ProductContextProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./ProductDetails.css";
import StarIcon from "@mui/icons-material/Star";
import SwiperCore, { Thumbs } from "swiper";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { AddShoppingCart } from "@mui/icons-material";
import { basketContext } from "../../../context/BasketContextProvider";
import { chosenContext } from "../../../context/ChosenContextProvider";

SwiperCore.use([Thumbs]);

const ProductDetails = () => {
  const { addProductToChosen } = useContext(chosenContext);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { readOneProduct, productDetails, deleteProduct } =
    useContext(productContext);

  const { addProductToBasket } = useContext(basketContext);

  const { id } = useParams();

  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  const navigate = useNavigate();
  return (
    <>
      {productDetails ? (
        <Container sx={{ marginTop: "40px" }}>
          <Grid id="prodCard" container spacing={2}>
            <Grid item xs={6}>
              <Swiper
                className="mySwiper2"
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}>
                <SwiperSlide>
                  <img src={productDetails.img1} alt={productDetails.title} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={productDetails.img2} alt={productDetails.title} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={productDetails.img3} alt={productDetails.title} />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="mySwiper">
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img src={productDetails.img1} alt={productDetails.title} />
                  </Paper>
                </SwiperSlide>
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img src={productDetails.img2} alt={productDetails.title} />
                  </Paper>
                </SwiperSlide>
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img src={productDetails.img3} alt={productDetails.title} />
                  </Paper>
                </SwiperSlide>
              </Swiper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                elevation={3}
                sx={{
                  color: "white",
                  background: "black",

                  padding: "10px",
                  marginTop: "40px",
                }}>
                <Typography variant="h4">
                  {productDetails.title}{" "}
                  <PhoneIphoneIcon sx={{ fontSize: "30px" }} />
                </Typography>
                <Typography variant="h5">{productDetails.model}</Typography>
                <hr />
                <Typography sx={{ marginTop: "30px" }}>
                  {productDetails.description}
                </Typography>
                <Alert
                  icon={<AttachMoneyIcon />}
                  sx={{
                    background: "white",
                    fontSize: "25px",
                    fontWeight: 700,
                    mt: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  Цена: {productDetails.price} сом
                  <Button variant="contained" sx={{ marginLeft: "20px" }}>
                    Купить
                  </Button>
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{ marginLeft: "20px" }}
                    onClick={() => addProductToBasket(productDetails)}>
                    <AddShoppingCart />
                  </Button>
                  <IconButton
                    aria-label="add to favorites"
                    sx={{ marginLeft: "20px" }}
                    onClick={() => addProductToChosen(productDetails)}>
                    <StarIcon />
                  </IconButton>
                </Alert>
                <Box
                  sx={{
                    mt: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{
                      border: " 2px solid red",
                      background: "black",
                      color: "red",
                      width: "48%",
                    }}
                    onClick={() => deleteProduct(productDetails.id)}>
                    Delete
                  </Button>

                  <Button
                    variant="contained"
                    color="warning"
                    sx={{
                      border: " 2px solid orange",
                      background: "black",
                      color: "orange",
                      width: "48%",
                    }}
                    onClick={() => navigate(`/edit/${productDetails.id}`)}>
                    Edit
                  </Button>
                  {/* </Link> */}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      ) : null}
    </>
  );
};

export default ProductDetails;
