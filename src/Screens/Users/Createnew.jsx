import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";

function Createnew() {
  const [docData, setDocData] = useState({
    name: "",
    description: "",
    docId: "",
    docType: "",
    docFile: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "docFile")
      setDocData({ ...docData, [e.target.name]: e.target.files[0] });
    else setDocData({ ...docData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(docData);
  }, [docData]);

  return (
    <div>
      <Navbar logged="true" />
      <div id="form">
        <h1>NEW DOCUMENT</h1>
        <div class="form-control">
          <label for="name" id="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            placeholder="Enter the document name"
          />
        </div>

        <div class="form-control">
          <label for="description" id="des">
            Description
          </label>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            id="des"
            placeholder="Enter the description"
          ></input>
        </div>

        <div class="form-control">
          <label for="id" id="id">
            ID
          </label>
          <input
            type="text"
            id="id"
            name="docId"
            placeholder="Enter your Document id"
            onChange={handleChange}
          />
        </div>

        <div class="form-control">
          <label for="type" id="type">
            Document Type
          </label>
          <select name="docType" id="type" onChange={handleChange}>
            <option value="-1" selected>
              Type
            </option>
            <option value="pdf">pdf</option>
            <option value="word">word</option>
            <option value="image">image </option>
            <option value="other">other </option>
          </select>
        </div>
        <div class="form-control">
          <label for="docFile">Upload</label>
          <input
            type="file"
            id="myfile"
            name="docFile"
            onChange={handleChange}
          />
        </div>
        <div class="btn">
          <button
            type="submit"
            value="submit"
            class="align"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Createnew;
