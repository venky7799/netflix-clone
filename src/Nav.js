import React,{useEffect, useState} from "react";
import "./Nav.css";

const Nav=()=>{
    //usestate is easy way of define of variables 
    const[show, notShow]=useState(false);
    const transitionNav=()=>{
        if (window.scrollY > 100){
            notShow(true);
        }else{
            notShow(false);
        }
    };

    useEffect(()=>{
        window.addEventListener("scroll",transitionNav);
    });

    return(
//when keep in a bracket its a className and when dont define with brackets they are in nav_black//


        <div className={`nav ${show && 'nav_black'}`}>  {/*only render nav_black only if show variable is true */}
            <div className="nav_content">
                <img className="nav_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
                <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"  alt=""></img>
            </div>
        </div>
    );
};


export default Nav;