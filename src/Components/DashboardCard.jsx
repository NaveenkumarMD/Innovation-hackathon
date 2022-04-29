import React from "react";
import { Link } from "react-router-dom";

import "../Styles/dashboardCard.css";
import { MdExpandMore } from 'react-icons/md'
const Dashboardcard = () => {
  const testData = {
    tableTitle: "Submitted Documents",
    tableCols: ["DocId", "SubmittedBy", "Officer"],
    tableData: [
      {
        DocId: 234,
        SubmittedBy: "user 1",
        Officer: "Captain Naveen",
      },
      {
        DocId: 234,
        SubmittedBy: "user 1",
        Officer: "Captain Naveen",
      },
      {
        DocId: 234,
        SubmittedBy: "user 1",
        Officer: "Captain Naveen",
      },
    ],
  };

  return (

    <div className="qcontainer">
      <div className="qtitle">
        Recieved documents
      </div>
      <div className="qcontent">
        <Card name="Document 1" sno="1" />
        <Card name="Document 2" sno="2" />
        <Card name="Document 3" sno="3" />
        <div className="qmore">
          More
          <MdExpandMore size={24} color="#555" />
        </div>

      </div>
      <div className="qtitle">
        Signed documents
      </div>
      <div className="qcontent">
        <Card name="Document 1" sno="1" />
        <Card name="Document 2" sno="2" />
        <Card name="Document 3" sno="3" />
        <div className="qmore">
          More
          <MdExpandMore size={24} color="#555" />
        </div>

      </div>
      <div className="qtitle">
        Rejected documents
      </div>
      <div className="qcontent">
      <Card sno={1} name="Documentx"/>
      <Card sno={2} name="Documentx"/>
      <Card sno={3} name="Documentx"/>
   
        <div className="qmore">
          More
          <MdExpandMore size={24} color="#555" />
        </div>

      </div>
    </div>
  );
};

export default Dashboardcard;

const Card = ({name,sno}) => {
  return (
    <div className="qcard">
      <div className="qleft">
        <div>{sno}.</div>
        <div>{name}</div>
      </div>
      <div className="qbutton">View</div>
    </div>
  )
}
