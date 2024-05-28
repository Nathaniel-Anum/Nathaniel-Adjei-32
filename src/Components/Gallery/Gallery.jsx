import React from "react";
import "./Gallery.css";
import { Outlet, Link } from "react-router-dom";
import first from "../../assets/Danbort FC/1.jpeg";
import first1 from "../../assets/U17 2018 Wafu Tournament/1.jpeg";
import first2 from "../../assets/U20 Afcon 2019/10.jpeg";
import first3 from "../../assets/U20 Wafu 2020/1.jpeg";
import first4 from "../../assets/U20 Afcon2021/2.jpeg";
import first5 from "../../assets/U23 Afcon 2023/1.jpeg";
import first6 from "../../assets/Hammarby TFF/1.jpeg";
import first7 from "../../assets/Hammarby Fotboll/1.jpeg";

const Gallery = () => {
  return (
    <div className="gallery-component">
      <h2 className="gallery">Gallery </h2>
      <div className="text2holder">
        <div className="test2">
          <Link to="/gallery/danbort">
            <div>
              <div className="pic-holder2">
                <img src={first} className="danbort-pic2" />
              </div>
              <div>
                <p className="pp">Danbort FC</p>
              </div>
            </div>
          </Link>
          <Link to="/gallery/U172018WAFU">
            <div>
              <div className="pic-holder2">
                <img src={first1} alt="" className="danbort-pic2" />
              </div>
              <div>
                <p className="pp">U17 2018 Wafu Tournament</p>
              </div>
            </div>
          </Link>
          <Link to="/gallery/U20AFCON2019">
            <div>
              <div className="pic-holder2">
                <img src={first2} alt="" className="danbort-pic2" />
              </div>
              <div>
                <p className="pp">U2O Afon 2019</p>
              </div>
            </div>
          </Link>
          <Link to="/gallery/U20WAFU2020">
            <div>
              <div className="pic-holder2">
                <img src={first3} alt="" className="danbort-pic2" />
              </div>
              <div>
                <p className="pp">U2O WAFU 2020</p>
              </div>
            </div>
          </Link>
          <Link to="/gallery/U20AFCON2021">
            <div>
              <div className="pic-holder2">
                <img src={first4} alt="" className="danbort-pic2" />
              </div>
              <div>
                <p className="pp">U2O AFCON 2021</p>
              </div>
            </div>
          </Link>
          <Link to="/gallery/U23AFCON2023">
            <div>
              <div className="pic-holder2">
                <img src={first5} alt="" className="danbort-pic2" />
              </div>
              <div>
                <p className="pp">U23 AFCON 2023</p>
              </div>
            </div>
          </Link>
          <Link to="/gallery/HammarbyTFF">
            <div>
              <div className="pic-holder2">
                <img src={first6} alt="" className="danbort-pic2" />
              </div>
              <div>
                <p className="pp">Hammarby TFF</p>
              </div>
            </div>
          </Link>
          <Link to="/gallery/HammarbyFootboll">
            <div>
              <div className="pic-holder2">
                <img src={first7} alt="" className="danbort-pic2" />
              </div>
              <div>
                <p className="pp">Hammarby Fotboll</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Gallery;
