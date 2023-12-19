import './About.css'
import { FaCircleCheck } from "react-icons/fa6";


export const About = () => {
  return (
    <>
      <img src="./aboutbg.png" alt="bg" className="aboutBg"/>
      <section className="flexCenter a-wrapper">
        <div className=" innerWidth flexCenter a-container">

          {/* left side */}
          <div className="flexCenter a-left">
            <div className="a-imageSmall pos1">
              <img src="./cheer.png" alt="cheer" className='innerWidth'/>
            </div>
            <div className="a-imageBig">
              <img src="./asianc.png" alt="asianc" />
            </div>
            <div className="a-imageSmall pos2">
              <img src="./mic.png" alt="mic" className='innerWidth'/>
            </div>
          </div>

          {/* right side */}
          <div className="flexColStart a-right">
            <div className="flexColStart a-heading">
              <span className="primaryText">
                Elevating Rhythms: The <br /> 
                Essence of Abmosmusic.
              </span>
              <span className="lightText">
                Crafting Timeless Soundscapes, One Note at a <br /> 
                Time & Charting New Sonic Territories
              </span>
            </div>
            <div className="flexColStart a-panel">
              <div className="flexStart panel">
                <span className="checkSvg">
                  <FaCircleCheck color='white' size={28}/>
                </span>
                <span className="flexColStart panelText">
                  <p className='secondaryText'>Our Global Studio</p>
                  <p className='lightText'>
                    A team of diverse musicians and talented <br />
                    producers creating dance-worthy tracks.
                  </p>
                </span>
              </div>
              <div className="flexStart panel">
                <span className="checkSvg">
                  <FaCircleCheck color='white' size={28}/>
                </span>
                <span className="flexColStart panelText">
                  <p className='secondaryText'>Our Global Studio</p>
                  <p className='lightText'>
                    A team of diverse musicians and talented <br />
                    producers creating dance-worthy tracks.
                  </p>
                </span>
              </div>
              <div className="flexStart panel">
                <span className="checkSvg">
                  <FaCircleCheck color='white' size={28}/>
                </span>
                <span className="flexColStart panelText">
                  <p className='secondaryText'>Our Global Studio</p>
                  <p className='lightText'>
                    A team of diverse musicians and talented <br />
                    producers creating dance-worthy tracks.
                  </p>
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
