import React, { useState } from "react";
import { Document, Page, setPageNumber } from "react-pdf";
import Navbar from "../../Components/Navbar";
function Viewdoc() {
  const [numPages, setNumpages] = useState(null);
  const [pageNumber, setpageNumber] = useState(1);
  const onloadsuccess = ({ numpages }) => {
    setNumpages(numpages);
  };
  return (
    <div>
      <Navbar logged="true" sign="true" />
      <object
        data="https://firebasestorage.googleapis.com/v0/b/archive-39cf2.appspot.com/o/19CS097%20NAVEENKUMAR%20M%20-%20Experiment%20No%20_%209%20%20%20%20%20%20%20%20%20%20Page%20replacement%20policy%20(1).pdf?alt=media&token=6333cd95-ad6a-43a7-be57-68a67ef09278"
        type="application/pdf"
        width="100%"
        height="900px"
      ></object>
    </div>
  );
}

export default Viewdoc;
