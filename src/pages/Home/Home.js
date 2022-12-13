import React, { useState, useEffect } from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import profile from "../../Images/profile.jpg";
import Loader from "../../Components/Loader/Loader";
import Navbar from "../../Components/Navbar/Navbar";
import Pointer from "../../Components/Pointer/Pointer";
import Active from "../../Components/Active/Active";
import { useNavigate } from "react-router-dom";
import HeaderIcon from "../../Components/HeaderIcon/HeaderIcon";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      <Pointer pointerColor={"#bf2e97"} />
      {loading ? (
        <Loader loadColor={"#bf2e97"} />
      ) : (
        <>
          <HeaderIcon color={"#fff"} />
          <Active activeText={"HOME"} activeColor={"#bf2e97"} />
          <Navbar navColor={"#bf2e97"} navbg={"#000"} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className="home"
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="image">
              <motion.img
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                src={profile}
                className="profile-img"
                alt="Profile-Pic"
              />
            </div>
            <div className="signature">
              <h1>
                Basu<span>_</span>dev
              </h1>
              <div className="under-signature">
                <h4>
                  MEET A
                  <span className="typewritter">
                    <Typewriter
                      options={{
                        strings: ["devloper", "freelancer", "designer"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </h4>
              </div>
            </div>
            <div className="socials">
              <a
                href="https://www.facebook.com/basu.ghosh.790/"
                target="_blank"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/onlybasu/" target="_basu">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://github.com/Basu-Dev-Ghosh" target="_basu">
                {" "}
                <i class="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/basudev-ghosh-33b9a5251/"
                target="_basu"
              >
                {" "}
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Home;
