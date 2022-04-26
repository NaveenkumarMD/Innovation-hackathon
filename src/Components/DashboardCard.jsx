import React from "react";

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
    <div className="dashboardCardWrapper">
      <div className="header">
        <h4>{testData.tableTitle}</h4>
      </div>
      <div className="content-table">
        <div className="col-one">
          <p>{testData.tableCols[0]}</p>
          {testData.tableData.map((data) => {
            <p>{data.DocId}</p>;
          })}
        </div>
        <div className="col-two">
          <p>{testData.tableCols[1]}</p>
          {testData.tableData.map((data) => {
            <p>{data.SubmittedBy}</p>;
          })}
        </div>
        <div className="col-three">
          <p>{testData.tableCols[2]}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboardcard;
