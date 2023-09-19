import "./facilities.css";
import { useState } from "react";
import images from "../../data/dataImages";
import { motion } from "framer-motion";


export const Facilities = () => {
  const transition = { type: 'spring', duration: 3}

  const [currentImage, setCurrentImage] = useState(images[0]);

  const changeImage = (direction) => {
    const currentIndex = images.findIndex((img) => img.id === currentImage.id);

    if (direction === "izquierda") {
      const newIndex =
        currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      setCurrentImage(images[newIndex]);
    } else if (direction === "derecha") {
      const newIndex =
        currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      setCurrentImage(images[newIndex]);
    }
  };

  return (
    <div className="Facilities">
      <div className="left-fa">
        <span className="stroke-text">INSTALACIONES </span>
        <span>MODERNAS</span>
        <div className="list">
          <ol>
            <li>🏋️ Espacios de más de 1.500 m²</li>
            <li>
              🧘 Salas dedicadas a una amplia oferta de actividades dirigidas
            </li>
            <li>🏋️‍♂️ Más de 30 tipos de máquinas diferentes</li>
            <li>
              💪 Zonas de peso libre con mancuernas, barras, bancos y mucho más
            </li>
            <li>🏃‍♀️ Áreas enfocadas al entrenamiento funcional</li>
          </ol>
          <p>Échale un vistazo a nuestros gimnasios. </p>
        </div>
      </div>
      <div className="right-fa">
        <motion.div
          initial={{opacity: 0, x: -100}}
          transition={{...transition, duration: 2}}
          whileInView={{opacity: 1, x: 0}}
        ></motion.div>
        <motion.div
          initial={{opacity: 0, x: 100}}
          transition={{...transition, duration: 2}}
          whileInView={{opacity: 1, x: 0}}
        ></motion.div>
        <motion.img
          key={currentImage.src}
          initial={{opacity: 0, x: 100}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: -100}}
          transition={{transition, duration: 2}}
          
        src={currentImage.src} alt="" />
        <div className="arrows">
          <span onClick={() => changeImage("izquierda")}>&larr;</span>
          <span onClick={() => changeImage("derecha")}>&rarr;</span>
        </div>
      </div>
    </div>
  );
};
