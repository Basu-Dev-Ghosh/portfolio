import React from 'react'
import { motion } from 'framer-motion'
import './Services.css'
const Services = () => {
    return (
        <><div>
            <div className="services-header">
                <h1>I would like to</h1>
                <h1>Help <span>you</span> with</h1>
            </div>
            <div className="row1-container">
                <motion.div whileHover={{ scale: 1.2 }} className="service-box box-down red">
                    <h2>UX Ui design</h2>
                    <p>Dont have any great design in your mind right now let me allow to do this for you</p>
                    <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="service-box  cyan">
                    <h2>Web Devlopment</h2>
                    <p>I will create fully responsive full stack website for your buissness or personal use</p>
                    <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="service-box box-down blue">
                    <h2>Web Organize</h2>
                    <p>I will assist you to Organize your buissness and personal websites</p>

                    <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt />
                </motion.div>
            </div>
        </div>

        </>
    )
}

export default Services