import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Slider from "react-slick";
import clsx from "clsx";
import { GalleryItem } from "./gallery-item";
import classes from "./gallery.module.css";

export const Gallery = ({
  images,
  thumbnailsImageClassName,
  thumbnailsImageContainerClassName,
  galleryItemProps,
  thumbnailsSettings: thumbnailsSettingsProps = {},
}) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [activeSlide, setActiveSlide] = useState(0);

  const mainGallerySettings = {
    slidesToShow: 1,
    dots: false,
    infinite: false,
    speed: 300,
    centralMode: true,
    centerPadding: "60px",
    arrows: false,
    afterChange: (index) => {
      setActiveSlide(index);
    },
  };

  const thumbnailsSettings = {
    slidesToShow: images.length >= 4 ? 4 : images.length,
    slidesToScroll: 4,
    className: "center",
    dots: false,
    infinite: false,
    speed: 300,
    arrows: false,
    focusOnSelect: true,
    ...thumbnailsSettingsProps,
    responsive: [
      ...(thumbnailsSettingsProps?.responsive || []),
      {
        breakpoint: 1799,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className={classes.container}>
      <div className={classes.main_slick_list_wrapper}>
        <Slider
          {...mainGallerySettings}
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1 != null ? slider1 : undefined)}
          className={classes.slick_list}
        >
          {images.map((item, index) => (
            <div className={classes.container} key={index}>
              <GalleryItem
                key={index}
                index={index}
                image={item}
                allFiles={images}
                {...galleryItemProps}
              />

              <button
                className={clsx(classes.button_mobile, classes.nav_left_mobile)}
                onClick={() => nav1?.slickPrev()}
              >
                <ArrowForwardIosIcon />
              </button>
              <button
                className={clsx(
                  classes.button_mobile,
                  classes.nav_right_mobile
                )}
                onClick={() => nav1?.slickNext()}
              >
                {/* <ArrowRight width={12} height={12} color={theme.colors.white} /> */}
              </button>
            </div>
          ))}
        </Slider>
      </div>
      {images.length >= 2 && (
        <div className={classes.thumbnail_container}>
          <button
            className={clsx(classes.button, classes.nav_left)}
            style={{ visibility: activeSlide === 0 ? "hidden" : "visible" }}
            onClick={() => nav1?.slickPrev()}
          >
            <ArrowBackIosIcon sx={{ color: "white", cursor: "pointer" }} />
          </button>

          <div
            className={
              thumbnailsImageContainerClassName || classes.thumbnails_gallery
            }
          >
            <Slider
              {...thumbnailsSettings}
              swipeToSlide={true}
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2 != null ? slider2 : undefined)}
            >
              {images.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  className={clsx(
                    thumbnailsImageClassName || classes.thumbnails_img_size,
                    classes.thumbnails_img,
                    index === activeSlide && classes.active_slide
                  )}
                />
              ))}
            </Slider>
          </div>

          <button
            className={clsx(classes.button, classes.nav_right)}
            style={{
              visibility:
                activeSlide === images.length - 1 ? "hidden" : "visible",
            }}
            onClick={() => nav1?.slickNext()}
          >
            <ArrowForwardIosIcon sx={{ color: "white", cursor: "pointer" }} />
          </button>
        </div>
      )}
    </div>
  );
};
