import Avatar from "../img/andremendes.jpg"

import "../styles/components/sidebar.sass"

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="André Mendes" />
      <p>Imagem</p>
      <p classname="title">Desenvolvedor</p>
      <p>redes sociais</p>
      <p>informações de contato</p>
      <a href="" className="btn">Download currículo</a>
    </aside>
  )
}

export default Sidebar