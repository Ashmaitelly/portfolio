import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Ashmaitelly" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://linkedin.com/in/abdullah-shmaitelly" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>© Abdullah Shmaitelly</p>
    </footer>
  );
}

export default Footer;