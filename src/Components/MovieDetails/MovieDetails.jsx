/* eslint-disable react/prop-types */
import "./Custom.css";
import { useState } from "react";
import {
  Button,
  Box,
  Typography,
  Modal,
  Stack,
  TextField,
} from "@mui/material";
import { useMovieContext } from "../../Context/MovieContext";
import defaultImageUrl from "../../assets/default-movie.jpg";

const MovieDetails = () => {
  const { selectedMovie } = useMovieContext();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  const [formData, setFormData] = useState({
    name: selectedMovie?.name || "",
    rating: selectedMovie?.rating || "",
    language: selectedMovie?.language || "",
    people: "",
  });

  const resetForm = () => {
    setFormData({
      name: selectedMovie?.name || "",
      rating: selectedMovie?.rating || "",
      language: selectedMovie?.language || "",
      people: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBook = () => {
    // Perform any actions needed with the form data
    console.log("Form Data:", formData);
  };

  if (!selectedMovie) {
    return (
      <div>
        <h2>No movie selected</h2>
      </div>
    );
  }

  const { genres, imageUrl, name, rating, summary, language } = selectedMovie;
  const defaultProps = "Not given";
  const removetags = (text) => {
    if (text == null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div className="singleShow">
        <img src={imageUrl || defaultImageUrl} alt="Default_img" />
        <div className="info">
          <h1>{name}</h1>
          <span className="genres">{genres || defaultProps}</span>
          <span className="lang">{language || defaultProps}</span>
          <p>
            <strong style={{ color: "black", fontWeight: "bold" }}>
              Rating:
            </strong>{" "}
            {rating || defaultProps}
          </p>
          <p className="desc">{summary && removetags(summary)}</p>
          <Button size="small" variant="outlined" onClick={handleOpen}>
            Book Tickets
          </Button>
        </div>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="spring-modal-title" variant="h6" component="h2">
              Book MyShows🍿
            </Typography>
            <Stack spacing={2} margin={2}>
              <TextField
                variant="outlined"
                label="Name"
                value={formData.name}
                disabled
              ></TextField>
              <TextField
                variant="outlined"
                label="Language"
                value={formData.language}
                disabled
              ></TextField>
              <TextField
                variant="outlined"
                label="Rating"
                value={formData.rating}
                disabled
              ></TextField>
              <TextField
                variant="outlined"
                label="People"
                name="people"
                value={formData.people}
                onChange={handleChange}
              ></TextField>
            </Stack>
            <div
              style={{
                margin: "2px",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={handleBook}
              >
                Book
              </Button>
              <Button
                sx={{ marginLeft: "2px" }}
                size="small"
                variant="contained"
                color="error"
                onClick={resetForm}
              >
                Reset
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default MovieDetails;
