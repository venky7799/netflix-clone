import React, { useState } from "react";
import "./loginscreen.css";
import SingInScreen from "./SingInScreen"
const Loginscreen=()=>{
    const [signin,setSignin] = useState(false);
 
    return(
        <div className="loginScreen">
            <div className="loginscreen_background">
            <img className="loginscreen_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
            <button onClick={()=>setSignin(true)} className="loginscreen_button">Sign In</button>
            <div className="loginscreen_gradient" />
            </div>
            <div className="loginscreen_body">
                {signin?<SingInScreen/>:(
                        <>
                        <h1>Unlimited films, TV programmes and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch ? Enter the email to create or restart your membership.</h3>
                        <div className="loginscreen_input">
                            <form>
                                <input type="email"
                                placeholder="email Address"
                                />
                                <button onClick={()=>setSignin(true)} className="loginscreen_getstarted">GET STARTED</button>
                            </form>
                        </div>
                        </>
                    
                )}
               
            </div>
        </div>
    );
}

export default Loginscreen;