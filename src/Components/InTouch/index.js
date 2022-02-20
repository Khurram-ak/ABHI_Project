import { Container, Row, Col, Button } from "reactstrap"
import "./index.css"
import inTouch2 from '../../assests/inTouch2.png'
import inTouch from '../../assests/inTouch.png'
import { Bounce,Slide } from "react-reveal"

function InTouch() {
    return <>
        <section className="footerWave" >
            <Container style={{ marginTop: "80px", paddingBottom: "15px" }}>

                <Row>
                    <Col md='2'>

                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", height: "50vh" }}>
                            <Slide left>
                                <img src={inTouch2} />

                            </Slide>

                        </div>
                    </Col>
                    <Col md="8"   >
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "50vh" }}>
                            <h2 style={{ textAlign: "center", fontFamily: "sharpBold" }}>Get us on board </h2>

                            <h2 style={{ fontFamily: "sharpSemiBold" }}>for your Employees, Abhi. </h2>
                            <Button className='inTouchBtn'>Get In Touch</Button>

                        </div>
                    </Col>

                    <Col md='2'>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", height: "50vh" }}>
                            <Bounce right>
                                <img src={inTouch} />
                            </Bounce>
                        </div>
                    </Col>
                </Row>

            </Container>

        </section>

    </>
}

export default InTouch;