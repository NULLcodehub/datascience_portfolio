import React from 'react';
import {motion} from 'motion/react'
import {useMediaQuery} from 'react-responsive'

import './Navbar.css'
const Navbar = () => {
    const isMobile = useMediaQuery({query:'(max-width:768px)'})

    return (
        <motion.div 
        initial={{
            width:0,
            // translateX:0
     
        }}
        animate={{
            width:isMobile? '100%':[0,'45svw','40svw'],
            // width:'40svw',
            transition:{duration:2,ease:[0.83, 0, 0.17, 1]}

        }}
        className='bg-white md:w-[40svw] h-[10svh]'>
            < div
                       
            className='w-full h-full flex items-center p-10'>
                 <div className='font-bold text-2xl'>
                    LineAI.
                 </div>
                 <div className='w-full '>
                    <motion.ul
                    
                    initial={{
                        opacity:0,
                        translateY:10,
                    }}
                    animate={{
                        opacity:1,  
                        translateY:0,
                        transition:{
                            // duration:1,
                            delay:1
                        }
                    }}
                    
                    className='flex gap-10 justify-center '>
                        <li>Case-studies</li>
                        <li>Works</li>
                    </motion.ul>
                 </div>
            </div>
            
        </motion.div>
    );
};

export default Navbar;