import "./Contact.css";
import { FaPhoneVolume, FaLocationDot, FaLinkedin } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from "react-icons/ri";

export const Contact = () => {
  return (
    <section className="flexColCenter c-wrapper">
      <div className="flexCenter paddings c-container">
        <div className="flexColStart paddings cLeft">
          <div className="flexColStart headContent">
            <span>Contact Information</span>
            <span>Say something to start a live chat!</span>
          </div>
          <div className="flexColStart centerContent">
            <span className="flexStart">
              <FaPhoneVolume className="cIcons" />
              <a href="tel:++1012 3456 789">+1012 3456 789</a>
            </span>
            <span className="flexStart">
              <CiMail className="cIcons" />
              <a href="mailto:demo@gmail.com">demo@gmail.com</a>
            </span>
            <span className="flexStart">
              <FaLocationDot className="cIcons" />
              <p>
                132 Dartmouth Street Boston, <br />
                Massachusetts 02156 United States
              </p>
            </span>
          </div>
          <div className="flexStart footContent">
            <RiFacebookFill className="cIcons" />
            <RiTwitterFill className="cIcons" />
            <FaLinkedin className="cIcons" />
            <RiInstagramFill className="cIcons" />
          </div>
        </div>
        <div className="cRight">
          <div className="inputForms">
            <div className="flexCenter paddings cForms">
              <span className="flexColStart">
                <p>First Name</p>
                <input type="text" name="firstName" />
              </span>
              <span>
                <p>Last Name</p>
                <input type="text" name="lastName" />
              </span>
            </div>
            <div className="flexCenter paddings cForms">
              <span className="flexColStart">
                <p>Email</p>
                <input type="text" name="email" />
              </span>
              <span>
                <p>Phone Number</p>
                <input type="text" name="number" />
              </span>
              <span className="flexColStart commentArea">
                <p>Write a comment</p>
                <input
                  type="text"
                  name="comment"
                  placeholder="Write your comment here"
                  className="commentInput"
                />

                <span className="flexEnd">
                  <button>
                    <a href="mailto:">Send Message</a>
                  </button>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flexColStart cFooter">
        <div className="flexCenter innerWidth cFooterText">
          <span className="flexColStart">
            <p className="orangeText">Services</p>
            <ul className="lightText">
              <li>Brand Collaboration</li>
              <li>Music Licensing</li>
              <li>Content Production</li>
              <li>Performance & Appearance</li>
            </ul>
          </span>

          <span className="flexColStart">
            <p className="orangeText">Company</p>
            <ul className="lightText">
              <li>Patnership</li>
              <li>Social Media</li>
              <li>About Company</li>
              <li>Contact</li>
            </ul>
          </span>

          <span className="flexColStart">
            <p className="orangeText">About Us</p>
            <span className="lightText">
              Interact with us and lets <br />
              kickstart your music
              <br /> journey.
            </span>
            <span className="lightText">
              <a href="tel:+(021) 098 734 332">(021) 098 734 332</a>
            </span>
            <span className="lightText">
              <a href="mailto:info@adjcleaning@gmail.com">
                info@adjcleaning@gmail.com
              </a>
            </span>
          </span>
        </div>

        <div className="flexCenter paddings lightText cFooterNav">
          <span>abmosmusic</span>
          <span>Abmosmusic @ 2022 all rights reserved</span>
        </div>
      </div>
    </section>
  );
};
