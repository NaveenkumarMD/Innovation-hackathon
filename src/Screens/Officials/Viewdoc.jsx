import React, { useState } from "react";
import { Document, Page, setPageNumber } from "react-pdf";
import Navbar from "../../Components/Navbar";
import { ref, uploadBytes, uploadString } from "firebase/storage";
import { storage } from "../../firebase";
import { useLocation } from "react-router-dom";

function Viewdoc() {
  const location = useLocation();
  const docLink = location.state;
  const handlesign = () => {
    console.log("Sent to sign");

    fetch("http://localhost:4000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: { docLink },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.filename);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navbar logged="true" sign="true" handlesign={handlesign} />
      <object
        data={docLink}
        type="application/pdf"
        width="100%"
        height="700px"
      ></object>
    </div>
  );
}

export default Viewdoc;
