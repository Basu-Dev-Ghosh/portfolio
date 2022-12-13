import React, { useState, useEffect } from "react";
import "./Contact.css";
import Loader from "../../Components/Loader/Loader";
import Navbar from "../../Components/Navbar/Navbar";
import Active from "../../Components/Active/Active";
import Pointer from "../../Components/Pointer/Pointer";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [messege, setMessege] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  const sendMessege = async () => {
    if (!name || !email || !phone || !messege) {
      toast.error("Please fill the input");
    } else {
      try {
        emailjs.send(
          "service_8babtb3",
          "template_u8dkbfr",
          {
            name,
            email,
            phone,
            messege,
          },
          "E1o2OcJneKcoyHqxA"
        );

        toast.success("Messege Sent");
      } catch (err) {
        toast.error("Failed");
      }
    }
  };

  return (
    <>
      <Pointer pointerColor={"#0d324d"} />
      {loading ? (
        <Loader loadColor={"#0d324d"} />
      ) : (
        <>
          <Active activeText={"CONTA"} activeColor={"#000"} />
          <Navbar navColor={"#fff"} navbg={"#0d324d"} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className="background"
          >
            <div className="container">
              <div className="left">
                <div className="app-title">
                  <p>Have an IDEA ??</p>
                  <span>CONTACT</span>
                  <span>Me</span>
                </div>
                <div className="contacts">
                  <div className="contact-info">
                    <i class="fa-solid fa-phone"></i>
                    <p>Phone</p>
                    <p>+91 6295610296</p>
                  </div>{" "}
                  <div className="contact-info">
                    <i class="fa-solid fa-envelope"></i>
                    <p>Email</p>
                    <p>basu1735@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      type="text"
                      placeholder="Your name?"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      type="email"
                      className="app-form-control"
                      placeholder="Your email?"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      type="text"
                      className="app-form-control"
                      placeholder="Your contact no?"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group message">
                    <textarea
                      rows={2}
                      style={{
                        resize: "none",
                        fontFamily: "'Comfortaa', 'cursive'",
                      }}
                      className="app-form-control"
                      placeholder="Your messege?"
                      value={messege}
                      onChange={(e) => setMessege(e.target.value)}
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button
                      className="app-form-button"
                      onClick={() => navigate("/")}
                    >
                      CANCEL
                    </button>
                    <button className="app-form-button" onClick={sendMessege}>
                      SEND
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Toaster
              containerStyle={{
                top: "40%",
                left: 20,
                bottom: 20,
                right: 20,
              }}
              toastOptions={{
                success: {
                  iconTheme: {
                    primary: "blue",
                    secondary: "white",
                  },
                  style: {
                    border: "1px solid #713200",
                    padding: "36px",
                    color: "#713200",
                    fontSize: "24px",
                    fontFamily: "'Comfortaa', 'cursive'",
                  },
                },
                error: {
                  duration: 700,
                  style: {
                    border: "1px solid #713200",
                    padding: "36px",
                    color: "#713200",
                    fontSize: "24px",
                    fontFamily: "'Comfortaa', 'cursive'",
                  },
                },
              }}
            />
          </motion.div>
          )
        </>
      )}
    </>
  );
};

export default Contact;
