import React, { useContext, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red, blue } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./ProductCard.css";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { chosenContext } from "../../../context/ChosenContextProvider";
import { productContext } from "../../../context/ProductContextProvider";
import { useState } from "react";

const ProductCard = ({ obj }) => {
  const { productDetails } = useContext(productContext);
  const navigate = useNavigate();
  let background = obj.color;
  let style = {
    background,
  };
  // function Like() {
  //   style = {
  //     color: "red",
  //   };
  //   setSt(style);
  // }
  // const [st, setSt] = useState();
  return (
    <div className="block">
      {/* <Link to={`/details/${obj.id}`}> */}

      <Card
        className="card"
        sx={{
          borderRadius: 5,
        }}>
        <Link to={`/details/${obj.id}`}>
          <CardHeader
            className="stcolor"
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
            title={obj.category.toUpperCase()}
          />
          <CardMedia
            component="img"
            height="280"
            image={obj.img1}
            alt={obj.title}
          />

          <CardContent>
            <Typography
              className="stcolor"
              variant="h5"
              style={{ marginBottom: 10 }}>
              {obj.title} {obj.model}
            </Typography>
            <div
              style={{
                marginBottom: 20,
                height: 30,
                display: "flex",
                alignItems: "center",
              }}>
              <h2 className="stcolor">color:</h2>
              <div className="block1" style={style}></div>
            </div>

            <Typography
              variant="h5"
              className="cardText"
              color="text.secondary">
              {obj.price} сом
            </Typography>
          </CardContent>
        </Link>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          {/* <Link to={`/comments/${productDetails.id}`}> */}
          <IconButton
            aria-label="share"
            onClick={() => navigate(`/comments/${productDetails.id}`)}>
            <CommentIcon />
          </IconButton>
          {/* </Link> */}
          <Typography>{obj.comment}</Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
