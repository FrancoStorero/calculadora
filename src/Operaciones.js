import { ACTIONS } from "./Calculator";
import './App.scss';

export default function Operaciones({ dispach, operacion , botonTocado }) {
  return (
    <button onClick={()=> dispach({ type: ACTIONS.ELEGIR_OPERACION, payload: { operacion }})}
            className={botonTocado ? "myCalculator" : "myCalculator"}>{operacion}</button>
  );
}
