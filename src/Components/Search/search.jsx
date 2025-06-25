import Button from "../Button/button";
import styles from "./search.module.css";
import doctor from "../../Assest/Doctor.png";
import labs from "../../Assest/ae.png";
import hospital from "../../Assest/Hospital.png";
import store from "../../Assest/e.png";
import ambulance from "../../Assest/h.png";
import { React, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

export default function Searchbox({ newwrap = "wrapper1", newsearch = "searchwrapper" }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [statesList, setStatesList] = useState([]);
  const [citiesList, setCitiesList] = useState([]);

  const { enqueueSnackbar } = useSnackbar();

  // Fetch states on component mount
  useEffect(() => {
    fetch("https://meddata-backend.onrender.com/states")
      .then((response) => response.json())
      .then((data) => setStatesList(data))
      .catch((error) => console.error("Error fetching states:", error));
  }, []);

  // Fetch cities when a state is selected
  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setState(selectedState);
    setCity(""); // Clear the city dropdown

    if (selectedState) {
      fetch(`https://meddata-backend.onrender.com/cities/${selectedState}`)
        .then((response) => response.json())
        .then((data) => setCitiesList(data))
        .catch((error) => console.error("Error fetching cities:", error));
    } else {
      setCitiesList([]); // Clear cities list if no state is selected
    }
  };

  // Handle search button click
  const handleSearchClick = (e) => {
    e.preventDefault();
    if (state && city) {
      navigate(`/search?state=${state}&city=${city}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      enqueueSnackbar("Please select both state and city.", { variant: "error" });
    }
  };

  return (
    <div className={`${styles.searchwrapper} ${newsearch && styles[newsearch]}`}>
      <form onSubmit={handleSearchClick}>
        <div
  id="state"
  className={`${styles.wrapper1} ${newwrap && styles[newwrap]}`}
>
  <label htmlFor="stateSelect">State</label>
  <select
    id="stateSelect"
    value={state}
    onChange={handleStateChange}
  >
    <option value="">Select State</option>
    {statesList.map((state) => (
      <option key={state} value={state}>
        {state}
      </option>
    ))}
  </select>
</div>

<div
  id="city"
  className={`${styles.wrapper1} ${newwrap && styles[newwrap]}`}
>
  <label htmlFor="citySelect">City</label>
  <select
    id="citySelect"
    value={city}
    onChange={(e) => setCity(e.target.value)}
  >
    <option value="">Select City</option>
    {citiesList.map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ))}
  </select>
</div>


          {/* Search Button */}
          <Button style="searchbtn" type="submit">
            Search
          </Button>
        

        {/* Additional Suggestions */}
        {location.pathname !== "/search" && (
          <div className={styles.container}>
            <p className={styles.divp}>You may be looking for</p>
            <div className={styles.card}>
              {[doctor, labs, hospital, store, ambulance].map((icon, index) => (
                <div key={index} className={styles.cards}>
                  <img src={icon} alt={`option-${index}`} />
                  <p>{["Doctors", "Labs", "Hospitals", "Medical Store", "Ambulance"][index]}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
