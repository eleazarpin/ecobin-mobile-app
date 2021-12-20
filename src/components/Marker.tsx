import React from "react";
import "./Marker.css";

const Marker = (props: any) => {
  const { color, name } = props;
  return (
    <React.Fragment>
      {/* <div
        style={{
          color: "black",
          padding: "15px 10px",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {name}
      </div> */}
      <div>
        <div
          className="pin bounce"
          style={{ backgroundColor: color, cursor: "pointer" }}
          title={name}
        />
        <div className="pulse" />
      </div>
    </React.Fragment>
  );
};

export default Marker;
