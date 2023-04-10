import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import '../style/SocialMedia.css';
function SocialMedia() {
  return (
    <ul className='social_list'>
      <li>
        <a href='https://github.com/jacksonsouzasantos' target="blank">
          <FaGithub />
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/jacksonszsantos/' target="blank">
          <FaInstagram />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/jackson-santos-dev/' target="blank">
          <FaLinkedinIn />
        </a>
      </li>
      <li>
        <a href='https://twitter.com/souzaTEC' target="blank">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href='https://wa.me/5583998136924' target="blank">
          <FaWhatsapp />
        </a>
      </li>
    </ul>
  )
}
export default SocialMedia;