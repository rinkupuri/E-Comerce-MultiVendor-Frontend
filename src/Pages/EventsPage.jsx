import React from "react";
import EventsCard from "../Components/Route/Events/EventsCard";
import Layout from "../Components/Layout/Layout";
import styles from "../Styles/Style";

const EventsPage = () => {
  return (
    <Layout>
      <div className={`${styles.section}`}>
        <div className="">
          <h1 className={`${styles.heading} mt-6`}>Events</h1>
        </div>
        <EventsCard active={true} />
        <EventsCard active={true} />
      </div>
    </Layout>
  );
};

export default EventsPage;
