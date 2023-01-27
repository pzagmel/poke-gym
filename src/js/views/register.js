import React from "react";
import "../../styles/register.css";
import registro from "../../img/registro.png";
// import LOGOPOKEGYM from "../../img/LOGOPOKEGYM.png";

// import { InfoGym } from "../component/CardsINFOGYM";
// import { Footer } from "../component/footer";
// import { Footergp } from "../component/footer2";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const Register = () => {
//   const [pass, setPass] = useState("");
//   const [email, setEmail] = useState("");
//   const [usuario, setUsuario] = useState("");
  let navigate = useNavigate();
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container" id="REGISTERHIJOMAYOR">
        <div className="row">
          <div className="col-1">
            <div className="login-card" id="CONTAINERREGISTER">
              <h2>
                <img src={registro} style={{ width: 300 }} />
              </h2>
              <h3>Introduce Información</h3>
              <form
                className="login-form"
                onSubmit={(evento) => {
                  console.log("evento", evento);
                  evento.preventDefault();
                  let USER = evento.target[0].value;
                  let MAIL = evento.target[1].value;
                  let PASS = evento.target[2].value;
                  let REPPASS = evento.target[3].value;
                  let FONO = evento.target[4].value;
                  let RUT = evento.target[5].value; /* AUN NO SE VERIFICA */
                  if (PASS != REPPASS) {
                    alert("Contraseñas deben ser iguales");
                  }
                  if (USER == "" || MAIL == "" || PASS == "" || REPPASS == "") {
                    alert("Debes completar los datos");
                  } else {
                    if (evento.target[6].checked) {
                      //profesor si es true
                      actions.getinfoRegister(JSON.stringify({
                        nombre: USER,
                        email: MAIL,
                        password:PASS,
                        apellido: USER,
                        rut: RUT,
                        telefono: FONO,
                        rol_profesor: true,
                      }));
                    } else {
                      actions.getinfoRegister(JSON.stringify({
                        nombre: USER,
                        email: MAIL,
                        password:PASS,
                        apellido: USER,
                        rut: RUT,
                        telefono: FONO,
                        rol_profesor: false,
                      }));
                    }
                    alert("Registrado");
                    navigate("/login");
                  }
                }}
              >
                <input type="text" placeholder="Nombre de Usuario" />
                <input type="email" placeholder="Correo" />
                <input type="password" placeholder="Contraseña" />
                <input type="password" placeholder="Repetir Contraseña" />
                <input
                  type="telefono"
                  placeholder="+569 12345678"
                //   pattern="\x2b[0-9]"
                  required
                ></input>
                <input type="Rut" placeholder="Rut" />
                <h3>eres profesor?</h3>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault" />

                <button type="submit">CREAR</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
