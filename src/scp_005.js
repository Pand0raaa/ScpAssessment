import React from "react";
import scp005Data from "./SCP005.json";
import image from "./images/SCP-005.jpg";

function Scp_005() {
  const scp005 = scp005Data[0];
  return (
    <div className="container">
      <div className="card-body">
        <img src={image} className="scp005" alt="scp005" />
        
        <div>
          <h2>SCP-005 - Object Class: {scp005.ObjectClass}</h2>
          <h3>Special Containment Procedures:</h3>
          <ul>
            {scp005.SpecialContainmentProcedures.map((procedure, index) => (
              <li key={index}>{procedure}</li>
            ))}
          </ul>
          <h3>Description:</h3>
          <ul>
            {scp005.Description.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
          <h3>Additional Notes:</h3>
          <ul>
            {scp005.AdditionalNotes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
          <h3>Appendix A:</h3>
          <ul>
            {scp005.AppendixA.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Scp_005;
