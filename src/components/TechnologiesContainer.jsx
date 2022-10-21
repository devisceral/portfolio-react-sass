// import {
//   DiHtml5,
//   DiCss3,
//   DiJsBadge,
//   DiNodejsSmall,
//   DiMysql,
//   DiReact,
//   DiJava,
//   DiMongodb,
//   DiBootstrap,
//   DiPostgresql,
//   DiJqueryLogo
// } from 'react-icons/di';

import '../styles/components/technologiescontainer.sass';

// const technologies = [
//   { id: "html", name: "HTML5", icon: <DiHtml5 />},
//   { id: "css", name: "CSS3", icon: <DiCss3 />},
//   { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap />},
//   { id: "js", name: "JavaScript", icon: <DiJsBadge />},
//   { id: "jquery", name: "Jquery", icon: <DiJqueryLogo />},
//   { id: "react", name: "React", icon: <DiReact />},
//   { id: "node", name: "Node.js", icon: <DiNodejsSmall />},
//   { id: "java", name: "Java", icon: <DiJava />},
//   { id: "mongodb", name: "MongoDb", icon: <DiMongodb />},
//   { id: "postgresql", name: "PostgreSQL", icon: <DiPostgresql />},
//   { id: "mysql", name: "MySQL", icon: <DiMysql />},
// ]

const myTecnologies = ["html5", "css3", "bootstrap", "javascript", "jquery", "reactjs", "react-native", "vuejs", "node", "typescript", "java", "mongodb", "postgresql", "mysql", "firebase", "git", "gitlab-ci"]; 

const TechnologiesContainer = () => {

  return (
    <>
      <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
          <div>
            {myTecnologies.map((tech, indice)=>(
              <div className="technology-card" key={tech}>
                  <img src={`https://xesque.rocketseat.dev/platform/tech/${myTecnologies[indice]}.svg`} alt={myTecnologies[indice]}></img>
              </div>
            ))}
          </div>
          {/* {technologies.map((tech)=>(
              <div className="technology-card" id={tech.id} key={tech.id}>
                {tech.icon}
                <div className="technology-info">
                  <h3>{tech.name}</h3>
                </div>
              </div>
            ))} */}

        </div>
      </section>
    </>
  );
};

export default TechnologiesContainer