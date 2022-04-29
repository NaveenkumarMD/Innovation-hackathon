import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";
import "../Styles/dashboardCard.css";
import { MdExpandMore } from "react-icons/md";

const Dashboardcard = () => {
  const [receivedDocs, setReceivedDocs] = useState([]);
  const [signedDocs, setSignedDocs] = useState([]);
  const [rejectedDocs, setRejectedDocs] = useState([]);
  let docDetails;

  const fetchData = async () => {
    try {
      const docsData = await getDoc(
        doc(db, "docs", localStorage.getItem("email"))
      );
      if (docsData.exists() && docsData.data().userDocs.length > 0) {
        docDetails = docsData.data().userDocs;
        setReceivedDocs(
          docDetails.filter(
            (doc) => !doc.isOpened && !doc.isSigned && !doc.isRejected
          )
        );
        setSignedDocs(
          docDetails.filter(
            (doc) => doc.isOpened && doc.isSigned && !doc.isRejected
          )
        );
        setRejectedDocs(
          docDetails.filter(
            (doc) => doc.isOpened && !doc.isSigned && doc.isRejected
          )
        );
      }
    } catch (err) {
      alert("Can't fetch data at the moment");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="qcontainer">
      <div className="qtitle">Recieved documents</div>
      {receivedDocs.length > 0 && (
        <div className="qcontent">
          {receivedDocs.map(
            (doc, index) =>
              index < 3 && <Card name={doc.name} sno={doc.docId} />
          )}
          <div className="qmore">
            More
            <MdExpandMore size={24} color="#555" />
          </div>
        </div>
      )}
      {receivedDocs.length > 0 || (
        <div style={{ margin: "2em" }}>No Received Documents Found</div>
      )}
      <div className="qtitle">Signed documents</div>
      {signedDocs.length > 0 && (
        <div className="qcontent">
          {signedDocs.map(
            (doc, index) =>
              index < 3 && <Card name={doc.name} sno={doc.docId} />
          )}

          <div className="qmore">
            More
            <MdExpandMore size={24} color="#555" />
          </div>
        </div>
      )}
      {signedDocs.length > 0 || (
        <div style={{ margin: "2em" }}>No Signed Documents Found</div>
      )}
      <div className="qtitle">Rejected documents</div>
      {rejectedDocs.length > 0 && (
        <div className="qcontent">
          {rejectedDocs.map(
            (doc, index) =>
              index < 3 && <Card name={doc.name} sno={doc.docId} />
          )}

          <div className="qmore">
            More
            <MdExpandMore size={24} color="#555" />
          </div>
        </div>
      )}
      {rejectedDocs.length > 0 || (
        <div style={{ margin: "2em" }}>No Rejected Documents Found</div>
      )}
    </div>
  );
};

export default Dashboardcard;

const Card = ({ name, sno }) => {
  return (
    <div className="qcard">
      <div className="qleft">
        <div>{sno}.</div>
        <div>{name}</div>
      </div>
      <div className="qbutton">View</div>
    </div>
  );
};
