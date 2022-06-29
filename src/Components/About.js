import React from "react";

function About()
{
    return(
        <>
        <div className="main1">
       
        <h2> Information about Pages</h2>
    </div>
        <br/>
        <div className="heading">Hooks used:</div>
        <div className="details flex-down">
            <span>1. useState() : I have used it for storing the states in the pages like storing the current date and storing the object for Note app.</span>
            <span>2. useEffect() : I have used it to display the current time in Home page. It gets invoked every 1 second and update the state of time.</span>
        </div>

        <br/>
        <div className="heading">Funtional components used:</div>
        <div className="details flex-down">
            <span>1. Home() </span>
            <span>2. About() </span>
            <span>2. Services()</span>
            <span>2. Tools()</span>
            <span>2. Layout()</span>
        </div>

        <br/>
        <div className="heading">Research for completing this assignment</div>
        <div className="details flex-down">
            <span>1. React Bootstrap: I've checked about the react bootstrap library and learnt how to install and implement it. I've used this for making my Navbar. </span>
            <span>2. TimeOut() and Date() : I've checked about these two functions to update the current date and time in home component. </span>
            <span>3. Using css in React : I need to use  the customized css script so I did learn how to include it in react components. I've also discovered that there is property called className instead of class in react.</span>
            <span>4. Fetching data from API: I've learnt how to fetch data from API in json format and then store it in hooks.</span>
            <span>5. Map(): I have used this function to traverse ove the array used for note making app. </span>
            <span>5. callmebot API: I've used this api to send whatsapp message to user for contacting me. </span>
        </div>


        <br/>
        <div className="heading">Making the website responsive</div>
        <div className="details flex-down">
            <span>1.Media Query: I've used media query to make my navbar responsive. When screen width goes less than 600px, all the 4 spans goes down.   </span>
            <span>2. Using of css link for bars: I've imported the css link in the main html file to implement the 3 bars sign.  </span>
            <span>3. Using function to update the classes of div: I've used hooks to update the classes of div on click of 3 three bars. </span>
            
            
        </div>

        <div className="heading">Gestalt principle Used</div>
        <div className="details flex-down">
            <span>1. Similarity : All webpages do have same theme i.e. Black and green.</span>
            <span>2. Proxomity: All the components are placed accordingly. </span>
            
            
            
        </div>

        </>
    )

}

export default About;