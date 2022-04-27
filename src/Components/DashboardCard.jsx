import React from "react";
import { Link } from "react-router-dom";

import "../Styles/dashboardCard.css";

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
    <div
      className="wrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1em",
      }}
    >
      <div className="dashboardCardWrapper">
        <div className="header">
          <h4>{testData.tableTitle}</h4>
        </div>
        <div className="content-table">
          <div className="col-one col">
            <p className="col-title">{testData.tableCols[0]}</p>
            {testData.tableData.map((data) => {
              return <p classname="row">{data[testData.tableCols[0]]}</p>;
            })}
          </div>
          <div className="col-two col">
            <p className="col-title">{testData.tableCols[1]}</p>
            {testData.tableData.map((data) => {
              return <p classname="row">{data[testData.tableCols[1]]}</p>;
            })}
          </div>
          <div className="col-three col">
            <p className="col-title"> {testData.tableCols[2]}</p>
            {testData.tableData.map((data) => {
              return <p classname="row">{data[testData.tableCols[2]]}</p>;
            })}
          </div>
        </div>
        <Link to="#" className="seeAll">
          See All Documents
        </Link>
      </div>
    </div>
  );
};

export default Dashboardcard;
