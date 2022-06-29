import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import '../css/style.css'

const Layout = () => {
  var [class1,setClass] = useState('topnav');

  function myFunction() {

    if(class1=='topnav')
    {
      setClass(()=>'topnav responsive')
    }
    else
    {
      setClass(()=> 'topnav')
    }
  }
  return (
    <>
    <div className={class1}>
        <span className="active">Assignment-2</span>
        <span ><Link to="/" className="link">Home</Link></span>
        <span ><Link to="/About" className="link">About</Link></span>
        <span ><Link to="/Services" className="link">Services</Link></span>
        <span ><Link to="/Tools" className="link">Tools</Link></span>
        <span  className="icon" onClick={()=>myFunction()}> 
    <i className="fa fa-bars"></i>
  </span>
    </div>

      {/* <Nav>
        <ul>
          <li>
            <Link to="/" style="text-decoration:none; color:White">Home</Link>
          </li>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
        </ul>
      </Nav> */}

      <Outlet />
      
    </>
  )
};

export default Layout;