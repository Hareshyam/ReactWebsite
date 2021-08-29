import React from 'react';
import { NavLink } from 'react-router-dom';

 const Common=(props)=>{
     return(
          <>
             <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-11 mx-auto mt-5">

                        <div className="row">
                            <div className="col-md-6 pt-5 mt-5">
                                <h1 className="text-light my-3">{props.name}<br/> 
                                      <span>    Technical Scope</span></h1>
                                <h3 className="my-3 text-light">We are the team of talented developer making website</h3>
                                <div className="btn-div mt-4">
                                    <NavLink to={props.visite} className="btn btn-outline-success text-light">
                                        {props.btn}
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-md-6 pt-5 mt-5 img-div">
                                <img src={props.image} className="img-fluid text-light animated" alt="Some Network Problems." />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
          </>
     );
 }
 export default Common;