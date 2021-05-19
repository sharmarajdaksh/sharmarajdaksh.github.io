import React from "react";

const Divider = ({ rem }) => {
  return <div style={{ height: (rem ? rem : "1") + "rem" }}></div>;
};

export default Divider;
