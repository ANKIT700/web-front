import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { api as $ } from "../../axios/Axios";
import Gallery from "react-grid-gallery";
import "./Gallery.css";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImageGallery() {
  // const classes = useStyles();
  const [state, setState] = useState({
    galleryData: [],
  });
  const handleButtonClick = async () => {
    try {
      const response = await $.axios.get(
        "https://pixabay.com/api/?key=11903245-c6f2294b80d77d1fd7402ea4e&q=yellow+flowers&image_type=photo"
      );
      console.log(response);
      debugger;
      let images = [];
      response.data.hits.map((image) => {
        let imagedata = {};
        imagedata.src = image.largeImageURL;
        imagedata.thumbnail = image.previewURL;
        imagedata.thumbnailWidth = image.previewWidth;
        imagedata.thumbnailHeight = image.previewHeight;
        imagedata.isSelected = false;
        imagedata.caption = image.tags;
        images.push(imagedata);

        // return <img src={image.previewkURL} style={{width:"100%"}} />;
      });

      setState({ galleryData: images });
    } catch (error) {
      console.error(error);
    }
  };

  // const getGalleryData = () => {
  //   let images = [];
  //   images = state.galleryData.map((image) => {
  //     let imagedata = {};
  //     imagedata.src = image.largeImageURL;
  //     imagedata.thumbnail = image.previewURL;
  //     imagedata.thumbnailWidth = image.previewWidth;
  //     imagedata.thumbnailHeight = image.previewHeight;
  //     imagedata.isSelected = false;
  //     imagedata.caption = image.tags;
  //     images.push(imagedata);

  //     // return <img src={image.previewkURL} style={{width:"100%"}} />;
  //   });
  //   return images;
  // };
  return (
    <div style={{ margin: "20px", height: "450px", overflowY: "scroll" }}>
      <Gallery images={state.galleryData} enableLightbox={true} />
      <button onClick={handleButtonClick}>Get Data</button>
    </div>
  );
}
