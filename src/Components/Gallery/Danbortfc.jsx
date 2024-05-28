import React from "react";
import { Link } from "react-router-dom";
// import { danbort } from "../../assets/Danbort FC/7bd25621-eb01-4175-a0f4-8f40a0dc5fcd.jpeg";
import first from "../../assets/Danbort FC/1.jpeg";
import first2 from "../../assets/Danbort FC/2.jpeg";
import first3 from "../../assets/Danbort FC/3.jpeg";
import first4 from "../../assets/Danbort FC/4.jpeg";
import first5 from "../../assets/Danbort FC/5.jpeg";
import first6 from "../../assets/Danbort FC/6.jpeg";
import first7 from "../../assets/Danbort FC/7.jpeg";
import first8 from "../../assets/Danbort FC/8.jpeg";
import first9 from "../../assets/Danbort FC/9.jpeg";
import first10 from "../../assets/Danbort FC/10.jpeg";
import first11 from "../../assets/Danbort FC/11.jpeg";
import first12 from "../../assets/Danbort FC/12.jpeg";
import first13 from "../../assets/Danbort FC/13.jpeg";
import first14 from "../../assets/Danbort FC/14.jpeg";
import first15 from "../../assets/Danbort FC/15.jpeg";
import first16 from "../../assets/Danbort FC/16.jpeg";
import first17 from "../../assets/Danbort FC/17.jpeg";
import first18 from "../../assets/Danbort FC/18.jpeg";
import first19 from "../../assets/Danbort FC/19.jpeg";
import first20 from "../../assets/Danbort FC/20.jpeg";
import first21 from "../../assets/Danbort FC/21.jpeg";
import { ArrowLeftOutlined } from "@ant-design/icons";
const Danbortfc = () => {
  return (
    <div>
      <div className="trying">
        <Link to='/gallery'>
          <ArrowLeftOutlined/>
        </Link>
        </div>
      <div className="arrow-holder">
        {/* <div className="arrow2">
          <Link to="/gallery ">
            <div className="ppp">
              <ArrowLeftOutlined />
            </div>
          </Link>
        </div> */}

        
      </div>
      <h2 className="gallery">Danbort FC</h2>
      <div className="dbbb">
        <div className="danbort-holder2">
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
            <div className="pic-holder">
              <img src={first13} alt="" className="danbort-pic" />
            </div>
            <div className="pic-holder">
              <img src={first14} alt="" className="danbort-pic" />
            </div>
            <div className="pic-holder">
              <img src={first15} alt="" className="danbort-pic" />
            </div>
            <div className="pic-holder">
              <img src={first16} alt="" className="danbort-pic" />
            </div>
            <div className="pic-holder">
              <img src={first17} alt="" className="danbort-pic" />
            </div>
            <div className="pic-holder">
              <img src={first18} alt="" className="danbort-pic" />
            </div>
            <div className="pic-holder">
              <img src={first19} alt="" className="danbort-pic" />
            </div>
            <div className="pic-holder">
              <img src={first20} alt="" className="danbort-pic" />
            </div>
            <div className="pic-holder">
              <img src={first21} alt="" className="danbort-pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Danbortfc;
