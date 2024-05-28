import { Link } from "react-router-dom";
import first from "../../assets/U23 Afcon 2023/1.jpeg";
import first2 from "../../assets/U23 Afcon 2023/2.jpeg";
import first3 from "../../assets/U23 Afcon 2023/3.jpeg";
import first4 from "../../assets/U23 Afcon 2023/4.jpeg";
import first5 from "../../assets/U23 Afcon 2023/5.jpeg";
import first6 from "../../assets/U23 Afcon 2023/6.jpeg";
import first7 from "../../assets/U23 Afcon 2023/7.jpeg";
import first8 from "../../assets/U23 Afcon 2023/8.jpeg";
import first9 from "../../assets/U23 Afcon 2023/9.jpeg";
import first10 from "../../assets/U23 Afcon 2023/10.jpeg";
import first11 from "../../assets/U23 Afcon 2023/11.jpeg";
import first12 from "../../assets/U23 Afcon 2023/12.jpeg";
import { ArrowLeftOutlined } from "@ant-design/icons";

const U23AFCON2023 = () => {
  return (
    <div>
      <div className="trying">
        <Link to="/gallery">
          <ArrowLeftOutlined />
        </Link>
      </div>
      <h2 className="gallery"> U23 AFCON 2023</h2>
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

export default U23AFCON2023;
