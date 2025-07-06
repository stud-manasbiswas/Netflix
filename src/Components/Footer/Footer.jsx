import React from "react";
import "./Footer.css";
import youtube_icon from "../../assets/assets/youtube_icon.png";
import twitter_icon from "../../assets/assets/twitter_icon.png";
import instagram_icon from "../../assets/assets/instagram_icon.png";
import facebook_icon from "../../assets/assets/facebook_icon.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p class="copyright-text">© 1997-2023 Netflix, Inc.</p>
    </div>
  );
}

export default Footer;
