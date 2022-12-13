import React, { useEffect } from 'react'
import './WorkModal.css'
import $ from "jquery";
import { motion } from 'framer-motion';

const WorkModal = ({ images, info, id }) => {

    return (
        <>

            <div className="modalcontainer" id={`${id}container`}>
                <div class="flex">
                    <div class="modal" id={id}>

                        <div
                            class="close"
                            onClick={() => {
                                $(".modalcontainer,.modal").fadeOut("slow");
                            }}
                        >
                            <span>&#43;</span>
                        </div>
                        <div class="content">

                            <h2>{info.title}</h2>
                            <ul className="grid">
                                {
                                    images.map((img) => {
                                        return (
                                            <li>
                                                <figure className="grid__figure">
                                                    <motion.img whileHover={{ scale: 1.7 }}
                                                        transition={{ duration: .6, type: 'tween' }}
                                                        src={img}
                                                        alt
                                                    />

                                                </figure>
                                            </li>

                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div
                            class="buttons"
                            onClick={() => {
                                $(".modalcontainer,.modal").fadeOut("slow");
                            }}
                        >
                            <a href={info.links[0]} target='_basu'><i class="fa-solid fa-code"></i>View Code</a>
                            <a href={info.links[1]} target='_basu'><i class="fa-brands fa-chrome"></i>Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <img src={images[0]} />
                <div className="info">
                    <h1>{info.title}</h1>
                    <p>
                        {info.desc}
                    </p>
                    <button
                        href="#0"
                        class="modalbttn"
                        onClick={() => {
                            $(`#${id}container,#${id}`).fadeIn("slow");
                        }}
                    >
                        Open
                    </button>
                </div>
            </div>

        </>
    )
}

export default WorkModal