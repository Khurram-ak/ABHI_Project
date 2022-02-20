import { Container, Row, Col, Button } from "reactstrap"
import "./index.css"
import learnMorePic from "../../assests/learnMorePic.png"
import Fade from "react-reveal"

function LearnMore() {
    return <>
        <section style={{ paddingBottom: "18px", paddingTop: "18px", display: 'flex', flexDirection: "column", justifyContent: "center", border: "  " }}>
            <Container style={{ height: "25vh", display: 'flex', flexDirection: "column", justifyContent: "flex-end", border: "  " }}>
                <Row>
                    <Col md="12" style={{ textAlign: "center" }}>
                        <h1 style={{ fontFamily: "sharpMed" }}>In a world with easy access to everything,<br></br>
                            on-demand (from taxi to food),<br></br>
                            <strong>  now get access to your salary too.  </strong> </h1>

                    </Col>
                </Row>

            </Container>

            <Container id="learnMore" style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "35px" }} >
                <Row  >
                    <Col md="6">
                        <Fade left>
                            <img className="learnMorePic" src={learnMorePic} alt="gplay" />
                        </Fade>

                    </Col>

                    <Col md="6" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <div >
                            <Fade right>
                                <h2 style={{ fontFamily: "sharpSemiBold" }} >With ABHI, you can access up to 50% of your earned salary, at any time of the month.</h2><br></br>
                                <h4 style={{ fontFamily: "sharpMedItalic" }}>With real-time deposits, you can get the cash you need directly in your account/wallet to get back on track within 30 seconds! </h4>
                                <Button className='learnBtn'>Learn More</Button>
                            </Fade>

                        </div>

                    </Col>
                </Row>
            </Container>


        </section>

    </>



}

export default LearnMore;


