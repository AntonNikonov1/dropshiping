import React, { useState } from "react";
import classes from "./video-review.module.css";
import { Rating } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

export const VideoReview = () => {
  const [tabIndex, setTabIndex] = useState(0);
  console.log(tabIndex, "tabIndex");
  return (
    <div className={classes.container_list}>
      {[...data]
        .splice(
          tabIndex * VISIBLE_ELEMENTS_ON_ONE_TUB,
          tabIndex * VISIBLE_ELEMENTS_ON_ONE_TUB + VISIBLE_ELEMENTS_ON_ONE_TUB
        )
        .map(({ title, description }) => (
          <div className={classes.container} key={title}>
            <div className={classes.video} />
            <Rating
              name="half-rating-read"
              defaultValue={5}
              precision={0.01}
              sx={{ "& .MuiRating-icon": { fontSize: "24px" } }}
              readOnly
            />
            <h3>"{title}"</h3>
            <div className={classes.divider} />
            <p className={classes.contacts}>{description}</p>
          </div>
        ))}

      {tabIndex != 0 && (
        <button
          className={classes.button}
          style={{ left: -60 }}
          onClick={() => setTabIndex((prev) => prev - 1)}
        >
          <ArrowLeft fontSize="large" />
        </button>
      )}

      {tabIndex * VISIBLE_ELEMENTS_ON_ONE_TUB * 2 !== data.length && (
        <button
          className={classes.button}
          style={{ right: -60 }}
          onClick={() => setTabIndex((prev) => prev + 1)}
        >
          <ArrowRight fontSize="large" />
        </button>
      )}
    </div>
  );
};

const data = [
  {
    title: "1",
    description: "Mary Cristine, @marycriistine on Instagram",
  },
  {
    title: "2",
    description: "Ana S.",
  },
  {
    title: "3",
    description: "Mary Cristine, @marycriistine on Instagram",
  },
  {
    title: "4",
    description: "Mary Cristine, @marycriistine on Instagram",
  },
];

const VISIBLE_ELEMENTS_ON_ONE_TUB = 2;
