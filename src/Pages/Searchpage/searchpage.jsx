import Navbar from "../../Components/Navbar/navbar";
import Searchbox from "../../Components/Search/search";
import styles from "./searchpage.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import okicon from "../../Assest/ok.png";
import hospitalimg from "../../Assest/hospitallogo.png";
import { AiOutlineLike } from "react-icons/ai";
import Button from "../../Components/Button/button";
import Tabcomponent from "../../Components/Tabs/tabs";
import Footer from "../../Components/Common/Footer/footer";
import { SnackbarProvider, enqueueSnackbar, useSnackbar } from "notistack";

export default function Searchpage() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const city = searchParams.get("city");
  const state = searchParams.get("state");

  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookedSlots, setBookedSlots] = useState(() => {
    const savedSlots = localStorage.getItem("bookedSlots");
    return savedSlots ? JSON.parse(savedSlots) : [];
  });

  useEffect(() => {
    if (city && state) {
      axios
        .get(
          `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
        )
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }
  }, [city, state]);

  const handleBookVisit = (hospital) => {
    if (selectedHospital && selectedSlot) {
      const newBooking = {
        hospital: selectedHospital,
        slot: selectedSlot,
      };
      const updatedSlots = [...bookedSlots, newBooking];
      setBookedSlots(updatedSlots);
      localStorage.setItem("bookedSlots", JSON.stringify(updatedSlots));
      enqueueSnackbar(
        `Appointment booked on ${selectedSlot.date} ${selectedSlot.slot}`,
        { variant: "success" }
      );
      setSelectedSlot(null);
      setSelectedHospital(null);
    } else {
      setSelectedHospital(hospital);
    }
  };

  const handleSlotBooking = (slot) => {
    setSelectedSlot(slot);
  };

  const navigateToBookings = () => {
    navigate("/mybookings");
  };

  console.log("Data state:", data);

  return (
    <div className={styles.searchWrapper}>
      <Navbar />
      <div className={styles.bar}>
        <Searchbox newwrap="searchwrap" newsearch="boxsearch" />
      </div>
      <div className={styles.results}>
        <h3>
          {data.length} Medical Centers Available in {state}
        </h3>
        <span className={styles.resultspan}>
          <img src={okicon} alt="null" />
          Book Appointments with Minimum wait-time & verified doctor details
        </span>
        {data.length > 0 ? (
          data.map((hospital, index) => (
            <div key={index} className={styles.resultItem}>
              <div className={styles.hospitaldiv}>
                <div className={styles.hospitaldivimg}>
                  <img src={hospitalimg} alt="" />
                </div>
                <div className={styles.hospitaldetails}>
                  <h3>{hospital["Hospital Name"]}</h3>
                  <h5>
                    {hospital.City}, {hospital.State}
                  </h5>
                  <p>{hospital["Hospital Type"]}</p>
                  <p className={styles.p}>
                    <span className={styles.free}>FREE</span>
                    <span className={styles.currency}> ₹500 </span> Consultation
                    fee at clinic
                  </p>
                  <div className={styles.ratingicon}>
                    <AiOutlineLike />
                    {hospital["Hospital overall rating"]}
                  </div>
                </div>

                <div className={styles.hospitaldetails2}>
                  <p>Available Today</p>
                  <button
                    className={styles.bookbtn}
                    onClick={() => handleBookVisit(hospital)}
                  >
                    {selectedHospital === hospital && selectedSlot
                      ? "Confirm Booking"
                      : "Book Free Center Visit"}
                  </button>
                </div>
              </div>
              {selectedHospital === hospital && (
                <div className={styles.tabcomponent}>
                  <Tabcomponent onBooking={handleSlotBooking} />
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>

      <Footer />
    </div>
  );
}
