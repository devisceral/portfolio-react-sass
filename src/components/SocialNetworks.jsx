import '../styles/components/socialnetworks.sass';

import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

import "../styles/components/sidebar.sass"

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/feed/" },
  { name: "github", icon: <FaGithub />, url: "https://github.com/devisceral" },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.url} target="_blank" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  )
}

export default SocialNetworks