import React, { createRef, useContext } from "react";
import { Fade, Slide, Zoom } from "react-reveal";
import "./EducationCard.css";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({ school }) {
  const imgRef = createRef();

  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item,i) => <li key={i} className="subTitle">{item}</li>)
      : null;
  };
  const { isDark } = useContext(StyleContext);
  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          <div className="education-card-left">
            <img
              crossOrigin={"anonymous"}
              ref={imgRef}
              className="education-roundedimg"
              src={school.logo}
              alt={school.schoolName}
            />
          </div>
          <div className="education-card-right">
            <h5 className="education-text-school">{school.schoolName}</h5>

            <div className="education-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode education-text-subHeader"
                    : "education-text-subHeader"
                }
              >
                {school.subHeader}
              </h5>
              <p
                className={`${
                  isDark ? "dark-mode" : ""
                } education-text-duration`}
              >
                {school.duration}
              </p>
              <p className="education-text-desc">{school.desc}</p>
              <div className="education-text-bullets">
                <ul>
                  <GetDescBullets descBullets={school.descBullets} />
                </ul>
				<p className={isDark ? "dark-mode footer-text" : "footer-text"}>
					Final project:{" "}
					<a href="https://academica-e.unavarra.es/xmlui/bitstream/handle/2454/29293/TFG%20%C3%81ngel%20Alb%C3%A9niz%20Marqu%C3%ADnez.pdf?sequence=2&isAllowed=y">
					TFG
					</a>
				</p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}
