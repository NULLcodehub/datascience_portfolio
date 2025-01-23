import React, { useState,useEffect } from 'react';
import BannerImage from '../../../../assets/images/banner_image.png'
import {motion} from 'motion/react'
import './Header.css'



const Header = () => {
    const [headerText,setHeaderText]=useState("")
    
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
    // console.log(headerText)



    return (
        <div className='text-white h-[90svh] flex items-center justify-center'>
            <div className=' w-6/12 h-full p-10'>
                <motion.div
                //   
                className='header-text '>
                    <h1 className='ml-11'>{headerText}</h1>
                </motion.div>

                
            </div>


            <div className='w-6/12 h-full flex items-end justify-center'>
                <motion.img 

                initial={{
                    height: 0,
                    
                    // translateY:100
                }}

                animate={{
                    
                    height:[0,'43svh','40svh'],
                    // translateY:-20,
                    transition:{delay:1,duration:1.5,ease:[0.83, 0, 0.17, 1]}
                }}
                src={BannerImage} className='w-[30svw] mb-20' alt="" />
            </div>
        </div>
    );
};
export default Header;