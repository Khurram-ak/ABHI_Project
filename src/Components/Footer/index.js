import React from 'react'
import "./index.css"
import { Container, Row, Col, Form, FormGroup, FormFeedback, FormText, Input, Button } from 'reactstrap'
import instagram from '../../assests/instagram.png'
import linkedin from '../../assests/linkedin.png'
import twitter from '../../assests/twitter.png'
import facebook from '../../assests/facebook.png'
import appStore from '../../assests/appStore.png'
import googlePlay from '../../assests/googlePlay.png'
// import { linkedin } from '@mui/icons-material'
import phone from "../../assests/phone.png"

export default function Footer() {

    return <>
        <section style={{ backgroundColor: "#212153", paddingBottom: "35px" }}>

            <Container style={{ backgroundColor: "#212153", height: "auto", color: "white" }} >
                <Row style={{ width: "95%", margin: 'auto', padding: "45px 0px" }} >
                    <Col md='3' >
                        <hr />
                        <h6 style={{ marginBottom: "10px", fontFamily: "sharpSemiBold", fontSize: "21px" }}>ABHI</h6>
                        <hr />
                        <p style={{ marginTop: "15px", fontFamily: "sharpMed", fontSize: "15px" }}>Abhi, a financial wellness platform, plans to change the way you receive and spend your salary 💵 Your salary is your right, and we let you access it … ABHI 🚀</p>
                    </Col>

                    <Col md='3' >
                        <hr />
                        <div>
                            <h6 style={{ fontFamily: "sharpSemiBold",fontSize:"21px" }}>Quick Links</h6>
                            <hr />
                            <div style={{ display: "flex", flexDirection: "column", fontSize: "13px", marginBottom: "10px", fontFamily: "sharpMed" }}>
                                <span>Home</span>
                                <span>For Business</span>
                                <span>Learn</span>
                                <span>Team</span>
                                <span>Careers</span>
                                <span>Contact Us</span>
                            </div>


                        </div>

                    </Col>
                    <Col md='3' style={{}}>
                        <hr />
                        <h6 style={{ fontFamily: "sharpSemiBold",fontSize:"21px" }}>Contact Us</h6>
                        <hr />
                        <div style={{ display: 'flex', fontFamily: "sharpMed" }}>
                        {/* <FontAwesomeIcon style={{ marginRight: "11px", fontSize: "25px", color: "#fff", marginLeft: "-2px" }} icon="fa-solid fa-phone"  /> */}
                           <img  style={{ marginRight: "11px", color: "#fff", marginLeft: "-2px" }} src={phone} width={25}/>
                            <p style={{ fontSize: "13px" }}>+178554522535</p>
                        </div>
                        <div style={{ display: 'flex', fontFamily: "sharpMed",alignItems:"center" }}>
                            <i style={{ marginRight: "14px", fontSize: "25px", color: "#fff", marginLeft: "-3px" }} class="fas fa-home"></i>
                            <div style={{display:"flex",alignItems:"center"}}>
                            <p style={{ fontSize: "13px" }}>
                                Office 505A, 5th Floor, Fortune Towers, Shahrah-e-faisal, Karachi</p>

                            </div>
                        </div>
                        <div style={{ display: 'flex', fontFamily: "sharpMed" }}>
                            <i style={{ marginRight: "15px", fontSize: "25px", color: "#fff" }} class="fas fa-envelope"></i>
                            <p style={{ fontSize: "13px" }}>connect@abhi.com.pk</p>
                        </div>


                    </Col>
                    <Col md='3' style={{}}>
                        <hr />

                        <h6 style={{ fontFamily: "sharpSemiBold",fontSize:"21px" }}>Get Our App</h6>
                        <hr />

                        <div style={{ display: "flex", fontSize: "13px", marginBottom: "3px", fontFamily: "sharpsans1" }}>
                            <img src={appStore} style={{marginRight:"7px"}} />
                            <img src={googlePlay} />
                        </div>
                        <h6 style={{ fontFamily: "sharpSemiBold",fontSize:"21px", marginTop: "25px" }}>Follow Us</h6>
                        <div style={{ display: "flex", justifyContent: "space-around", width: "60%" }}>
                            <span>
                                <img width={10} src={facebook} alt="" />
                            </span>
                            <span>
                                <img width={20} src={twitter} alt="" />
                            </span>
                            <span>
                                <img width={20} src={linkedin} alt="" />
                            </span>
                            <span>
                                <img width={20} src={instagram} alt="" />
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>


    </>
}