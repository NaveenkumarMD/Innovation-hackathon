import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";

import { storage, db } from "../../firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

function Createnew() {
  const [docData, setDocData] = useState({
    name: "",
    description: "",
    docId: "",
    docType: "",
    docFile: "",
  });
  const [progresspercent, setProgresspercent] = useState(0);

  let fileUrl;

  const handleChange = (e) => {
    if (e.target.name === "docFile")
      setDocData({ ...docData, [e.target.name]: e.target.files[0] });
    else setDocData({ ...docData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!docData.docFile) return;

    const storageRef = ref(storage, `uploaded/${docData.docFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, docData.docFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert("something went wrong");
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          fileUrl = downloadURL;
          console.log(fileUrl);
          let email = localStorage.getItem("email");
          let docs;
          try {
            const docsData = await getDoc(doc(db, "docs", email));
            if (docsData.exists()) {
              docs = [
                ...docsData.data().userDocs,
                {
                  name: docData.name,
                  description: docData.description,
                  docId: docData.docId,
                  docType: docData.docType,
                  docLink: fileUrl,
                  isOpened: false,
                  isSigned: false,
                  isRejected: false,
                  submittedDate: new Date(),
                },
              ];
            } else {
              docs = [
                {
                  name: docData.name,
                  description: docData.description,
                  docId: docData.docId,
                  docType: docData.docType,
                  docLink: fileUrl,
                  isOpened: false,
                  isSigned: false,
                  isRejected: false,
                  submittedDate: new Date(),
                },
              ];
            }
          } catch (err) {
            alert("Something went wrong");
            console.log(err);
          }
          try {
            const docRef = await setDoc(doc(db, "docs", email), {
              userDocs: docs,
            });
            alert("File uploaded successfully");
          } catch (e) {
            alert("Something went wrong");
            console.error("Error adding document: ", e);
          }
        });
      }
    );
  };

  return (
    <div>
      <Navbar logged="true" />
      <div id="form" className="vform">
        <h1 className="vtitle">New Document</h1>
        <div className="vcontainer">
          <div className="vs"></div>
          <div class="form-control">
            <label for="name" id="name" className="label vc">
              Name
            </label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              className="input vd"
              onChange={handleChange}
              placeholder="Enter the document name"
            />
          </div>
          <div className="vs"></div>
          <div class="form-control">
            <label for="description" className="label vc" id="des">
              Description
            </label>
            <br />
            <input
              type="text"
              name="description"
              className="input vd"
              onChange={handleChange}
              id="des"
              placeholder="Enter the description"
            ></input>
          </div>
          <div className="vs"></div>
          <div class="form-control">
            <label for="id" id="id" className="label vc">
              ID
            </label>
            <br />
            <input
              type="text"
              id="id"
              name="docId"
              className="input vd"
              placeholder="Enter your Document id"
              onChange={handleChange}
            />
          </div>
          <div className="vs"></div>
          <div class="form-control">
            <label for="type" className="label vc" id="type">
              Document Type
            </label>
            <br />
            <select
              name="docType"
              id="type"
              className="input vd"
              onChange={handleChange}
            >
              <option value="-1" selected>
                Type
              </option>
              <option value="pdf">pdf</option>
              <option value="word">word</option>
              <option value="image">image </option>
              <option value="other">other </option>
            </select>
          </div>
          <div className="vs"></div>
          <div class="form-control">
            <label for="docFile" className="label vc">
              Upload
            </label>
            <br />
            <input
              type="file"
              className="input vd"
              id="myfile"
              name="docFile"
              onChange={handleChange}
            />
          </div>
          <div className="vs"></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div class="btn" onClick={handleSubmit}>
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createnew;
