import "./programs.css";
import { dataPrograms } from "../../data/dataPrograms.jsx";


export const Programs = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">nuestros</span>
        <span>HIGHLIGHTS</span>
      </div>
      <div className="programs-categories">
      {dataPrograms.map((program, index) => (
        
        <div key={index} className="category" style={{ backgroundImage: `url(${program.imageBackground})`}}>
          {/* Agrega la imagen de fondo usando la propiedad style */}
          
          <span>{program.heading}</span>
          <span>{program.details}</span>
          <div className="category-name"><button className="btn">{program.heading}{program.image}</button></div>
        </div>
      ))}
    </div>
    </div>
  );
};
