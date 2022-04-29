import React from 'react'
import { MdExpandMore } from 'react-icons/md'
import "../Styles/dashboardCard.css";
function Userdahcard() {
    return (
        <div>
            <div className="qcontainer">
                <div className="qtitle">
                    Applied documents
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
        </div>
    )
}

export default Userdahcard
