import React from "react";
import EventsCard from "../Components/Root/EventsCard/EventsCard.jsx";
import styles from "../../../Styles/Style.js";

const Events = () => {
  return (
    <div>
      <div className={`${styles.section} py-10 `}>
        <div className={`${styles.heading}`}>
          <h3>Events</h3>
        </div>

        <EventsCard />
      </div>
    </div>
  );
};

export default Events;
