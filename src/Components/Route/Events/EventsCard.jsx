import React from "react";
import styles from "../../../Styles/Style";
import CountDown from "./CountDown.jsx";

const EventsCard = ({ active }) => {
  return (
    <div className={`${active ? "mb-12" : "unset"}`}>
      <div className="grid w-full  p-12 bg-white h-fit   place-items-center grid-cols-1 800px:grid-cols-2 gap-[10px]  pb-8 border-none">
        <div className="flex w-full">
          <img
            src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col  w-full h-full items-start">
          <div className="flex">
            <h3 className={`${styles.heading}`}>
              Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour
            </h3>
          </div>
          <div className="flex pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            nobis minima repellendus ducimus vero qui suscipit fugiat quaerat at
            odio quod nostrum neque voluptates amet impedit, necessitatibus
            consequuntur illo porro!At, neque? Vero iure, itaque corrupti
            consequatur quam quidem tempore eveniet aspernatur mollitia
            molestiae, voluptate sit numquam reiciendis ratione eum temporibus
            minima possimus ab repellat. Numquam pariatur repellat mollitia
            maiores?
          </div>
          <div className="flex  w-full items-center justify-evenly">
            <div className="flex flex-[1] items-center justify-center gap-4">
              <h2
                className={`text-[#d55b45] text-[18px]  line-through    font-[500]`}
              >
                1999$
              </h2>
              <h3 className={` font-bold text-[18px] text-[#333]`}>999$</h3>
            </div>
            <div
              className={`flex flex-[1] justify-center text-[#44b762] text-[18px]`}
            >
              72 Sold
            </div>
          </div>
          <div className="flex py-6 w-full items-center  justify-center">
            <CountDown className="" />
          </div>
          <div className="flex items-center justify-evenly gap-4 w-full  py-6">
            <button className={`${styles.button} text-white`}>
              Get Detail
            </button>
            <button className={`${styles.button} text-white`}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
