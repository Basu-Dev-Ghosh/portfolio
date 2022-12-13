import React, { useState, useEffect } from "react";
import "./Works.css";
import Loader from "../../Components/Loader/Loader";
import Pointer from "../../Components/Pointer/Pointer";
import Active from "../../Components/Active/Active";
import { motion, useScroll } from "framer-motion";
import Navbar from "../../Components/Navbar/Navbar";
import WorkModal from "../../Components/WorkModal/WorkModal";
import { useNavigate } from "react-router-dom";
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images1 = Object.values(
  importAll(require.context(`../../Images/work1`, true, /\.(png|jpe?g|svg)$/))
);
const images2 = Object.values(
  importAll(require.context(`../../Images/work2`, true, /\.(png|jpe?g|svg)$/))
);
const images3 = Object.values(
  importAll(require.context(`../../Images/work3`, true, /\.(png|jpe?g|svg)$/))
);
const images4 = Object.values(
  importAll(require.context(`../../Images/work4`, true, /\.(png|jpe?g|svg)$/))
);
const images5 = Object.values(
  importAll(require.context(`../../Images/work5`, true, /\.(png|jpe?g|svg)$/))
);
const images6 = Object.values(
  importAll(require.context(`../../Images/work6`, true, /\.(png|jpe?g|svg)$/))
);

const Works = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      <Pointer pointerColor={"#cb0b0b"} />
      {loading ? (
        <Loader loadColor={"#cb0b0b"} />
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className="works"
          >
            <Active activeText={"WORKS"} activeColor={"#cb0b0b"} />
            <Navbar navColor={"#000"} navbg={"#000"} />
            <div className="flex">
              <div className="wrapper">
                <h1 className="works-header">
                  Some of my <span>Latest</span> Works
                </h1>
                <h2>Trust me i am improving</h2>
                <WorkModal
                  images={images1}
                  info={{
                    title: "CheapStore",
                    desc: "Novel Resell Platform For Educational Instituitions Built on MERN Stack and Socket.io",
                    links: [
                      "https://github.com/Basu-Dev-Ghosh/CheapStore",
                      "https://cheapstore-client.vercel.app/",
                    ],
                  }}
                  id={"work1"}
                />
                <WorkModal
                  images={images2}
                  info={{
                    title: "HiFi-A Social Media App",
                    desc: "A social media website with some functionalities like edit profile,add post,like on the post,comment on the post,check others profile etc",
                    links: [
                      "https://github.com/Basu-Dev-Ghosh/HiFi",
                      "https://hi-fi-client.vercel.app/",
                    ],
                  }}
                  id={"work2"}
                />
                <WorkModal
                  images={images3}
                  info={{
                    title: "notes-Ify",
                    desc: "This is a platform where user can share handwritten notes and others users can buy it",
                    links: [
                      "https://github.com/Basu-Dev-Ghosh/notes-ify",
                      "https://basu-dev-ghosh.github.io/notes-ify/",
                    ],
                  }}
                  id={"work3"}
                />
                <WorkModal
                  images={images4}
                  info={{
                    title: "Google_clone",
                    desc: "A simple Google Clone using React and hosted on firebase",
                    links: [
                      "https://github.com/Basu-Dev-Ghosh/Google_clone",
                      "https://clone-5fd12.web.app/",
                    ],
                  }}
                  id={"work4"}
                />
                <WorkModal
                  images={images5}
                  info={{
                    title: "ICVP_website",
                    desc: "This is a unofficial Website of ISWAR CHANDRA VIDYASAGAR POLYTECHNIC COLLEGE. It includes FrontEnd as PUG template Engine Backend and Database.",
                    links: [
                      "https://github.com/Basu-Dev-Ghosh/ICVPwebsite",
                      "https://icvp-website.herokuapp.com/",
                    ],
                  }}
                  id={"work5"}
                />
                <WorkModal
                  images={images6}
                  info={{
                    title: "mini-Chat-App-using-Socket.io ",
                    desc: "This is a Mini chat app created using ReactJs NodeJs and Socket.io",
                    links: [
                      "https://github.com/Basu-Dev-Ghosh/mini-Chat-App-using-Socket.io",
                      "https://basu-dev-ghosh.github.io/mini-Chat-App-using-Socket.io/",
                    ],
                  }}
                  id={"work6"}
                />
                <div className="show-more">
                  <h4>Want to see some more works??</h4>
                  <p>Click here</p>
                  <a href="https://github.com/Basu-Dev-Ghosh" target="_blank">
                    <button>My Github</button>
                  </a>
                  <p>Or you can</p>
                  <a
                    onClick={() => {
                      navigate("/contact");
                    }}
                  >
                    <button>Hire Me</button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Works;
