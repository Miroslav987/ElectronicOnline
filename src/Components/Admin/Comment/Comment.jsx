import { Grid, Box, Button, TextField, Typography } from "@mui/material";
import { height } from "@mui/system";
import axios from "axios";

import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../../../context/ProductContextProvider";

const Comment = () => {
  const { productDetails, readOneProduct, editProduct } =
    useContext(productContext);
  const [inpValues, setInpValues] = useState(productDetails);

  const { id } = useParams();
  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  function handleChange(e) {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };

    setInpValues(obj);
  }

  // const navigate = useNavigate();

  function handleSave(e) {
    e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
    if (!inpValues.comment.trim()) {
      alert("Заполните все поля!");
      return;
    }
    editProduct(id, inpValues);
    // navigate("/list");
  }

  return (
    <>
      {/* <Box
        sx={{
          margin: "10px",
          width: "50vw",
          height: "50px",
          border: "2px solid black",
        }}>
        {inpValues ? (
          <Typography sx={{ width: "100%" }} variant="h4">
            {inpValues.comment}
          </Typography>
        ) : null}
      </Box> */}
      <form id="form-add" onSubmit={e => handleSave(e)}>
        <TextField
          className="outlined-basic"
          label="Коментарий"
          variant="outlined"
          name="comment"
          // value={inpValues.Comment}
          onChange={e => handleChange(e)}
        />
        <Button
          sx={{ background: "black", color: "white" }}
          variant="contained"
          type="submit">
          Save
        </Button>
      </form>
    </>
  );
};

export default Comment;
