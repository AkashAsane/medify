import React, { useState } from "react";
import styles from "./booking.module.css";
import Navbar from "../../Components/Navbar/navbar";
import hospitalimg from "../../Assest/hospitallogo.png";
import health from "../../Assest/health.png";
import Footer from "../../Components/Common/Footer/footer";
import Button from "../../Components/Button/button";
import { AiOutlineLike } from "react-icons/ai";

export default function MyBookings() {
  const [bookedSlots, setBookedSlots] = useState(
    JSON.parse(localStorage.getItem("bookedSlots")) || []
  );
 
 

  const handleCancelBooking = (index) => {
    const updatedSlots = bookedSlots.filter((_, i) => i !== index);
    setBookedSlots(updatedSlots);
    localStorage.setItem("bookedSlots", JSON.stringify(updatedSlots));
  };

  return (
    <div className={styles.wrapper1}>
      <Navbar />

      <h1 className={styles.titlebook}>My Bookings</h1>
      <div className={styles.searchbar}>
        <input
          type="text"
          placeholder="Search by hospital"
          className={styles.searchinput}
        />
        <Button>Search</Button>
      </div>

      <div className={styles.wrapper2}>
        <div className={styles.bookingsWrapper}>
          {bookedSlots.length > 0 ? (
            bookedSlots.map((booking, index) => (
              <div key={index} className={styles.bookingCard}>
                <div className={styles.bookingimage}>
                  <img src={hospitalimg} alt="Hospital Logo" />
                </div>
                <div className={styles.bookingdetails}>
                  <h3>{booking.hospital["Hospital Name"]}</h3>
                  <p
                    style={{
                      color: "rgba(65, 65, 70, 1)",
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: "800",
                      marginTop: "10px",
                    }}
                  >
                    {booking.hospital.City}, {booking.hospital.State}
                  </p>
                  <p>{booking.hospital["Hospital Type"]}</p>
                  <div className={styles.ratingicon}>
                    <AiOutlineLike />
                    {booking.hospital["Hospital overall rating"]}
                  </div>
                </div>

                <div className={styles.cancel}>
                  <div className={styles.bookingslots}>
                    <p className={styles.slot1}>{booking.slot.slot}</p>
                    <p className={styles.slot2}>{booking.slot.date}</p>
                  </div>
                  <Button
                    style="cancelbtn"
                    onClick={() => handleCancelBooking(index)}
                  >
                    Cancel Booking
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p>No bookings found</p>
          )}
        </div>
        <img className={styles.image} src={health} alt="Health" />
      </div>

      <Footer />
    </div>
  );
}
