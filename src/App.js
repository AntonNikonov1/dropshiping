import "./App.css";
import { Gallery } from "./components/gallery/gallery";
import { Check, ShoppingCartOutlined, Star } from "@mui/icons-material";
import { Rating } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MassagerAttachments } from "./components/massager-attachments/massager-attachments";
import { useState } from "react";
import { VideoReview } from "./components/video-review/video-review";

function App() {
  const [goodsCount, setGoodsCount] = useState(1);

  return (
    <div className="container">
      <h1>
        Say Goodbye to <span className="highlighted">Muscle Pain!</span> Instant
        Relief Anytime, Anywhere
      </h1>
      <div className="flex">
        <Gallery
          images={[
            "/assets/images/main-img.png",
            "/assets/images/main-img.png",
            "/assets/images/main-img.png",
          ]}
        />

        <div className="goods_right_container">
          <div className="goods_container">
            <p className="goods_name">EaseWave</p>
            <div className="goods_status">
              <Check sx={{ fontSize: 20 }} />
              <span>in presence</span>
            </div>
          </div>
          <div className="star_container">
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.01}
              emptyIcon={
                <Star style={{ color: "#474747", fontSize: "20px" }} />
              }
              sx={{ "& .MuiRating-icon": { fontSize: "20px" } }}
              readOnly
            />
            <p className="review_amount">4.9 (214 reviews)</p>
          </div>

          <p className="price">280 zl</p>

          <div className="buttons_container">
            <div className="flex">
              <button
                disabled={goodsCount === 1}
                style={{
                  cursor: goodsCount === 1 ? "not-allowed" : "pointer",
                  opacity: goodsCount === 1 ? "0.3" : "1",
                }}
                onClick={() => setGoodsCount((prev) => prev - 1)}
                className="goods_change_amount_button"
              >
                -
              </button>
              <span className="goods_amount">{goodsCount}</span>
              <button
                className="goods_change_amount_button"
                onClick={() => setGoodsCount((prev) => prev + 1)}
              >
                +
              </button>
            </div>

            <button className="buy_button">
              <span>buy</span>
              <ShoppingCartOutlined fontSize="18px" />
            </button>
          </div>

          <p className="description_title">Designed to the smallest detail</p>
          <p className="description">
            The MASSAGE GUN-ULTRA massage gun with replaceable attachments is
            designed for comfortable and effective massage at home. This device,
            made with attention to every detail, provides deep muscle
            relaxation, helping to relieve fatigue and tension after a long day
            or intense workouts. With a powerful motor and several intensity
            modes, the MASSAGE GUN-ULTRA is ideal for both professionals and
            beginners, allowing you to customize the massage to your individual
            needs.
          </p>
        </div>
      </div>
      <MassagerAttachments />

      <h2 className="section_title">Video of usage</h2>
      <div className="video_of_usage" />

      <h2 className="section_title">Video reviews</h2>
      <VideoReview />
    </div>
  );
}

export default App;
