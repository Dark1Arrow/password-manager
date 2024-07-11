import React from 'react'
import logo from '/logo.svg'
import hey from "/Hey.svg"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Welcome = () => {

   

    return (
        <div>
            <div  className='h-[90vh]' >
                <div className="logo lg:m-12 m-3">
                    
                <div className="circle fixed lg:top-[-400px] lg:right-[-400px] lg:bottom-[-400px] bottom-[-350px] right-[-60%] ">
                        <motion.div
                         initial={{opacity:0,scale:0,}} 
                         animate={{opacity:1,scale:1,}}
                         transition={{duration:1}} >
                        <div className='w-[800px] h-[800px] rounded-[50%] bg-[#53c0fe] '></div>                  
                        </motion.div>
                    </div>

                    <img src={logo} className='z-0 lg:w-40 w-24' alt="" />
               
                    <div className='z-20 lg:relative fixed left-[25px]  lg:m-[150px] m-5 flex flex-col  justify-center items-center gap-6'>
                        <div className='flex justify-center lg:flex-row flex-col items-center gap-5'>
                            <img src={hey} className='lg:w-28 w-16' alt="" />
                            <h1 className='lg:text-7xl text-6xl  text-[#00A3FF]'>Welcome !</h1>
                        </div>
                        <div  className='text-sm'>click the option to start the manager.</div>
                        <Link to="/Create-password">    <button type="button" className= 'delay-150 transition ease-in-out hover:bg-[#1a75ff] hover:-translate-y-1 hover:scale-110 font-semibold bg-[#00A3FF] text-white p-2 pr-12 pl-12 rounded-[30px] mt-9' > Get Started </button></Link>
                    </div>

                    <div className='z-20 lg:m-9 m-9 lg:relative fixed bottom-0  text-black flex justify-center items-center font-semibold'>Not  your first time ? <span className='text-green-500'>Skip the tutorial.</span></div>

                    <div className="circle fixed lg:bottom-[-400px] lg:right-[1100px] lg:left-[-400px] bottom-[-350px] right-[-60%] ">
                        <motion.div
                         initial={{opacity:0,scale:0,}} 
                         animate={{opacity:1,scale:1,}}
                         transition={{duration:1}} >
                        <div className=' z-0 w-[800px] h-[800px] rounded-[50%] bg-[#53c0fe] '></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
