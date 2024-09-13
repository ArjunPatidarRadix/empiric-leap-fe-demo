import React from "react";
import "./RatingWidget.css";
import { Rating, Typography } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function RatingWidget() {
  const [value, setValue] = React.useState<number | null>(3.5);

  return (
    <div>
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        color="red"
        emptyIcon={<StarBorderIcon fontSize="inherit" className="emptyStar" />}
      />
      <Typography component="legend" color="white">
        “I learned so much on this project. The PM was great about taking
      </Typography>
    </div>
  );
}

export default RatingWidget;
