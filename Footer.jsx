import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const [data,setData]=useState();
    
    const formSubmit=(e)=>{
        e.preventDefault();
        setData("");

    }
    const date = new Date().getFullYear();
    return (
        <>
            <footer className="text-center text-white mb-0 my-5 bg-dark">
                <div className="container p-4">

                    <section className="mb-3">
                        <a className="btn btn-outline-light btn-floating m-1"
                            href="https://www.facebook.com/hareshyam.prasad" role="button">
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-twitter"></i>
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1"
                            href="https://google.com/google" role="button">
                            <i className="fab fa-google"></i>
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1"
                            href="https://www.instagram.com/hareshyam_madheshiya/" role="button">
                            <i className="fab fa-instagram"></i>
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-linkedin-in"></i>
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1"
                            href="https://github.com/Hareshyam/Shyam" role="button">
                            <i className="fab fa-github"></i>
                        </a>
                    </section>


                    <section className="mb-0">

                        <form action="#" onSubmit={formSubmit}>
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example2" 
                                         autoComplete="off"
                                         className="form-control" 
                                         placeholder="Email address"
                                         onChange={(e)=>{setData(e.target.value)}}
                                         value={data}
                                        />
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button type="submit"
                                    className="btn btn-outline-light">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                    <div className="text-center mb-0">
                            Copyright © {date}
                        </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;