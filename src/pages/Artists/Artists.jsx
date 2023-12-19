import ArtistCard from '../../component/ArtistCard/ArtistCard'
import './Artists.css'
import 'swiper/css'



export const Artists = () => {


  return (
      <section className="flexCenter ar-wrapper">
        <div className="flexColCenter ar-container">
          <div className="flexCenter arHeadText">
            <span className="primaryText">
              Meet the Faces Behind <br/> Abmosmusic
            </span>
            <span>
              <span className="flexColStart ltHeadTxt">
                <p>Passionate Professionals Shaping the Music Landscape</p>
                <p>Meet Our Professional Team</p>
              </span>
            </span>
          </div>

          <ArtistCard />

        </div>
          <div className="flexColCenter ar-footer">
            <span>Are You Ready To Work With Us Now?</span>
            <span>Join Us Today and Let&apos;s craft our music odyssey  <br />together!</span>
            <button>
              <a href="../Contact/Contact.jsx">Collaborate With Us</a>
            </button>
          </div>
      </section>
  )
}
