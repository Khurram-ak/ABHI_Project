import { useState } from "react";
import { Spinner } from 'reactstrap';
import logo from "../../assests/logo.png"

const LoadingPage = () => {
   
    return <>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: '100vh',backgroundColor:"#212153" }}>
                <div>
                    <img src={logo} alt="icon" width={400} style={{border:''}}/>
                </div>
                <div>
                    <Spinner  style={{color:"#fff", height: "85px", width: "85px" ,marginTop:"-90px"}} />
                </div>


            </div>
    </>
}

export default LoadingPage