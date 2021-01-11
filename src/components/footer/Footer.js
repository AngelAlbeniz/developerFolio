import React, { useContext } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
		<p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("“Develop a passion for learning. If you do, you will never cease to grow.” – Anthony J. D’Angelo")}
		</p>
      </div>
    </Fade>
  );
}
