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
        <div className="qcard">
          <div className="qleft">
            <div>1.</div>
            <div>Naveenkumar</div>
          </div>
          <div className="qbutton">View</div>
        </div>
        <div className="qcard">
          <div className="qleft">
            <div>1.</div>
            <div>Naveenkumar</div>
          </div>
          <div className="qbutton">View</div>
        </div>
        <div className="qcard">
          <div className="qleft">
            <div>1.</div>
            <div>Naveenkumar</div>
          </div>
          <div className="qbutton">View</div>
        </div>
        <div className="qmore">
          More
          <MdExpandMore size={24} color="#555" />
        </div>

      </div>
      <div className="qtitle">
        Signed documents
      </div>
      <div className="qcontent">
        <div className="qcard">
          <div className="qleft">
            <div>1.</div>
            <div>Naveenkumar</div>
          </div>
          <div className="qbutton">View</div>
        </div>
        <div className="qcard">
          <div className="qleft">
            <div>1.</div>
            <div>Naveenkumar</div>
          </div>
          <div className="qbutton">View</div>
        </div>
        <div className="qcard">
          <div className="qleft">
            <div>1.</div>
            <div>Naveenkumar</div>
          </div>
          <div className="qbutton">View</div>
        </div>
        <div className="qmore">
          More
          <MdExpandMore size={24} color="#555" />
        </div>

      </div>
      <div className="qtitle">
        Signed documents
      </div>
      <div className="qcontent">
        <div className="qcard">
          <div className="qleft">
            <div>1.</div>
            <div>Naveenkumar</div>
          </div>
          <div className="qbutton">View</div>
        </div>
        <div className="qcard">
          <div className="qleft">
            <div>1.</div>
            <div>Naveenkumar</div>
          </div>
          <div className="qbutton">View</div>
        </div>
        <div className="qcard">
          <div className="qleft">
            <div>1.</div>
            <div>Naveenkumar</div>
          </div>
          <div className="qbutton">View</div>
        </div>
        <div className="qmore">
          More
          <MdExpandMore size={24} color="#555" />
        </div>

      </div>
    </div>
  );
};

export default Dashboardcard;
