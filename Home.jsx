import React from 'react';
import img2 from './image/web2.png';
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common
             name='Grow your knowladge with'
             image={img2}
             visite='/service'
             btn='Get Started'
            />
        </>
    )
}
export default Home;