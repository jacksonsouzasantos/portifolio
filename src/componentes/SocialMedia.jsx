import React from "react";
import { FaTwitter, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import '../style/SocialMedia.css';
function SocialMedia() {
  return (
    <ul className='social_list'>
      <li>
        <a href='https://github.com/jacksonsouzasantos' target="blank" data-testid='github-icon'>
          <FaGithub />
          <span>Github</span>
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/jackson-santos-dev/' target="blank"data-testid="linkedin-icon">
          <FaLinkedinIn />
          <span>LinkedIn</span>
        </a>
      </li>
      <li>
        <a href='https://twitter.com/souzaTEC' target="blank" data-testid="twitter-icon">
          <FaTwitter />
          <span>Twitter</span>
        </a>
      </li>
      <li>
        <a href='https://wa.me/5583998136924' target="blank" data-testid="whatsapp-icon">
          <FaWhatsapp />
          <span>WhatsApp</span>
        </a>
      </li>
    </ul>
  )
}
export default SocialMedia;