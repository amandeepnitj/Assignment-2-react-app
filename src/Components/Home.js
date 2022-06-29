import React, { useState,useEffect } from "react";
import '../css/style.css'
function Home()
{
     var [time,newTime] = useState(Date().toLocaleString());
     useEffect(() => {
        setTimeout(() => {
          newTime(() => Date().toLocaleString());
        }, 1000);
      });
    return(
    <>
    <div className="main1">
        <h1> Amandeep Singh</h1>
        <h2> Mobile App Developer</h2>
    </div>
        <hr/>
        <div className="heading">About Me</div>
        <div className="details">
        Hard-working college graduate with Bachelor of Technology in Electronics and Communication Engineering(7.50 CGPA) with 2.5 year of work Expperience. Aiming to leverage academic experience and a proven knowlwdge of database development, competitive programming and web designing to successfully play Software Developer Role
        </div>
        <br></br>

        <div className="heading">Some Applications of React</div>
        <div className="details">
            <div className="form-center">
                <h5>Current time is : {time}</h5>
            </div>
        </div>

    </>
    )

}

export default Home;