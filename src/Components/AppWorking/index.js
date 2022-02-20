import "./index.css"
import { Container, Row, Col, Button } from "reactstrap"
import app from "../../assests/app.png"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function AppWorking() {

    return <>

        <section className="waveImg" >
            <Container style={{ display: "flex", flexDirection: "column", justifyContent: "center" }} >
                <Row  >
                    <Col md="6" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <div  >
                            <h2 style={{fontFamily:"sharpBold"}}>How Abhi app works.</h2><br></br>
                            <p style={{fontFamily:"sharpSemiBold"}}>Our lightning-fast phone app eliminates the need for<br></br> doing anything physical. That means, no paperwork and<br></br>  no long wait times.</p>
                        </div>
                        <div>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography style={{fontFamily:"sharpSemiBold"}}>1. Log in to your account.</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{fontFamily:"sharpMed",fontSize:"15px"}}> You log in using your CNIC.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography style={{fontFamily:"sharpSemiBold"}}>
                                        2. Choose how much you want.</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{fontFamily:"sharpMed",fontSize:"15px"}}>
                                        Choose the amount you want, You can do as many transactions as you want (no limit).
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography style={{fontFamily:"sharpSemiBold"}}>3. Your money in your account.</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{fontFamily:"sharpMed",fontSize:"15px"}}>Money deposited in your bank account within 30 seconds.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        
                        </div>
                    </Col>
                    <Col style={{ display: "flex", justifyContent: "center" }} md="6">

                        <img className="app" src={app} alt="gplay" />


                    </Col>
                </Row>
            </Container>

        </section>

    </>
}

export default AppWorking;