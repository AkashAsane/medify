import React from "react";
import { Typography, Tabs, Tab } from "@mui/material";
import dayjs from "dayjs";
import styles from "./tabs.module.css";

const timeSlots = {
  morning: ["8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:30 AM"],
  afternoon: ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM"],
  evening: ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM"],
};

export default function Tabcomponent({ onBooking }) {
  const [value, setValue] = React.useState(0);
  const [selectedSlot, setSelectedSlot] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelectedSlot(null);
  };

  const generateDates = () => {
    const dates = [];
    const today = dayjs();
    let currentDate = today;

    for (let i = 0; i < 7; i++) {
      dates.push(currentDate.format("ddd, DD MMM"));
      currentDate = currentDate.add(1, "day");
    }

    return dates;
  };

  const dates = generateDates();

  const handleSlotSelection = (date, slot) => {
    const slotData = { date, slot };
    setSelectedSlot(slotData);
    onBooking(slotData);
  };

  return (
    <div className={styles.tabwrapper}>
      <Tabs value={value} onChange={handleChange} variant="scrollable">
        {dates.map((date, index) => (
          <Tab
            key={index}
            label={
              <div>
                <div>{date}</div>
                <div>
                  <p> 15 slots aviable</p>
                </div>
              </div>
            }
            className={styles.dates}
          />
        ))}
      </Tabs>

      <div className={styles.slots}>
        {["morning", "afternoon", "evening"].map((period) => (
          <div className={styles.day} key={period}>
            <Typography style={{ marginRight: "40px" }} variant="h6">
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </Typography>
            <div className={styles.time}>
              {timeSlots[period].map((slot, index) => (
                <div
                  key={index}
                  className={styles.slotwrapper}
                  onClick={() => handleSlotSelection(dates[value], slot)}
                  style={{
                    backgroundColor:
                      selectedSlot?.slot === slot &&
                      selectedSlot?.date === dates[value]
                        ? "primary.main"
                        : "rgba(240, 240, 245, 1)",
                    color:
                      selectedSlot?.slot === slot &&
                      selectedSlot?.date === dates[value]
                        ? "black"
                        : "rgba(42, 167, 255, 1)",
                    cursor: "pointer",
                    textAlign: "center",
                    borderRadius: "4px",
                    margin: "4px",
                  }}
                >
                  <div className={styles.slotwrap}>{slot}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
