import React from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = ({ navColor, navbg }) => {

    return (
        <div className="Navbar">

            <motion.h1 whileHover={{ scale: 1.2, }}
                whileTap={{
                    scale: .6,
                    borderRadius: "10%"
                }}
                className='menu-icon'>
                <a href='#menu' style={{ color: navColor }}><i class="fa-solid fa-bars"></i></a>
            </motion.h1>
            <div className="popover" id="menu">
                <div className="content" style={{
                    background: navbg,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"

                }}>
                    <a href="#" className="close" />
                    <div className="nav">
                        <ul className="nav_list" >
                            <motion.div whileHover={
                                {
                                    left: 190,
                                    scale: 1.2,
                                }
                            } className="nav_list_item i1">
                                <li >
                                    <NavLink to="/">
                                        Home
                                    </NavLink>

                                </li>
                            </motion.div>
                            <motion.div whileHover={
                                {
                                    left: 30,
                                    scale: 1.2,
                                }
                            } className="nav_list_item i2">
                                <li><NavLink to="/about">About</NavLink></li>
                            </motion.div>
                            <motion.div whileHover={
                                {
                                    right: 90,
                                    scale: 1.2,
                                }
                            } className="nav_list_item i3">

                                <li><NavLink to="/works">Works</NavLink></li>
                            </motion.div>
                            <motion.div whileHover={
                                {
                                    right: 90,
                                    scale: 1.2,
                                }
                            } className="nav_list_item i4">
                                <li><NavLink to="/contact">Contact</NavLink></li>
                            </motion.div>
                        </ul>
                    </div>
                </div>
            </div >
        </div >

    )
}

export default Navbar