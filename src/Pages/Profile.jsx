import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import ProfileMenu from "../Components/Profile/ProfileMenu.jsx";
import ProfileView from "../Components/Profile/ProfileView.jsx";
import styles from "../Styles/Style";

const Profile = () => {
  const [active, setActive] = useState(1);
  return (
    <Layout>
      <div className={` ${styles.section} h-[90vh] m-6 flex`}>
        <div className="flex w-[50px] 800px:w-[335px]">
          <ProfileMenu active={active} setActive={setActive} />
        </div>
        <ProfileView active={active} />
      </div>
    </Layout>
  );
};

export default Profile;
