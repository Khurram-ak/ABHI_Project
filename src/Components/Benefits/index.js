import { Container, Row, Col, Card, CardGroup, CardImg, CardBody, CardSubtitle, CardTitle } from "reactstrap"
import "./index.css"
import AccessMoney from '../../assests/AccessMoney.png'
import Bills from '../../assests/Bills.png'
import ShahriahComplains from '../../assests/ShahriahComplains.png'
import UnlimitedTransaction from '../../assests/UnlimitedTransaction.png'
import TakeEarned from '../../assests/TakeEarned.png'
import FlatRate from '../../assests/FlatRate.png'
import { Fade } from "react-reveal"

function Benefits() {
    return <>
        <Container style={{ marginTop: "80px" }}>
            <Row>
                <Col md="12" style={{ textAlign: "center" }}>
                    <Fade top>
                    <h2 style={{fontFamily:"sharpBold" }}>Benefits for Employees.</h2>
                    <p style={{fontFamily:"sharpMed" }}>We work the whole year but get paid only 12 times, but with ABHI, every day is payday!</p>
                    </Fade>
                </Col>
            </Row>

        </Container>

        <Container>
            <Row>
                <Col style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}} md='4'>
                    <CardGroup  className="productCard ">
                    <Card className="productCard ">
                        <CardImg
                            alt="Card image cap"
                            src={AccessMoney}
                            top
                            className="benefitsImg"
                        />
                        <CardBody  >
                            <CardSubtitle
                                style={{ fontFamily: "roboto" }}
                                className="mb-2 text"
                                tag="h6"
                                style={{fontFamily:"sharpSemiBold" }}
                           >
                                ACCESS TO MONEY
                                WHENEVER YOU WANT
                            </CardSubtitle>


                        </CardBody>
                    </Card>
                </CardGroup>
                </Col>
                <Col style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}} md='4'> <CardGroup className="productCard " >
                    <Card className="productCard   ">
                        <CardImg
                            alt="Card image cap"
                            src={ShahriahComplains}
                            className="benefitsImg"
                            top 
                        />
                        <CardBody  >
                            <CardSubtitle
                                style={{ fontFamily: "roboto" }}
                                className="mb-2 text"
                                tag="h6"
                                style={{fontFamily:"sharpSemiBold" }}
                            >
                                100% SHARIAH
                                COMPLIANT
                            </CardSubtitle>


                        </CardBody>
                    </Card>
                </CardGroup></Col>
                <Col style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}} md='4'> <CardGroup className="productCard " >
                    <Card className="productCard   ">
                        <CardImg
                            alt="Card image cap"
                            src={FlatRate}
                            className="benefitsImg"
                            top 
                        />
                        <CardBody  >
                            <CardSubtitle
                                className="mb-2 text"
                                tag="h6"
                                style={{fontFamily:"sharpSemiBold" }}
                            >
                                ONE FLAT RATE
                                (NO HIDDEN CHARGES/
                                INTEREST)
                            </CardSubtitle>


                        </CardBody>
                    </Card>
                </CardGroup></Col>
            </Row>


        </Container>

        <Container>
            <Row>
            <Col style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}} md='4'> <CardGroup className="productCard " >
                    <Card className="productCard   ">
                        <CardImg
                            alt="Card image cap"
                            src={TakeEarned}
                            className="benefitsImg"
                            top 
                        />
                        <CardBody  >
                            <CardSubtitle
                                className="mb-2 text"
                                tag="h6"
                                style={{fontFamily:"sharpSemiBold" }}
                            >
                                TAKE WHAT
                                YOU EARNED
                            </CardSubtitle>


                        </CardBody>
                    </Card>
                </CardGroup>
                </Col>
                <Col style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}} md='4'> <CardGroup className="productCard " >
                    <Card className="productCard   ">
                        <CardImg
                            alt="Card image cap"
                            src={Bills}
                            className="benefitsImg"
                            top 
                        />
                        <CardBody  >
                            <CardSubtitle
                                style={{fontFamily:"sharpSemiBold" }}
                                className="mb-2 text"
                                tag="h6"
                            >
                                NO STRESS OF
                                UNEXPECTED EXPENSES
                            </CardSubtitle>


                        </CardBody>
                    </Card>
                </CardGroup></Col>
                <Col style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}} md='4'> <CardGroup className="productCard " >
                    <Card className="productCard   ">
                        <CardImg
                            alt="Card image cap"
                            src={UnlimitedTransaction}
                            className="benefitsImg"
                            top 
                        />
                        <CardBody  >
                            <CardSubtitle 
                            style={{fontFamily:"sharpSemiBold" }}
                                className="mb-2 text"
                                tag="h6"
                            >
                                UNLIMITED
                                TRANSACTIONS
                            </CardSubtitle>


                        </CardBody>
                    </Card>
                </CardGroup></Col>
            </Row>


        </Container>





    </>
}

export default Benefits;