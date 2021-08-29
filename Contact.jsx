import React,{useState} from 'react';
import contact from './image/Contact.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const [data,setData]=useState(
    {
      Name:"",
      Email:"",
      Number:"",
      Message:""
    }
  );

  const inputEvent=(e)=>{
      const {name,value}=e.target;
     setData((preValue)=>{
       return{
         ...preValue,
         [name]:value
       };
     });
  }

  const formSubmit=(e)=>{
      e.preventDefault();
      if(data.Name=="" || data.Number=="" || data.Email=="" || data.Message=="")
      {
        toast.error("Plz Fill The Data.",{
          position:'top-center'
        });
      }else{
        toast.success("Submit Successfull",{
          position:'top-center'
        });
      }
  }

  return (
    <>
      <div className="text-light my-1">
        <h1>ContactUs</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 col-lg-11 col-md-8 mx-auto mt-2">
            {/* <div className="col-lg-6 col-xs-10">*/}


            <div className="row d-flex">
                <form onSubmit={formSubmit} className="form col-md-6 pt-5 mt-5">
                  <div className="form-group mb-3">
                    <label className="form-label text-light"> FullName</label>
                    <input type="text"
                      class="form-control"
                      onChange={inputEvent}
                      value={data.Name}
                      name="Name"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-light">Contact Number</label>
                    <input type="number"
                      class="form-control"
                      onChange={inputEvent}
                      value={data.Number}
                      name="Number"
                      placeholder="Enter contact number"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-light">Email address</label>
                    <input type="email"
                      class="form-control"
                      onChange={inputEvent}
                      value={data.Email}
                      name="Email"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-light">Message</label>
                    <textarea
                    onChange={inputEvent} 
                    value={data.Message}
                    name="Message"
                    className="form-control txt" 
                    rows="3">
                    </textarea>
                  </div>

                  <div className="mb-3">
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                  </div>
                </form>
              

              <div className="col-md-6 my-auto">
                <img src={contact} className="img-fluid text-light my-5 contact-img" alt="Some Network Problems." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}
export default Contact;