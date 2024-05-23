import styles from "./navbar.module.css";
import navbarlogo from "../../Assest/navbarlogo.png";
import { Outlet, Link } from "react-router-dom";
import Button from "../Button/button";
import { useLocation } from "react-router-dom";
import logo from "../../Assest/navlogo.png"

export default function Navbar() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  return (
    <div className="bodydiv">
      <p className={styles.header}>
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </p>

      
      <nav className={styles.navbar}>
        <Link to="/">
          <img src={logo} alt="not found" className={styles.logo} />
        </Link>

        <ul>
          <li>
            <Link>Find Doctors</Link>
          </li>
          <li>
            <Link>Hospitals</Link>
          </li>
          <li>
            <Link>Medicine</Link>
          </li>
          <li>
            <Link>Surgeries</Link>
          </li>
          <li>
            <Link>Software for Providers</Link>
          </li>
          <li>
            <Link>Facilites</Link>
          </li>
          <li>
            <Link  to="/mybookings"><Button>My Boookings</Button></Link>
          </li>
        </ul>
      </nav>


      {!isLandingPage && <div className={styles.bottom}></div>}
    </div>
  );
}
