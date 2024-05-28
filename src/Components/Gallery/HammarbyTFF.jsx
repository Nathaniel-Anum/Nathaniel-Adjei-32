import { Link } from "react-router-dom";
import first from "../../assets/Hammarby TFF/1.jpeg";
import first2 from "../../assets/Hammarby TFF/2.jpeg";
import first3 from "../../assets/Hammarby TFF/3.jpeg";
import first4 from "../../assets/Hammarby TFF/4.jpeg";
import first5 from "../../assets/Hammarby TFF/5.jpeg";
import first6 from "../../assets/Hammarby TFF/6.jpeg";
import first7 from "../../assets/Hammarby TFF/7.jpeg";
import first8 from "../../assets/Hammarby TFF/8.jpeg";
import first9 from "../../assets/Hammarby TFF/9.jpeg";
import first10 from "../../assets/Hammarby TFF/10.jpeg";
import first11 from "../../assets/Hammarby TFF/11.jpeg";
import first12 from "../../assets/Hammarby TFF/12.jpeg";
import first13 from "../../assets/Hammarby TFF/13.jpeg";
import first14 from "../../assets/Hammarby TFF/14.jpeg";
import first15 from "../../assets/Hammarby TFF/15.jpeg";


const HammarbyTFF = () => {
  return (
    <div>
      <Link to="/gallery ">
        <p className="ppp">Back to Gallery</p>
      </Link>
      <h2 className="gallery"> Hammarby TFF</h2>
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
          <div className="pic-holder">
            <img src={first13} alt="" className="danbort-pic" />
          </div>
          <div className="pic-holder">
            <img src={first14} alt="" className="danbort-pic" />
          </div>
          <div className="pic-holder">
            <img src={first15} alt="" className="danbort-pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HammarbyTFF;
