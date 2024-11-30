import React, { useState } from "react";
import classes from "./massager-attachments.module.css";

export const MassagerAttachments = () => {
  const [activeAttachmentIndex, setActiveAttachmentIndex] = useState(0);

  return (
    <div className={classes.container}>
      <img
        style={{ width: "500px", marginRight: "50px" }}
        src="/assets/images/main-img.png"
      />
      <div>
        <div className={classes.title}>Round Head Arrachment</div>
        <div className={classes.description}>
          The Round Head attachment is designed for a smooth, all-around massage
          experience. Ideal for larger muscle groups like the thighs, calves,
          and back, this attachment delivers gentle yet effective relief by
          evenly distributing pressure across the surface. Perfect for warming
          up muscles before a workout or relaxing them afterward, the Round Head
          helps relieve tension, reduce soreness, and improve overall
          circulation.
        </div>
      </div>
    </div>
  );
};
