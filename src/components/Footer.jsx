import React from 'react'
import { FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="footer">
            <ul className='nav-items'>
                <li className='nav-item'>
                    <a className='nav-link' target='_blank' href="https://github.com/thomasflensted">
                        <FaGithub />
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' target='_blank' href="https://www.instagram.com/toughlens/">
                        <FaInstagram />
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' target='_blank' href="https://www.youtube.com/ripening">
                        <FaYoutube />
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="mailto:thomasflenstedjensen@gmail.com">
                        <IoIosMail />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer