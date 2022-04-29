import SignPDF from "./SignPDF";
import fs from "node:fs";
import path from "node:path";
import express from "express";
import cors from 'cors'
import request from 'request-promise-native'
import sendmail from "./Mailing/setup";


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
  console.log("File has been signed")
  var data = fs.readFileSync('get_pdf_signed.pdf');
  res.contentType("application/pdf");
  console.log("File has been sent")
  res.send(data);
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



