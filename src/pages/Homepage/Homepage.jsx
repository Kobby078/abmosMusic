import "./Homepage.css";
import "../../index.css";
import blend from "../../images/blend.png";
import { FaRegCirclePlay, FaLinkedin } from "react-icons/fa6";
import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from "react-icons/ri";

export const Homepage = () => {
  return (
    <section className="h-wrapper">
      <div className="b-image">
        <img src={blend} alt="bg-image" />
      </div>

      <div className="flexCenter paddings h-container">
        <div className="flexColStart hLeft">
          <img src="./alorgHp.png" alt="alorg-name" />
          <span className="flexCenter innerWidth lightText">
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Suspendisse vitae ligula placerat, <br />
            eleifend ex non, vehicula libero. Suspendisse eget <br />
            tellus lectus.
          </span>
          <span className="flexCenter innerWidth hButtons">
            <button>
              <a href="">Get Started</a>
            </button>
            <button>
              <a
                href="https://youtube.com"
                target="_blank"
                className="flexCenter"
                rel="noreferrer"
              >
                <FaRegCirclePlay size={30} />
                <p>Watch Video</p>
              </a>
            </button>
          </span>
        </div>

        <div className="hRight">
          <div>
            <img src="./clearblend.png" alt="Artist" />
          </div>
        </div>
      </div>
      <div className="flexStart hFooter">
        <a href="">
          <RiFacebookFill size={30} />
        </a>
        <a href="">
          <RiTwitterFill size={30} />
        </a>
        <a href="">
          <FaLinkedin size={30} />
        </a>
        <a href="">
          <RiInstagramFill size={30} />
        </a>
      </div>
    </section>
  );
};
