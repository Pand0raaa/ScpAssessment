import React from "react";
import scp006Data from "./SCP006.json";
import image from "./images/SCP006.jpg";

function Scp_006() {
  const scp006 = scp006Data[0];
  return (
    <div className="container">
      <div className="card-body">
        <img src={image} className="scp005" alt="scp005" />

        <div>
          <h2>SCP-006 - Object Class: {scp006.ObjectClass}</h2>

          <h3>Special Containment Procedures:</h3>
          <ul>
            {scp006.SpecialContainmentProcedures.map((procedure, index) => (
              <li key={index}>{procedure}</li>
            ))}
          </ul>

          <h3>Description:</h3>
          <ul>
            {scp006.Description.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Scp_006;
