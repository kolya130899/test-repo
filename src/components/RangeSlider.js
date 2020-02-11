import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: "240px"
  },
  priceRange: {
    display: "inline-block"
  }
});

function valuetext(value) {
  return `${value}\u0024`;
}

export default function RangeSlider({ onClick }) {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Slider
        min={0}
        max={500}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      <div className="price-range-info">
        <Typography
          id="range-slider"
          className={classes.priceRange}
          gutterBottom
        >
          <span>{"\u0024" + value[0]} </span>
          <span> - </span>
          <span>{"\u0024" + value[1]}</span>
        </Typography>
        <button className="price-range__btn" onClick={() => onClick(value)}>
          Filter
        </button>
      </div>
    </div>
  );
}
