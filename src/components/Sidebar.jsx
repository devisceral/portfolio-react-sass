
import SocialNetworks from "./SocialNetworks"
import InformationContainer from "./InformationContainer"

import Avatar from "../img/andremendes.jpg"

import "../styles/components/sidebar.sass"

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="André Mendes" />
      <p className="title">Desenvolvedor Web Full-Stack</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="https://drive.google.com/file/d/1t1oHLD-4BnS_h9-OYviREScpeHjmByYq/view?usp=sharing" target="_blank" className="btn">Download currículo</a>
    </aside>
  )
}

export default Sidebar