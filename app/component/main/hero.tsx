import React from 'react';
import HeroContent from '../sub/heroContent';

const Hero = ()=>{
    return (
        <div className='h-full w-full flex flex-col  relative'>

            <video
            autoPlay
            muted
            loop
            className='rotate-180 absolute top-[-290px]  left-0 z-[1] w-full h-full object-cover'
            >
<source src='/blackhole.webm' type='video/webm' />
            </video>
            <HeroContent/>
        </div>
    )
}

export default Hero;