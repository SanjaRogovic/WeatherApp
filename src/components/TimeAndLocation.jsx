import React from "react";


const TimeAndLocation = ({ localTime, location, setLocation }) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">{localTime}</p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p
          className="text-white text-3xl font-medium"
          location={setLocation}
        ></p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
