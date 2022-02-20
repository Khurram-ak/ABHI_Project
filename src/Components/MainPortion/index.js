import "./index.css"
import aPlay from "../../assests/aPlay.png"
import gPlay from "../../assests/gPlay.png"
import mainPic3 from "../../assests/mainPic3.png"
import { Container, Row, Col } from "reactstrap"

import Fade from 'react-reveal/Fade';

function MainPortion() {

    return <>
        <section style={{ backgroundColor: "#212153" }} >

            <Container id="main" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }} >
                <Row  >

                    <Col md="6" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <Fade left>
                            <div style={{ color: "white" }} >
                                <h2 className="mainFont">Your Salary,<br></br><b>ABHI. </b> </h2><br></br>
                                <h4 className="mainFont2">Get Your earned salary,<br></br> whenever you need it.</h4>

                                <div className='imgBlock' style={{ display: 'flex', alignItems: "center", marginTop: "50px" }}>
                                    <img className="" style={{ marginRight: "20px", borderRadius: "12px" }} alt="aplay" src={aPlay} />
                                    <img src={gPlay} style={{ borderRadius: "12px" }} alt="gplay" />
                                </div>

                            </div>

                        </Fade>
                    </Col>

                    <Col style={{ display: "flex", justifyContent: "center" }} md="6">
                    <Fade right>
                        <img className="mainPic" src={mainPic3} alt="gplay" />
                        </Fade>

                    </Col>
                </Row>
            </Container>

        </section>
    </>
}

export default MainPortion;