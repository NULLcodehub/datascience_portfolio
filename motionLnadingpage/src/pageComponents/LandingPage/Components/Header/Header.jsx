import React, { useState,useEffect } from 'react';
import BannerImage from '../../../../assets/images/banner_image.png'
import headerimg1 from '../../../../assets/images/header-logo1.png'
import headerimg2 from '../../../../assets/images/header-logo2.png'
import {motion} from 'motion/react'
import './Header.css'
import { useMediaQuery } from 'react-responsive';


const Header = () => {
    const [headerText,setHeaderText]=useState("")
    const isMobile = useMediaQuery({query:'(max-width:768px)'})

    const text='The Fusion of Art and Analytical Brilliance'

    useEffect(() => {
        let i = 0;
        const splitText = text.split(' '); 
        setHeaderText(' ')
        const intervalID = setInterval(() => {
            // console.log(splitText[i]); 
            setHeaderText((pre) => pre + (pre ? " " : "") + splitText[i]);
            i++;
            if (i >= splitText.length-1) {
                clearInterval(intervalID);
            }
        }, 160);
    
        return () => clearInterval(intervalID);
    },[text]);
  



    return (
        <div className='text-white h-[90svh] md:flex flex-wrap items-center justify-center'>
            <div className='w-full md:w-6/12 h-[60svh] md:h-full p-10'>
                <motion.div
                //   
                className='header-text  h-[20svh] md:h-[30svh] flex flex-col justify-center'>
                    <h1 className="md:ml-11 text-[6svh] md:text-[8svh] w-full ">{headerText}</h1>
                </motion.div>

                <motion.div
                initial={{opacity:0}}
                animate={{opacity:1,transition:{delay:1.5,duration:1}}}
                >
                    <p className='md:ml-11 py-3 my-10 text-[2svh] md:text-[3svh] w-full header_text'>
                    Delving into data science and machine 
                    learning <span><motion.img
                    initial={{
                        width:0
                    }}
                    animate={{
                        width:isMobile?['13svw']:['0','5svw','4svw'],
                        transition:{delay:1,duration:1.5,ease:[0.83, 0, 0.17, 1]}
                    }}
                    src={headerimg1} alt=""  className='inline w-12 md:w-16' /></span> with real-world projects, insightful case studies,
                    and hands-on notebooks <span><motion.img
                    initial={{
                        width:0
                    }}
                    animate={{
                        width:isMobile?['13svw']:['0','4.5svw','4svw'],
                        transition:{delay:1.3,duration:1.5,ease:[0.83, 0, 0.17, 1]}
                    }}
                    
                    src={headerimg2} alt=""  className='inline w-12 md:w-16' /></span>.
                    Turning raw data into meaningful 
                    solutions, one analysis at a time.

                    </p>
                </motion.div>

                
            </div>


            <div className='w-full  md:w-6/12 md:h-full flex items-end justify-center'>
                <motion.img 

                initial={{
                    height: 0,
                    
                    // translateY:100
                }}

                animate={{
                    
                    height:isMobile ? [0,'35svh','30svh']:[0,'43svh','40svh'],
                    // translateY:-20,
                    transition:{delay:1,duration:1.5,ease:[0.83, 0, 0.17, 1]}
                }}
                src={BannerImage} className='w-[70svw] md:w-[30svw] mb-20' alt="" />
            </div>
        </div>
    );
};
export default Header;