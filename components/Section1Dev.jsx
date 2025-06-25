import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import Computers from '../models/Computers';

const Section1Dev = () => {
    return (
        <div className='relative w-full h-screen'>
            <div className={`${styles.paddingX} absolute w-3xl inset-0 top-[30px] ml-[80px] mx-auto flex flex-row items-start gap-5`}>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-4 h-4 rounded-full bg-[#6f3fc7]' />
                    <div className='w-[4px] md:h-50 lg:h-50 xl:h-50 sm:h-50 xs:h-40 @2xs:h-40 violet-gradient' />
                </div>
                <div>
                    <label className={`${styles.heroHeadText} text-white`}>Hi, </label>
                    <label className={`${styles.heroHeadText} text-white`}>I'm <span className='text-[#F0AEFF]'>Lakshan</span></label>
                    <p className={`${styles.heroSubText} mt-2 text-white`}>
                        I am a <span className='text-[#F0AEFF]'>Full Stack Developer </span>
                        with a passion for creating dynamic and responsive web applications.
                    </p>
                </div>
                <div className='flex flex-row items-center w-[40%] gap-3 justify-between'>
                    <div className='w-[300px] h-[40px] bg-[#DEDEDE] rounded-sm border border-purple-400'></div>
                    <div className='w-[100px] h-[100px]'>
                        <img src="./side_images/developer1.png" className='w-[100%] h-[100%] object-contain' alt="" />
                    </div>
                </div>
            </div>
            <Computers />
        </div>
    )
}

export default Section1Dev