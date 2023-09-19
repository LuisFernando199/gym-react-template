import "./reasons.css";
import manJump from "../../assets/manJump.webp";
import womans from "../../assets/womans.webp";
export const Reasons = () => {
  return (
    <div className="container-reasons">
      <div className="Reasons" id="reasons">
        <div className="left-f">
          <img src={manJump} alt="manJump" />
        </div>
        <div className="right-f">
          <span className="stroke-text">EL PROGRAMA </span>
          <span>DE FIDELIZACIÓN PARA NUESTROS SOCIOS</span>
          <div className="program-benefits">
            <p>
              Las ventajas que te mereces – inscríbete ahora en McFIT+ y
              disfruta de todas las ventajas exclusivas:
            </p>
            <ul>
              <li>🙌 Entrena con amigos/as no socios</li>
              <li>🏋️ Entrena con entrenador de McFIT</li>
              <li>🎁 Vale para un/a amigo/a o familiar</li>
              <li>💰 Descuentos para familia y amigos/as</li>
            </ul>
            <p>Descarga la App y activa McFIT+ gratis.</p>
            <button className="btn">Más información</button>
          </div>
        </div>
      </div>
      <div className="Reasons-a" id="reasons-a">
  <div className="right-a">
    {/* Contenido nuevo */}
    <span className="stroke-text">FORTALECE </span>
    <span>TUS AMISTADES</span>
    <div className="program-benefits-a">
      {/* Contenido nuevo */}
      <p>
        Ven con tu amigo/a al gimnasio y disfrutad juntos de las infinitas
        posibilidades de entrenamiento que tiene McFIT: clases en directo,
        entrenamientos en grupo, funcionales y mucho más.
      </p>
      <p>
        Si tu amigo/a firma un contrato, te daremos un mes de
        entrenamiento gratis. ¿Quieres más? Pues te damos más. Porque
        cuantos más amigos/as recomiendes, más meses gratis te daremos
        durante la vigencia de tu contrato. Es así de fácil: solo tienes
        que descargar la app de McFIT (gratuita) y compartir el código de
        recomendación o enviar el enlace de invitación.
      </p>
      <p>¿A qué esperas?</p>
      <button className="btn">Más información</button>
    </div>
  </div>
  
  <div className="left-a">
    <img src={womans} alt="womans" />
  
  </div>
</div>

    </div>
  );
};
