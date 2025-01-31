import { useState } from "react";

import { Pelicula } from "../../modelos/Pelicula";
import { ARREGLO_PELICULAS } from "../../mocks/Pelicula-mocks";
import { ARREGLO_PELICULA_GENERO } from "../../utilidades/dominios/DomGenero";

export const PeliAdmin = () => {

  const [arrPeliculas] = useState<Pelicula[]>(ARREGLO_PELICULAS);

  const obtenerNombreGenero = (valor: string) => {
    for (const objGen of ARREGLO_PELICULA_GENERO) {
      if (objGen.codGenero == valor) {
        return objGen.nombreGenero;
      }
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-11 mt-4">
          <table className="table table-striped table-hover">
            <thead>
              <tr className="table-danger">
                <th style={{ width: "10%" }}>Código</th>
                <th style={{ width: "20%" }}>Nombre</th>
                <th style={{ width: "20%" }}>Genero</th>
                <th style={{ width: "20%" }}>Protagonista</th>
                <th style={{ width: "20%" }}>Imagen</th>
                <th style={{ width: "10%" }}> </th>
              </tr>
            </thead>
            <tbody>
              {
                arrPeliculas.map(pelicula => 
                  <tr className="align-middle">
                    <td>{ pelicula.codPelicula }</td>
                    <td>{ pelicula.nombrePelicula }</td>
                    <td> { obtenerNombreGenero(pelicula.codGeneroPelicula) } </td>
                    <td>{ pelicula.protagonistaPelicula }</td>
                    <td>
                      <img src={ pelicula.imagenPeliculaBase64 } alt="" className="imagenListado"/>
                      <div className="text-info">{ pelicula.imagenPelicula }</div>   
                    </td>
                    <td className="text-center">
                      <a href="/#">
                        <i className="fa-solid fa-trash-can rojito"></i>
                      </a>{" "}
                      <a href="/pactual/1">
                        <i className="fa-regular fa-pen-to-square verde"></i>
                      </a>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};