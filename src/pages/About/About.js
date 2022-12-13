import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import profile2 from "../../Images/profile2.jpg";
import Pointer from "../../Components/Pointer/Pointer";
import Skills from "../../Components/Skills/Skills";
import Services from "../../Components/Services/Services";
import Active from "../../Components/Active/Active";
import { useNavigate } from "react-router-dom";
const About = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      <Pointer pointerColor={"#1aa810"} />
      {loading ? (
        <Loader loadColor={"#1aa810"} />
      ) : (
        <>



          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className="about"
          ><Active activeText={"ABOUT"} activeColor={"#1aa810"} />
            <Navbar navColor={"#1aa810"} navbg={"#000"} />
            <div className="profile-section">
              <div className="profile-image">
                <img src={profile2} alt="Profile pic" />
              </div>
              <div className="profile-about">
                <h1>Basudev Ghosh</h1>
                <h2>Full stack Web Devloper</h2>
                <p>
                  Hi! My name is Basudev Ghosh. I am a{" "}
                  <span>Full stack Web Developer</span>, and I'm very passionate
                  and dedicated to my work. With 2 years experience as a Full
                  stack Web developer, I have acquired the skills and knowledge
                  necessary to make your project a success. I enjoy every step
                  of the design process, from discussion and collaboration.
                </p>
                <div className="info-container">
                  <div className="info">
                    <i class="fa-solid fa-cake-candles"></i>
                    <p>Birthday</p>
                    <p>18.10.2001</p>
                  </div>
                  <div className="info">
                    <i class="fa-solid fa-location-pin"></i>
                    <p>Loaction</p>
                    <p>Kolkata,India</p>
                  </div>
                  <div className="info">
                    <i class="fa-solid fa-graduation-cap"></i>
                    <p>Study</p>
                    <p>Heritage Institute Of Technology</p>
                  </div>
                  <div className="info">
                    <i class="fa-solid fa-envelope"></i>
                    <p>Mail</p>
                    <p>basu1735@gmail.com</p>
                  </div>
                  <div className="info">
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>Age</p>
                    <p>22</p>
                  </div>
                  <div className="info">
                    <i class="fa-solid fa-phone"></i>
                    <p>Phone</p>
                    <p>+91 6295610296</p>
                  </div>
                  <div className="info">
                    <i class="fa-solid fa-laptop"></i>
                    <p>Freelance</p>
                    <p>Available</p>
                  </div>
                </div>
                <div className="button-container">
                  <a href="https://drive.google.com/file/d/1L8cS6bf5JlmSyrEaSYTtJfJgJHhmKXnv/view?usp=sharing" target="_blank">
                    <motion.button
                      whileHover={{ backgroundColor: "#657807" }}
                      whileTap={{ scale: 0.6 }}
                      className="button1"

                    >
                      Download CV
                    </motion.button>
                  </a>

                  <motion.button
                    whileHover={{
                      backgroundColor: "#000",
                      color: "#fff",
                    }}
                    onClick={() => {
                      navigate("/contact")
                    }}
                    whileTap={{ scale: 0.6 }}
                    className="button2"
                  >
                    Hire me
                  </motion.button>
                </div>
              </div>
              <div className="skills">
                <Skills />
              </div>
              <div className="services">
                <Services />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default About;
