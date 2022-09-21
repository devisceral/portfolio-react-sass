
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
      <a href="" className="btn">Download currículo</a>
    </aside>
  )
}

export default Sidebar