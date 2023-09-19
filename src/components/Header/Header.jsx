import "../Header/header.css";
import { NavBar } from "../NavBar/NavBar";
import Promotions from "../../assets/promotions.png";
import GifHeart from "../../assets/gig-heart.gif";
import ManPink from "../../assets/manPink.png";

import { motion } from "framer-motion";
import NumberCounter from 'number-counter';


export const Header = () => {
  const transition = {
    repeat: Infinity, // Repetir infinitamente
    repeatType: "reverse", // Invertir la animación en cada repetición
    duration: 3, // Duración de cada ciclo (en segundos)
  };
  const mobile = window.innerWidth<=768 ? true: false;

  return (
    <div className="header">
      <div className="blur blur-h"></div>
      <div className="left-h">
        <NavBar />
        {/* Promociones  */}
        <div className="promotions">
          <motion.div
            initial={{ left: mobile ? "180px" : "238px" }}
            animate={{ left: "4px" }}
            transition={transition}
           
          ></motion.div>
          <span>2 meses por 10€*/mes. Solo hasta el 26.09</span>
        </div>
        <div className="img-promotions">
          <img src={Promotions} alt="Promociones" />
        </div>

        {/* Frase motivadora  */}
        <div className="phrase">
          <div>
            <span className="stroke-text">Moldea </span>
            <span>tu cuerpo</span>
          </div>
          <div>
            <span>a tu gusto</span>
          </div>
          <div>
            <span>
              Transforma tu vida, esculpe tu cuerpo, y alcanza tus metas en
              nuestro gimnasio de excelencia.
            </span>
          </div>
        </div>
        {/* Frase motivadora  */}
        <div className="figure-data">
          <div>
            <span><NumberCounter end={250} start={100} delay='2' preFix="+" /></span>
            <span>Gyms en Europa</span>
          </div>
          <div>
            <span><NumberCounter end={1250} start={1000} delay='4' preFix="+" /></span>
            <span>Entrenadores</span>
          </div>
          <div>
            <span><NumberCounter end={25} start={0} delay='2' preFix="+" postFix="K"/></span>
            <span>Nuestros Clientes</span>
          </div>
        </div>
        {/* botones  */}
        <div className="header-buttons">
          <button className="btn">Más Informacion</button>
          <button className="btn">Apúntate Ahora</button>
        </div>
      </div>
      {/* right-h  */}
      <div className="right-h">
        {/* Apúntate Ahora */}
        <button className="btn">Apúntate Ahora</button>
        <div className="heart-rate">
          <img src={GifHeart} alt="" />
        </div>
        {/* imagen */}
        <img className="header-image" src={ManPink} alt="" />
      </div>
    </div>
  );
};
