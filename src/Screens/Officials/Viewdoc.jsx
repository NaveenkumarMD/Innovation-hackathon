import React, { useState } from 'react'
import { Document, Page, setPageNumber } from 'react-pdf'
import Navbar from '../../Components/Navbar'
function Viewdoc() {
    const [numPages, setNumpages] = useState(null)
    const [pageNumber, setpageNumber] = useState(1)
    const onloadsuccess = ({ numpages }) => {
        setNumpages(numpages)
    }
    return (
        <div>
            <Navbar logged='true'/>
            <Document 
    file={require('../../Images/sample.pdf')}
                onLoadSuccess={onloadsuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>

        </div>
    )
}

export default Viewdoc
