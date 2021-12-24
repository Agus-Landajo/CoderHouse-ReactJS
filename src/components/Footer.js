import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <h3>Contactanos</h3>
          <p>Mail: mailgenerico@gmail.com</p>
          <p>Telefono: 122112342561221</p>
          <p>Horario: Lunes a Viernes de 9 a 13hs, 14 a 18hs</p>
        </div>
        <div>
          
            <h3>Acerca de Nosotros</h3>
            <p>¿Quiénes somos?</p>
            <p>Ubicación</p>
            <p>Contacto</p>
          
        </div>
        <div>
        <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
        </iframe>
        </div>
      </div>
    </>
  );
};
export default Footer;
