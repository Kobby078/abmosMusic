import './Services.css'
import { IoDiscOutline, IoVolumeHigh } from "react-icons/io5";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { MdOutlineSpeaker } from "react-icons/md";

export const Services = () => {
  return (
    <>
      <img src="./servicesbg.png" alt="bg" className="aboutBg"/>
      <section className="flexCenter s-wrapper">
        <div className="flexColCenter s-container">

          <div className="flexColCenter s-text">
            <span className="orangeText">
              Our Services
            </span>
            <span className="primaryText">
              Crafting Hits, Empowering Artists: <br />
              Our Range of Specialized Offerings
            </span>
            <span className="lightText s-lightText">
              Embark on a dynamic collaboration with Abmosmusic
            </span>
            <button className="button">
              Start Collaborating
            </button>
          </div>

          <div className="flexCenter s-cardWrapper">
            <div className="flexColCenter paddings s-card">
              <IoDiscOutline color="white" size={30}/>
              <span className="flexColCenter s-cardText">
                <span className="secondaryText">
                  Brand Collaboration
                </span>
                <span className="lightText">
                  Enhance impact <br /> 
                  through strategic brand <br /> 
                  partnerships
                </span>
              </span>
            </div>
            <div className="flexColCenter paddings s-card">
              <BsMusicNoteBeamed color="white" size={30}/>
              <span className="flexColCenter s-cardText">
                <span className="secondaryText">
                  Music <br /> Licensing
                </span>
                <span className="lightText">
                  Expand reach  <br /> 
                  through commercial and film <br /> 
                  placements. 
                </span>
              </span>
            </div>
            <div className="flexColCenter paddings s-card">
              <IoVolumeHigh color="white" size={30}/>
              <span className="flexColCenter s-cardText">
                <span className="secondaryText">
                  Content <br /> Production
                </span>
                <span className="lightText">
                  Bring artistry to  <br /> 
                  life with compelling visual <br /> 
                  storytelling
                </span>
              </span>
            </div>
            <div className="flexColCenter paddings s-card">
              <MdOutlineSpeaker color="white" size={30}/>
              <span className="flexColCenter s-cardText">
                <span className="secondaryText">
                  Performance <br />& Appearance
                </span>
                <span className="lightText">
                  Elevate stage     <br /> 
                  presence and visual    <br /> 
                  identity
                </span>
              </span>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}
