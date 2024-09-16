
import { useState } from "react";
import './Anadir.css';
export const Anadir = ({cerrarAnadir, nnuevo, editable}) => {
    const [nuevo, setNuevo] = useState(editable ||{
        titulo:"(sin título)", nota: "", categoria:"Normal"
    });

    const cambioTitulo = (i) => {
            setNuevo({
            ...nuevo,titulo:i.target.value
    })};

    const cambioNota = (i) => {
        setNuevo({
            ...nuevo,nota:i.target.value
        });
    };

    const cambioCategoria = (i) => {
        setNuevo({
            ...nuevo,categoria:i.target.value
        });
    };

    const anadirNuevo = (i) => {
        i.preventDefault();
        nnuevo(nuevo);
        cerrarAnadir();
    }

    return(
        <div className="anadir">
                <div className="cuadro">
                    <form>
                        <div>
                            <p><b>Titulo</b></p>
                            <input className="textoNota" type="text" value={nuevo.titulo} onChange={cambioTitulo}></input>
                        </div>
                        <div>
                            <p><b>Nota</b></p>
                            <textarea rows="10" className="textoNota" type="text" value={nuevo.nota} onChange={cambioNota}></textarea>
                        </div>
                        <div>
                            <p><b>Categoría</b></p>
                            <select value={nuevo.categoria} onChange={cambioCategoria}>
                                <option>Normal</option>
                                <option>Importante</option>
                                <option>Prioritario</option>
                            </select>
                        </div>
                        <div className="guardar">
                            <button className="posicionBoton" type="submit" onClick={anadirNuevo}>Guardar</button>
                            <button type="submit" onClick={cerrarAnadir}>Cancelar</button>
                        </div>
                    </form>
                </div>
        </div>
    )
};
export default Anadir;