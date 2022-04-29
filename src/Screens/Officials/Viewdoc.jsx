import React, { useState } from "react";
import { Document, Page, setPageNumber } from "react-pdf";
import Navbar from "../../Components/Navbar";
import { ref, uploadBytes, uploadString } from "firebase/storage"
import { storage } from "../../firebase";

function Viewdoc() {
    function blobToFile(blob, fileName) {
        blob.lastModifiedDate = new Date();
        blob.name = fileName;
        return blob;
    }
    const handlesign = () => {
        console.log("Sent to sign");

        fetch("http://localhost:4000", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                url: "https://firebasestorage.googleapis.com/v0/b/archive-39cf2.appspot.com/o/19CS097%20NAVEENKUMAR%20M%20-%20Experiment%20No%20_%209%20%20%20%20%20%20%20%20%20%20Page%20replacement%20policy%20(1).pdf?alt=media&token=6333cd95-ad6a-43a7-be57-68a67ef09278",
            })
        }).then(res=>res.json()).then(data=>{
            console.log(data.filename)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <Navbar logged='true' sign="true" handlesign={handlesign} />
            <object data="https://firebasestorage.googleapis.com/v0/b/archive-39cf2.appspot.com/o/19CS097%20NAVEENKUMAR%20M%20-%20Experiment%20No%20_%209%20%20%20%20%20%20%20%20%20%20Page%20replacement%20policy%20(1).pdf?alt=media&token=6333cd95-ad6a-43a7-be57-68a67ef09278"
                type="application/pdf" width="100%" height="700px">

            </object>
        </div>
    )
}

export default Viewdoc;
