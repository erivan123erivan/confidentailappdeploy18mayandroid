import React from "react";
import LoadingSpin from "react-loading-spin";

const Loader = ({ size }) => {
  return (
    <>
      <LoadingSpin
        duration="2s"
        width="5px"
        timingFunction="ease-in-out"
        direction="alternate"
        size={size || "20px"}
        primaryColor="#000"
        secondaryColor="gray"
        numberOfRotationsInAnimation={2}
      />
    </>
  );
};

export default Loader;
