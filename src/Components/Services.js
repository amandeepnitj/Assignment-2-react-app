import React from "react";
import axios from 'axios'

function Services()
{

    function handleApi()
    {
        const text = document.querySelector('#input1').value.trim();
        console.log(text);
        var contact = "+1"+text;
        var string1= "https://api.callmebot.com/whatsapp.php?phone="+contact+"&text=Hi%20%2C%20Amandeep%20Singh%20this%20side.%20%0AI%27m%20Mobile%20App%20developer.%20Please%20contact%20me%20if%20you%20need%20developing%20app.%0APlease%20find%20my%20portfolio%20link%3A%20https%3A%2F%2Famandeepnitj.github.io%2Fmyself.github.io%2F&apikey=313980"
        axios.get(string1,{
            headers:{"Access-Control-Allow-Origin": "*"}
        })
      .then(res => {
        const persons = res.data;
        
      })
      document.querySelector('#input1').value = '';
    }
    return(
        <>
    <div className="main1">
        <h1> Services We Provide</h1>
        
    </div>
        <hr/>
        <div className="heading">Android Apps</div>
        <div className="details">
        We develop the Android apps for all applications like e-commerce, private business..
        </div>
        <br></br>

        <div className="heading">iOS App</div>
        <div className="details">
            We develop the iOS apps for all applications like e-commerce, private business..
        </div>


        <br></br>

        <div className="heading">Whatsapp Link </div>
        <div className="flex-down form-center">
            <p>Please enter your Whatsapp number to get my portfolio link and details:</p>
            <input id="input1" style={{ width: '80%' }} type="text" placeholder="Whatsapp Number" />
        <button onClick={() => handleApi()} style={{width:'50%',margin:"10px"}}>Send Link</button>

        </div>


    </>
    
    )

}

export default Services;