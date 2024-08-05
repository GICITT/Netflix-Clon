import React from "react";
import "./Footer.css";
import { PiInstagramLogoThin } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <FaFacebookF className="Icon" />
        <PiInstagramLogoThin className="Icon" />
        <FaYoutube className="Icon" />
        <FaTwitter className="Icon" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Investor Relations</li>
        <li>Legal Notices</li>
        <li>Help Center</li>
        <li>Jobs</li>
        <li>Cookie Preferences</li>
        <li>Gift Card</li>
        <li>Terms of Use</li>
        <li>Corporate Information</li>
        <li>Press</li>
        <li>Privacy</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text"> 1997-2024 Netflix, Inc.</p>
    </div>
  );
}
