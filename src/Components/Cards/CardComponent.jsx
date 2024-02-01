import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import defaultImageUrl from "../../assets/default-movie.jpg";
import { Link } from "react-router-dom";
import { useMovieContext } from "../../Context/MovieContext";

const HoverableCard = styled(Card)({
  "&:hover": {
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Add your preferred hover effect
    cursor: "pointer",
  },
});

// eslint-disable-next-line react/prop-types
const CardComponent = ({ genres, imageUrl, name, rating, summary,language }) => {
  const defaultRating = "Not given";
  const { setMovie } = useMovieContext();
  const handleClick = () => {
    setMovie({ genres, imageUrl, name, rating, summary,language });
  };

  return (
    <HoverableCard>
      <CardMedia>
        <img
          src={imageUrl || defaultImageUrl}
          alt=""
          height="100%"
          className="grow"
        />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {name}
        </Typography>
        <Typography gutterBottom variant="h6">
          Rating: {rating || defaultRating}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          to={{
            pathname: `/movie/${name}`,
            state: { genres, imageUrl, name, rating, summary },
          }}
          style={{ textDecoration: "none" }}
        >
          <Button size="small" variant="outlined" onClick={handleClick}>
            Learn More
          </Button>
        </Link>
      </CardActions>
    </HoverableCard>
  );
};

export default CardComponent;
