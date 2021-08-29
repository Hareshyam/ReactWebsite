import React from 'react';
//import Style from './Style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Project/Navbar';

   const App=()=>{
    return(
         <div className="app" style={{textAlign:'center'}}>
            <Navbar/>
         </div>
    );
  }
export default App;