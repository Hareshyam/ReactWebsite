import React from 'react';
import Common from './Common';
import img1 from './image/mrketing1.jpg';
 const About=()=>{
     return(
         <>
            <Common
             name='Welcome to About page with'
             image={img1}
             visite='/contact'
             btn='Contact Now'
            />
         </>
     )
 }
 export default About;