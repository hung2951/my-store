import Slider from "react-slick";
import styles from "./styles.module.css";
const Banner = () => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      arrows: false,
    };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.banner_left}></div>
          <div className={styles.banner_right}>
            <Slider {...settings}>
              <div>
                <img
                  src="https://www.xtmobile.vn/vnt_upload/weblink/27desssssale-ip12serries.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://www.xtmobile.vn/vnt_upload/weblink/des-sale-soc-note-s-ser.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://www.xtmobile.vn/vnt_upload/weblink/27bn-full-iphone-14-14-4.png"
                  alt=""
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner