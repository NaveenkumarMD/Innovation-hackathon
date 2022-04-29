import React, { useEffect, useState } from "react";
import { MdExpandMore } from "react-icons/md";
import "../Styles/dashboardCard.css";
import { db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";

function Userdahcard() {
  const [appliedDocs, setAppliedDocs] = useState([]);
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
        setAppliedDocs(
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
    <div>
      <div className="qcontainer">
        <div className="qtitle">Applied documents</div>
        {appliedDocs.length > 0 && (
          <div className="qcontent">
            {appliedDocs.map(
              (doc, index) =>
                index < 3 && (
                  <div className="qcard">
                    <div className="qleft">
                      <div
                        style={{ marginRight: ".3em" }}
                      >{`${doc.docId} - `}</div>
                      <div>{doc.name}</div>
                    </div>
                    <div className="qbutton">View</div>
                  </div>
                )
            )}
            <div className="qmore">
              More
              <MdExpandMore size={24} color="#555" />
            </div>
          </div>
        )}
        {appliedDocs.length > 0 || (
          <div style={{ margin: "2em" }}>No Applied Documents Found</div>
        )}

        <div className="qtitle">Signed documents</div>
        {signedDocs.length > 0 && (
          <div className="qcontent">
            {signedDocs.map(
              (doc, index) =>
                index < 3 && (
                  <div className="qcard">
                    <div className="qleft">
                      <div
                        style={{ marginRight: ".3em" }}
                      >{`${doc.docId} - `}</div>
                      <div>{doc.name}</div>
                    </div>
                    <div className="qbutton">View</div>
                  </div>
                )
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
                index < 3 && (
                  <div className="qcard">
                    <div className="qleft">
                      <div
                        style={{ marginRight: ".3em" }}
                      >{`${doc.docId} - `}</div>
                      <div>{doc.name}</div>
                    </div>
                    <div className="qbutton">View</div>
                  </div>
                )
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
    </div>
  );
}

export default Userdahcard;
