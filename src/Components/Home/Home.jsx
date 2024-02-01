import axios from "axios";
import { useEffect, useState } from "react";
import CardComponent from "../Cards/CardComponent";
import { Grid, Typography } from "@mui/material";

function Home() {
  const [values, setValues] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `https://api.tvmaze.com/search/shows?q=all`
        );
        console.log(response.data);
        const newData = response.data.map(({ show }) => ({
          genres: show.genres[0],
          language:show.language,
          imageUrl: show.image?.medium, // Using optional chaining to handle potential missing 'image' property
          name: show.name,
          rating: show.rating?.average, // Using optional chaining to handle potential missing 'rating' property
          summary: show.summary,
        }));
        setValues(newData);
        console.log(newData[0]);
      } catch (error) {
        console.log("Errors is fetching data: ", error);
      }
    };
    fetchdata();
  }, []);
  return (
    values.length===0?<Typography variant="h3">Loading</Typography>:
    <Grid container justifyContent="center" spacing={4}>
      {values.map((value, index) => {
        return (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <CardComponent
              key={index}
              genres={value.genres}
              imageUrl={value.imageUrl}
              name={value.name}
              rating={value.rating}
              summary={value.summary}
              language={value.language}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Home;
