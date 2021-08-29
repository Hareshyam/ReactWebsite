import React, { useState,useHistory } from 'react';
import ApiData from './ApiData';
const Service = () => {
    const [item, setItem] = useState(ApiData);
    //const history=useHistory();
    return (
        <>
            <div className="text-info my-3">
                <h1>Our guides and passion is improve your success!</h1>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 col-10 mx-auto">

                        <div className="row">
                            {
                                item.map((val, index) => {
                                    return (
                                    <div className="col-12 col-md-4 mt-4" key={index}>
                                        <div className="card p-2 ">
                                            <div className="image-div">
                                                <img src={val.image} className="img-fluid" alt="image" />
                                            </div>
                                            <p className="mt-3"><h4>{val.title}</h4></p>
                                            <p className="btn-p"><button className="btn btn-secondary">Get</button></p>
                                        </div>
                                    </div>
                                    );
                              })   
                            }
                           {/*<button className="btn btn-dark" onClick={()=>{history.goBack()}}>Go back</button>*/}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Service;