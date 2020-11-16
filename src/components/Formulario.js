import React from "react";
import styles from "./Formulario.module.sass";
import useSelect from "../hooks/useSelect";

const Formulario = ({ guardarCategoria }) => {
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertaiment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "Technology", label: "Tecnología" },
  ];

  //utulizar custom hook
  const [categoria, Selectnoticias] = useSelect("general", OPCIONES);

  //submit al form, pasar categoria a app.js
  const buscarNoticias = (e) => {
    e.preventDefault();

    guardarCategoria(categoria);
  };

  return (
    <div className={`row ${styles.buscador}`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={buscarNoticias}>
          <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
          <Selectnoticias />

          <div className="input-field col s12">
            <input
              type="submit"
              className={`btn-large amber darken-2 ${styles.btn_block}`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
