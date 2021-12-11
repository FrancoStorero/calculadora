import "./App.scss";
import masHerramientas from "./assets/images/mas.png";
import menu from "./assets/images/menu.png";
import expand from "./assets/images/expand.png";
import conversor from "./assets/images/conversor.png";
import calculator from "./assets/images/calculator.png";
import cientifica from "./assets/images/raiz-cuadrada.png";
import { useState, useEffect } from "react";

export default function Calculator() {
  const [startNumber, setStartNumber] = useState(0);
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState();

  useEffect(() => {
    switch (operation) {
      case "+":
        setResult(Number(number1) + Number(number2));       
        break;
      case "-":
        setResult(Number(number1) - Number(number2));
        break;
      case "÷":
        setResult(Number(number1) / Number(number2));
        break;
      case "*":
        setResult(Number(number1) * Number(number2));
        break;   
                

      default:
        setResult("");
    }
  }, [number2, number1, operation]);


  function clickNumber(valor) {
    if (startNumber === 0 && (valor === 0 || valor === "=")) {
      setStartNumber(0);
    } else if (startNumber === 0 && valor === "." && number1.length < 10) {
      setNumber1(startNumber + valor);
      setStartNumber(1);
    } else {
      setStartNumber(1);

      if (operation === "" && valor !== "." && number1.length < 10) {
        setNumber1(number1 + valor);
      } else if (operation === "" && !number1.includes(".") && valor === ".") {
        setNumber1(number1 + valor);
      } else if (operation === "" && number1.includes(".") && valor === ".") {
        setNumber1(number1);
      } else if (
        operation &&
        number2.length < 10 &&
        number2.length < 1 &&
        !number2.includes(".") &&
        (valor === "." || valor === 0)
      ) {
        setNumber2(0 + ".");
      } else {
        if (operation && !number2.includes(".") && number2.length < 10) {
          setNumber2(number2 + valor);
        } else if (operation && number2.includes(".") && valor !== ".") {
          setNumber2(number2 + valor);
        } else if (operation && number2.includes(".") && valor === ".") {
        }
      }

      if (startNumber === 2) {
        setStartNumber(0);
        setNumber1("");
        setNumber2("");
        setOperation("");
        setResult();
      }
    }
  }

  function clickOperation(valor) {
    if ((startNumber === 0 || number2) && valor === "%") {
      setStartNumber(0);
    } else if (startNumber === 0 && valor) {
      setStartNumber(0);
    } else {
      setOperation(valor);

      if (valor === "%" && !number2) {
        setNumber1(String(number1 * 0.01));
      } else if (valor === "%" && number2) {
        setNumber2(String(number2 * 0.01));
        setStartNumber(2);
      } else {
      }
    }
  }

  const getResult = () => {
    startNumber !== 0 ? setStartNumber(2) : setStartNumber(0);
  
    String(result).length > 10  ? setResult(String(result).slice(0, 11)) : console.log('ok')
    
   
  };

  function allClear() {
    setStartNumber(0);
    setNumber1("");
    setNumber2("");
    setOperation("");
    setResult();
  }

  function deleteLast() {
    if (!number2 && number1 > 0) {
      setNumber1(number1.slice(0, -1));
      if (number1.length === 1) {
        setStartNumber(0);
      }
    } else {
      setNumber2(number2.slice(0, -1));
    }
  }

  return (
    <div className="myContainer">
      <div className="myNavbar">
        <img src={expand} alt="icono" />
        <img src={calculator} alt="icono" />
        <img src={masHerramientas} alt="icono" />
        <img src={conversor} alt="icono" />
        <img src={menu} alt="icono" />
      </div>
      <div className="myDisplay">
        <div
          className={
            startNumber === 0
              ? "numeroArriba"
              : startNumber === 2
              ? "numeroArriba activo"
              : "numeroArriba"
          }
        >
          {startNumber === 0 ? "" : number1 + operation + number2}
        </div>

        <div
          className={
            startNumber === 0
              ? "numeroAbajo"
              : startNumber === 1
              ? "numeroAbajo activo"
              : "numeroAbajo"
          }
        >
          {startNumber === 0
            ? startNumber
            : number2
            ? `=${result}`
            : `=${number1}`}
        </div>
      </div>

      <div className="myContainerCalculator">
        <button className="myCalculator primaryColor" onClick={allClear}>
          AC
        </button>
        <button className="myCalculator primaryColor" onClick={deleteLast}>
          ←
        </button>
        <button
          className="myCalculator primaryColor"
          onClick={() => {
            clickOperation("%");
          }}
        >
          %
        </button>
        <button
          className="myCalculator primaryColor"
          onClick={() => {
            clickOperation("÷");
          }}
        >
          ÷
        </button>
        <button
          className="myCalculator"
          onClick={() => {
            clickNumber(7);
          }}
        >
          7
        </button>
        <button
          className="myCalculator"
          onClick={() => {
            clickNumber(8);
          }}
        >
          8
        </button>
        <button
          className="myCalculator"
          onClick={() => {
            clickNumber(9);
          }}
        >
          9
        </button>
        <button
          className="myCalculator primaryColor"
          onClick={() => {
            clickOperation("*");
          }}
        >
          *
        </button>
        <button
          className="myCalculator"
          onClick={() => {
            clickNumber(4);
          }}
        >
          4
        </button>
        <button
          className="myCalculator"
          onClick={() => {
            clickNumber(5);
          }}
        >
          5
        </button>
        <button
          className="myCalculator"
          onClick={() => {
            clickNumber(6);
          }}
        >
          6
        </button>
        <button
          className="myCalculator primaryColor"
          onClick={() => {
            clickOperation("-");
          }}
        >
          -
        </button>
        <button
          className="myCalculator"
          onClick={() => {
            clickNumber(1);
          }}
        >
          1
        </button>
        <button
          className="myCalculator"
          onClick={() => {
            clickNumber(2);
          }}
        >
          2
        </button>
        <button
          className="myCalculator"
          onChange={() => getResult}
          onClick={() => {
            clickNumber(3);
          }}
        >
          3
        </button>
        <button
          className="myCalculator primaryColor"
          onClick={() => {
            clickOperation("+");
          }}
        >
          +
        </button>
        <button className="myCalculator">
          <img src={cientifica} alt="imagen" />
        </button>
        <button
          className="myCalculator"
          onClick={() => {
            clickNumber(0);
          }}
        >
          0
        </button>
        <button
          className="myCalculator"
          onClick={() => {
            clickNumber(".");
          }}
        >
          .
        </button>
        <button className="myCalculator" onClick={getResult}>
          =
        </button>
      </div>
    </div>
  );
}

/* por hacer:

    menos decimales en el resultado
    

*/
