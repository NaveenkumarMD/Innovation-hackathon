import SignPDF from "./SignPDF";
import fs from "node:fs";
import path from "node:path";
import express from "express";
const cors=require("cors")
import request from 'request-promise-native'
import sendmail from "./Mailing/setup";
const UUID = require("uuid-v4");
var admin = require("firebase-admin");
const { getStorage } = require('firebase-admin/storage');
var serviceAccount = require("./config.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://archive-39cf2.appspot.com'
});

async function Sign() {
  const pdfBuffer = new SignPDF(
    path.resolve('get_pdf.pdf'),
    path.resolve('test_assets/certificate.p12')
  );

  const signedDocs = await pdfBuffer.signPDF();

  const pdfName = `./get_pdf_signed.pdf`;

  fs.writeFileSync(pdfName, signedDocs);
  console.log(`New Signed PDF created called: ${pdfName}`);
}

const app = express()
app.use(cors())
app.use(express.json())

const downloadpdf = async (url, outputfilename = null) => {
  let pdfbuffer = await request.get({
    uri: url
    , encoding: null
  })
  let outputFilename = "get_pdf.pdf"
  console.log("Writing downloaded PDF file to " + outputFilename + "...");
  fs.writeFileSync(outputFilename, pdfbuffer);
  await Sign()
}

app.post("/", async (req, res) => {
  
  const { url} = req.body
  await downloadpdf(url)
  let uuid=UUID()
  console.log("File has been signed")
  var bucket = admin.storage().bucket();
  let randomfilename=Math.random().toString(36).substring(7)

  bucket.upload('./get_pdf_signed.pdf',{
    destination:`signed/${randomfilename}.pdf`,
    metadata: {
      metadata: {
        firebaseStorageDownloadTokens: uuid
      }
    }
  }
  )
  .then((data)=>{
    let file = data[0];
    res.json({
      filename:"https://firebasestorage.googleapis.com/v0/b/" + bucket.name + "/o/" + encodeURIComponent(file.name) + "?alt=media&token=" + uuid
    })
  })
})


app.post("/sendmail",(req,res)=>{
  const {to,subject,body} = req.body
  const details={
    to,
    subject,
    body
  }
  sendmail(details).then(res=>{
    return res.status(200).send("Mail sent")
  }).catch(err=>{
    return res.status(500).send(err)
  })
})



app.listen(4000, () => {
  console.log("Server is running on port 4000")
})



