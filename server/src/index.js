import SignPDF from "./SignPDF";
import fs from "node:fs";
import path from "node:path";
import express from "express";
import cors from 'cors'
import request from 'request-promise-native'
import { sign } from "node:crypto";

async function Sign() {
  const pdfBuffer = new SignPDF(
    path.resolve('get_pdf.pdf'),
    path.resolve('test_assets/certificate.p12')
  );

  const signedDocs = await pdfBuffer.signPDF();
  const randomNumber = Math.floor(Math.random() * 5000);
  const pdfName = `./exports/exported_file_${randomNumber}.pdf`;

  fs.writeFileSync(pdfName, signedDocs);
  console.log(`New Signed PDF created called: ${pdfName}`);
}

const app = express()
app.use(cors())

const downloadpdf = async (outputfilename = null) => {
  let pdfbuffer = await request.get({
    uri: "https://firebasestorage.googleapis.com/v0/b/archive-39cf2.appspot.com/o/19CS097%20NAVEENKUMAR%20M%20-%20Experiment%20No%20_%209%20%20%20%20%20%20%20%20%20%20Page%20replacement%20policy%20(1).pdf?alt=media&token=6333cd95-ad6a-43a7-be57-68a67ef09278"
    , encoding: null
  })
  let outputFilename = "get_pdf.pdf"
  console.log("Writing downloaded PDF file to " + outputFilename + "...");
  fs.writeFileSync(outputFilename, pdfbuffer);
  Sign()
}

app.get("/", async (req, res) => {
  // await downloadpdf()
  var data =fs.readFileSync('get_pdf.pdf');
  res.contentType("application/pdf");
  res.send(data);

})

app.listen(4000,()=>{
  console.log("Server is running on port 4000")
})



