import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

const iconMap = {
  facebook: faFacebookF,
  instagram: faInstagram,
  email: faEnvelope,
};

const Footer = ({ address, socialLinks, copyright, formInfo, navLinks }) => {
  return (
    <footer>
      <div className="container">
        <div className="addressCol">
          <div className="addressRow address">
            <p>{address}</p>
          </div>
          <div className="addressRow social-link">
            <ul>
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>
                    <FontAwesomeIcon icon={iconMap[link.icon]} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="addressRow copyRight">
            <p>{copyright}</p>
          </div>
        </div>

        <div className="formCol">
          <p>{formInfo.description}</p>
          <div className="formWrapp" id="section1">
            <form>
              <div className="formRow">
                <div className="width50">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                  />
                </div>
                <div className="width50">
                  <input type="text" name="lastName" placeholder="Last Name" />
                </div>
              </div>
              <div className="formRow">
                <div className="width50">
                  <input type="email" name="email" placeholder="Email" />
                </div>
                <div className="width50">
                  <input
                    type="tel"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                  />
                </div>
              </div>
              <div className="formRow">
                <div className="width100">
                  <textarea placeholder="Add a message"></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="footerNav">
          <p>
            <strong>Menu</strong>
          </p>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.label}</Link>{" "}
                {/* No <a> tag here */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
