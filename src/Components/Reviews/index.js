
import { Container, Row, Col } from "reactstrap"
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from "react"
import './index.css'
import Carousel from 'react-grid-carousel'
import avatar from "../../assests/avatar.png"
import { Fade } from "react-reveal";

function Reviews() {
    const [value, setValue] = useState(5);


    return <>
        <br></br>
        <br></br>
        <section style={{ height: "82vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>

            <Container>
                <Row>
                    <Col md="12" style={{ textAlign: "center" }}>
                        <Fade top>
                        <h2 style={{fontFamily:"sharpSemiBold"}}>Changing how Pakistanis get their Salaries</h2>
                        <p style={{fontFamily:"sharpMedItalic",marginTop:"15px"}}>Join the thousands of Pakistanis already accessing their salaries in real-time.<br></br>
                            Here’s what some of our users have to say.</p>

                        </Fade>
                    </Col>
                </Row>
                <Row >
                    <Col style={{ display: "flex", justifyContent: "center" }}>
                        <Rating name="read-only" value={value} readOnly className="stars" />
                    </Col>

                </Row>
            </Container>
            <br></br>
            <br></br>

            <Container fluid className='brandContainer'>
                <Row>
                    <Col >
                            <Fade top duration={3000}>
                                <h3 style={{ textAlign: "center", fontFamily: "sharpSemiBold",fontSize:"34px" }} >Reviews</h3>
                            </Fade>
                            <br></br>
                    </Col >


                </Row>

                <Row  >
                    <Col >
                        <Carousel cols={5} rows={1} gap={15} loop={true} autoplay={3000}>
                            <Carousel.Item>
                                <div className="reviewBox">
                                    <div>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img src={avatar} style={{ width: "45px", marginRight: "8px" }} />
                                            <h5   style={{fontFamily:"sharpMed"}}>Sarfaraz Khan</h5>
                                        </div>
                                        <br></br>
                                        <p  style={{fontFamily:"sharpMedItalic"}}>A true savior whenever I need to exceed my monthly budget for a financial emergency! </p>

                                    </div>

                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="reviewBox">
                                    <div>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img src={avatar} style={{ width: "45px", marginRight: "8px" }} />
                                            <h5 style={{fontFamily:"sharpMed"}}>Sarfaraz Khan</h5>
                                        </div>
                                        <br></br>
                                        <p style={{fontFamily:"sharpMedItalic"}}>A true savior whenever I need to exceed my monthly budget for a financial emergency! </p>

                                    </div>

                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="reviewBox">
                                    <div>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img src={avatar} style={{ width: "45px", marginRight: "8px" }} />
                                            <h5 style={{fontFamily:"sharpMed"}}>Sarfaraz Khan</h5>
                                        </div>
                                        <br></br>
                                        <p style={{fontFamily:"sharpMedItalic"}}>A true savior whenever I need to exceed my monthly budget for a financial emergency! </p>

                                    </div>

                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="reviewBox">
                                    <div>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img src={avatar} style={{ width: "45px", marginRight: "8px" }} />
                                            <h5 style={{fontFamily:"sharpMed"}}>Sarfaraz Khan</h5>
                                        </div>
                                        <br></br>
                                        <p style={{fontFamily:"sharpMedItalic"}}>A true savior whenever I need to exceed my monthly budget for a financial emergency! </p>

                                    </div>

                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="reviewBox">
                                    <div>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img src={avatar} style={{ width: "45px", marginRight: "8px" }} />
                                            <h5 style={{fontFamily:"sharpMed"}}>Sarfaraz Khan</h5>
                                        </div>
                                        <br></br>
                                        <p style={{fontFamily:"sharpMedItalic"}}>A true savior whenever I need to exceed my monthly budget for a financial emergency! </p>

                                    </div>

                                </div>
                            </Carousel.Item>
                        </Carousel>

                    </Col>
                </Row>
            </Container>

        </section>
    </>
}
export default Reviews;