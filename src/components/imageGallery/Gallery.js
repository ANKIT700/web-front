import axios from "axios";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Gallery() {
  const classes = useStyles();
  const [state, setState] = useState({
    galleryData: [],
  });
  const handleButtonClick = async () => {
    try {
      const response = await axios.get(
        "https://pixabay.com/api/?key=11903245-c6f2294b80d77d1fd7402ea4e&q=yellow+flowers&image_type=photo"
      );
      console.log(response);
      setState({ galleryData: response.data.hits });
    } catch (error) {
      console.error(error);
    }
  };

  const getGalleryData = () => {
    const images = state.galleryData.map((image) => {
      return (
        <Card className={classes.root} style={{ margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={image.tags}
              height="140"
              image={image.previewURL}
              title={image.user}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                User:{image.user}
                <br />
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {image.tags} <br />
                Url: {image.largeImageURL}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      );
    });
    return images;
  };
  return (
    <div style={{ margin: "20px", height: "350px", overflowY: "scroll" }}>
      {getGalleryData()}
      <button onClick={handleButtonClick}>Get Data</button>
    </div>
  );
}
