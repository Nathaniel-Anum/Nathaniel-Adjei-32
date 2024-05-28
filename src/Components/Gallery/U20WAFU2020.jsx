import React from "react";
import { Link } from "react-router-dom";
import first from "../../assets/U20 Wafu 2020/1.jpeg";
import first2 from "../../assets/U20 Wafu 2020/2.jpeg";
import first3 from "../../assets/U20 Wafu 2020/3.jpeg";
import first4 from "../../assets/U20 Wafu 2020/4.jpeg";
import first5 from "../../assets/U20 Wafu 2020/5.jpeg";
import first6 from "../../assets/U20 Wafu 2020/6.jpeg";
import first7 from "../../assets/U20 Wafu 2020/7.jpeg";
import first8 from "../../assets/U20 Wafu 2020/8.jpeg";
import first9 from "../../assets/U20 Wafu 2020/9.jpeg";
import first10 from "../../assets/U20 Wafu 2020/10.jpeg";
import first11 from "../../assets/U20 Wafu 2020/11.jpeg";
import first12 from "../../assets/U20 Wafu 2020/12.jpeg";

const U20WAFU2020 = () => {
  return (
    <div>
      <Link to="/gallery ">
        <p className="ppp">Back to Gallery</p>
      </Link>
      <h2 className="gallery"> U20 WAFU 2020</h2>
      <div className="dbbb">
        <div className="danbort-holder">
          <div className="pic-holder">
            <img src={first} alt="" className="danbort-pic" />
          </div>
          <div className="pic-holder">
            <img src={first2} alt="" className="danbort-pic" />
          </div>
          <div className="pic-holder">
            <img src={first3} alt="" className="danbort-pic" />
          </div>
          <div className="pic-holder">
            <img src={first4} alt="" className="danbort-pic" />
          </div>
          <div className="pic-holder">
            <img src={first5} alt="" className="danbort-pic" />
          </div>
          <div className="pic-holder">
            <img src={first6} alt="" className="danbort-pic" />
          </div>
          <div className="pic-holder">
            <img src={first7} alt="" className="danbort-pic" />
          </div>
          <div className="pic-holder">
            <img src={first8} alt="" className="danbort-pic" />
          </div>
          <div className="pic-holder">
            <img src={first9} alt="" className="danbort-pic" />
          </div>
          <div className="pic-holder">
            <img src={first10} alt="" className="danbort-pic" />
          </div>
          <div className="pic-holder">
            <img src={first11} alt="" className="danbort-pic" />
          </div>
          <div className="pic-holder">
            <img src={first12} alt="" className="danbort-pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default U20WAFU2020;
