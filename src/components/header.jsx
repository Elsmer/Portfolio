import React from "react"
import Banner from "../images/banner1.jpeg"
import Avatar from "../images/avatar6.png"



const Header = () => {
    return ( 
        <div className="wrapper" zIndex={2}>
            
<div className="avatar1"><img src={Avatar}></img></div>
{        
            <div className="textcontainer"><h1>
              <span> Hey, </span>  <br/>
I’m Elsa, a frontend student from Stockholm currently studying at Hyper Island </h1> </div>  }
 

        </div>
    )
    }



    export default Header