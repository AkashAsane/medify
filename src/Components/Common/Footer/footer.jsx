import { useLocation } from "react-router-dom";
import styles from "./footer.module.css";
import acimage from "../../../Assest/accordain.png";
import Accordion from "../Accordain/accordain";
import app from "../../../Assest/app.png";
import logo from "../../../Assest/navlogo.png";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

export default function Footer() {
  const location = useLocation();
  const showAccordion = location.pathname !== "/mybookings";

  return (
    <div>
      {showAccordion && (
        <div className={styles.accoridan}>
          <p style={{ color: "rgba(42, 167, 255, 1)", marginTop: "50px" }}>
            Get Your Answer
          </p>
          <h1 className={styles.h1info}>Frequently Asked Questions</h1>

          <div className={styles.accordaindiv}>
            <div>
              <img src={acimage} className={styles.acimage} alt="not found" />
            </div>

            <div className={styles.Accordiontitle}>
              <Accordion title="Why choose our medical for your family?">
                <p>This is the content of section 1.</p>
              </Accordion>
              <Accordion title="Why we are different from others?">
                <p>This is the content of section 2.</p>
              </Accordion>
              <Accordion title="Trusted & experience senior care & love">
                <p>This is the content of section 3.</p>
              </Accordion>
              <Accordion title="How to get appointment for emergency cases?">
                <p>This is the content of section 3.</p>
              </Accordion>
            </div>
          </div>
        </div>
      )}

      <div className={styles.App}>
        <img src={app} alt="not found" />
      </div>

      <div className={styles.footer}>
        <div className={styles.footerdiv1}>
          <img src={logo} alt="not found" className={styles.logo} />
          <div className={styles.icon}>
            <CiFacebook />
            <FaYoutube />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
        <div className={styles.footerdiv2}>
          <div>
            <ul>
              <li>
                <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
                About Us
              </li>
              <li>
                <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
                Our Pricing
              </li>
              <li>
                <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
                Our Gallery
              </li>
              <li>
                <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
                Appointment
              </li>
              <li>
                <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
                Privacy Policy
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
                Orthology
              </li>
              <li>
                <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
                Neurology
              </li>
              <li>
                <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
                Dental Care
              </li>
              <li>
                <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
                Ophthalmology
              </li>
              <li>
                <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
                Cardiology
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
