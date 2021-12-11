import { ACTIONS } from "./Calculator";
import './App.scss';

export default function Botones({ dispach, digito, botonTocado }) {
  return (
    <button onClick={()=> dispach({ type: ACTIONS.AGREGAR_DIGITO, payload: { digito }})}
            className={botonTocado ? "myCalculator" : "myCalculator"}>{digito}</button>
  );
}
