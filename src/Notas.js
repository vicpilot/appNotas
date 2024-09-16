import {BsFillTrashFill, BsFillPencilFill} from "react-icons/bs";
import { useState } from "react";
import Anadir from './Anadir.js';
import './Notas.css';
import React from "react";

export const Notas=()=>{

    const [filaEditar, setFilaEditar] = useState(null);
    const [cuadroAnadir, setAnadir] = useState(false);
    const [notas, setNotas] = useState ([]);
  
  
     const eliminar = (indexx) => {
        setNotas(notas.filter((_,index) => index !== indexx));
      };
    
      const anadir = (nuevaNota)=>{
        filaEditar === null ? setNotas([...notas, nuevaNota]) : setNotas(notas.map((nota, index) => {
            if (index !== filaEditar) return nota;
            return nuevaNota;
        }))
      };

      const editar = (i) => {
        setFilaEditar(i);
        setAnadir(true);
      };
      
    return(<div>
        <div className="cuadroBotonAnadir">
                <button className="botonAnadir"  onClick={() => setAnadir(true)}>Añadir</button>          
        </div>
        <div className="conjuntoNotas">
            {notas.map((nota,index) =>{
                return(
                    <div>
                        <div key={index} className={`color${nota.categoria}`}>
                            <div className="titulo">
                                <b>{nota.titulo}</b>
                            </div>
                            <p>{nota.nota}</p>
                            <p>
                            <BsFillPencilFill onClick={() => editar(index)}/>
                            <BsFillTrashFill style={{marginLeft:"10%"}} className="basura" onClick={() =>{
                                    eliminar(index);
                                }
                                    }
                                     />
                            </p>
                            
                        </div>
                        
                    </div>
                )
            })

            }
            
    </div>
        {cuadroAnadir && (
            <div className="resto">
            <div className="cuadroAnadir">
            <Anadir
            cerrarAnadir={
               ()=>{
                   setAnadir(false);
                }
            }
            nnuevo={anadir}
            editable={filaEditar !== null && notas[filaEditar]} 
            /></div></div>
            )
        }       
        </div>
        
      

    );
    };
    export default Notas;
