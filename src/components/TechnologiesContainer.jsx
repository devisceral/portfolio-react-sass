import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact
} from 'react-icons/di';

import '../styles/components/technologiescontainer.sass';

// const technologies = [
//   { id: "html", name: "HTML5", icon: <DiHtml5 />},
//   { id: "css", name: "CSS3", icon: <DiCss3 />},
//   { id: "js", name: "JavaScript", icon: <DiJsBadge />},
//   { id: "node", name: "Node.js", icon: <DiNodejsSmall />},
//   { id: "mysql", name: "MySQL", icon: <DiMysql />},
//   { id: "react", name: "React", icon: <DiReact />},
// ]

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />},
  { id: "css", name: "CSS3", icon: <DiCss3 />},
  { id: "js", name: "JavaScript", icon: <DiJsBadge />},
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />},
  { id: "mysql", name: "MySQL", icon: <DiMysql />},
  { id: "react", name: "React", icon: <DiReact />},
]

// function requisition() {
//   fetch('https://api.github.com/users/devisceral')
//   .then(response => response.json())
//   .then(data => {
//     const bio = data.bio.toLowerCase().replaceAll(" ", "").split(',')
//     bio.map((index)=> {
//       var techCard = `"https://xesque.rocketseat.dev/platform/tech/${index}.svg"`;
//     })
//   })
//   .catch( error => console.error(error));
// }


const TechnologiesContainer = () => {

  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">

       {technologies.map((tech)=>(
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default TechnologiesContainer