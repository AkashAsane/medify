import Button from "../Button/button";
import styles from "./search.module.css";
import doctor from "../../Assest/Doctor.png";
import labs from "../../Assest/ae.png";
import hospital from "../../Assest/Hospital.png";
import store from "../../Assest/e.png";
import ambulance from "../../Assest/h.png";
import { React, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SnackbarProvider, enqueueSnackbar, useSnackbar } from "notistack";
import search from "../../Assest/Search.png";
import { IoMdSearch } from "react-icons/io";

export default function Searchbox({newwrap = "wrapper1",  newsearch = "searchwrapper",}) {
  const navigate = useNavigate();
  const location = useLocation();

  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [statesList, setStatesList] = useState([]);
  const [citiesList, setCitiesList] = useState([]);

  const{enqueueSnackbar}=useSnackbar();

  useEffect(() => {
    fetch("https://meddata-backend.onrender.com/states")
      .then((response) => response.json())
      .then((data) => setStatesList(data))
      .catch((error) => console.error("Error fetching states:", error));
  }, []);

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setState(selectedState);

    fetch(`https://meddata-backend.onrender.com/cities/${selectedState}`)
      .then((response) => response.json())
      .then((data) => setCitiesList(data))
      .catch((error) => console.error("Error fetching cities:", error));
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (state && city) {
      navigate(`/search?state=${state}&city=${city}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      enqueueSnackbar("Please enter both fields",{variant:"error"});
    }
  };

  return (
    <div
      className={`${styles.searchwrapper} ${newsearch && styles[newsearch]}`}
    >
      <form onSubmit={handleSearchClick}>
      <div id="state" className={`${styles.wrapper1} ${newwrap && styles[newwrap]}`}>
  <select id="state-select" value={state} onChange={handleStateChange}>
    <option value="">State</option>
    {statesList.map((state) => (
      <option key={state} value={state}>
        {state}
      </option>
    ))}
  </select>
</div>

<div id="city" className={`${styles.wrapper1} ${newwrap && styles[newwrap]}`}>
  <select id="city-select" value={city} onChange={(e) => setCity(e.target.value)}>
    <option value="">City</option>
    {citiesList.map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ))}
  </select>
</div>

          <Button style="searchbtn" type="submit">
            Search
          </Button>
        

        {location.pathname !== "/search" && (
          <div className={styles.container}>
            <p className={styles.divp}>You may be looking for</p>
            <div className={styles.card}>
              <div className={styles.cards}>
                <img src={doctor} alt="logo" />
                <p>Doctors</p>
              </div>
              <div className={styles.cards}>
                <img src={labs} alt="logo" />
                <p>Labs</p>
              </div>
              <div className={styles.cards}>
                <img src={hospital} alt="logo" />
                <p>Hospitals</p>
              </div>
              <div className={styles.cards}>
                <img src={store} alt="logo" />
                <p>Medical Store</p>
              </div>
              <div className={styles.cards}>
                <img src={ambulance} alt="logo" />
                <p>Ambulance</p>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
