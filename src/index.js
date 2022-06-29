import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Tools from './Components/Tools';
import Layout from './Pages/Layout';
import NoPage from './Pages/NoPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
           <Route path="About" element={<About />} />
           <Route path="Services" element={<Services />} />
           <Route path="Tools" element={<Tools />} />
           <Route path="*" element={<NoPage />} />
         </Route>
       </Routes>
     </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
