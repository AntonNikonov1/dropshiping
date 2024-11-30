import React from "react";
import classes from "./gallery.module.css";
import classNames from "classnames";

export const GalleryItem = ({ image, className }) => {
  return (
    <img src={image} className={classNames(className, classes.gallery_img)} />
  );
};
