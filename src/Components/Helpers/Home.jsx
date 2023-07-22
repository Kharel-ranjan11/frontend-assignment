import { motion } from 'framer-motion'
import React from 'react'
import { Navbar } from '../Navbar'
import { C_ards } from './Cards'
import { Pagefooter } from './Pagefooter'
import { Service } from './Service'
import { PicSection } from './PicSection'
import { NewCArd } from './NewCArd'


export const Home = ({}) => {
   
    return (
        <>
          <motion.div initial={{ y: 55, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.75
                }}>

                <Navbar />
                <PicSection/>
                <Service />
                <C_ards  />
                <Pagefooter />
            </motion.div>


            {/* <SingleProduct /> */}
            {/* <Overlay/> */}
        </>
    )
}
