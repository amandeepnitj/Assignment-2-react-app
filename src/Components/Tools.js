import {React, useState, useEffect} from "react";
import '../css/style.css'
import produce from 'immer';
const Notes = props => props.data.map(note => <div>{note.text}</div>);

function Tools()
{
    var [data,newData]  = useState([]);
    
    var [dataisloaded,changeState] = useState(false);
    useEffect(() => {
        fetch("https://api.open-meteo.com/v1/forecast?latitude=28.6353&longitude=77.2250&hourly=temperature_2m,relativehumidity_2m,windspeed_10m&current_weather=true")
                        .then((res) => res.json())
                        .then((json) => {
                            newData(()=>json)
                            changeState(()=> true)
                        });
  
}, []);

    const initialData = [{ text: '' }];
    const [data1, setData1] = useState(initialData);


    const handleClick = () => {
        const text = document.querySelector('#noteinput').value.trim();
        if (text) {
          const nextState = produce(data1, draftState => {
            draftState.push({ text });
          });
          document.querySelector('#noteinput').value = '';
          setData1(nextState);
        }
      };

      function Clear()
      {
          setData1(()=>[])
      }

   
    return(
    <>
    <br></br>
    <div className="heading">Weather API</div>
        <div className="details">
            <div className="form-center flex-down">
                <h4>Updated weather of Delhi, India</h4>
                <h6>Current Temperature of New Delhi :{dataisloaded && JSON.stringify(data.current_weather.temperature)} C </h6>
                <h6>Current Windspeed of New Delhi :{dataisloaded && JSON.stringify(data.current_weather.windspeed)} Km/h </h6>
                <h6>Current Date of New Delhi :{dataisloaded && JSON.stringify(data.current_weather.time)}  </h6>
            </div>
        </div>

        <br></br>
    <div className="heading">Note App</div>
        <div className="details">
            <div className="form-center flex-down">
            <input id="noteinput" style={{ width: '80%' }} type="text" placeholder="Enter a new note" />
        <button onClick={() => handleClick()} style={{width:'50%',margin:"10px"}}>Add note</button>
        <button onClick={() => Clear()} style={{width:'50%',margin:"10px"}}>Clear List</button>

        <Notes data={data1} />
            </div>
        </div>



    </>
    )

}

export default Tools;