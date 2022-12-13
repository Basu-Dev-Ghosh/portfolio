import React from 'react'
import { useRef } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../../Hooks/useMousePosition";
import './Pointer.css'
const Pointer = ({ pointerColor }) => {
    const ref = useRef(null);
    const { x, y } = useMousePosition(ref);
    return (
        <motion.div
            ref={ref}
            className="box"
            animate={{ x, y }}
            transition={{
                type: "spring",
                damping: 3,
                stiffness: 50,
                restDelta: 0.001,
            }}
        >



            <i style={{ color: pointerColor }} class="fa-solid fa-ghost"></i>




        </motion.div >
    )
}

export default Pointer