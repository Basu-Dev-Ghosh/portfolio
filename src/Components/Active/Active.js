import React from 'react'
import "./Active.css"
import { motion } from 'framer-motion'
const Active = ({ activeText, activeColor }) => {
    return (
        <motion.div style={{ color: activeColor }} className='activa'>{activeText}</motion.div>
    )
}

export default Active