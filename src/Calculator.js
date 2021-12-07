import './App.scss';
import calculadora from "./assets/images/calculadora.png";
import menu from "./assets/images/menu.png";
import flechas from "./assets/images/contrato.png";
import dolar from "./assets/images/dolar.png";
import miniaturas from "./assets/images/miniaturas.png";
import raiz from "./assets/images/raiz-cuadrada.png";
import { useState, useReducer } from "react";


const initialState = {
    num: 0
}

const ACTIONS = {
    SUMA: '+',
    RESTA: '-',
    MULTIPLICACION: 'x',
    DIVISION: '/'
}

function reducer(state, action){
    switch(action.type){
        case ACTIONS.SUMA:
            return { num: state.num +  10 }
        
    }
    return state
}



export default function Calculator() {

    const [botonTocado, setBotonTocado] = useState(false);
    const [number, setNumber] = useState([])

    const [state, dispatch] = useReducer(reducer, initialState)



    const padNumber = (event)=>{
        console.log(event);
        let currentNumber = event.target.innerText 
        console.log(currentNumber);
          if(number.length <= 23 & currentNumber !== "AC" ){        
              setNumber([...number, currentNumber])
            } 
    }


  
  const handleOnTouchStart = (event) => {        
    
    //setBotonTocado(true)
  };

  const handleOnTouchEnd = () => {
    setBotonTocado(false)
    console.log('chau');
  };

  const resetAC = ()=>{
    setNumber([])
  }

  const deleteNum = ()=>{
      number.pop()      
    setNumber([...number])
  }

  const suma = ()=>{
      dispatch ({ type: ACTIONS.SUMA})
  }



  return (
    <div className="myContainer">
      <div className="myNavbar">
        <img src={flechas} alt="icono" />
        <img src={calculadora} alt="icono" />
        <img src={miniaturas} alt="icono" />
        <img src={dolar} alt="icono" />
        <img src={menu} alt="icono"/>
      </div>
     <div className="myDisplay">
      <div className="numeroArriba" >
      { number }
      </div>
      <div className={number.length !== 0 ? "numeroAbajo activo" : "numeroAbajo"}>
     
        {number.length !== 0 ?  '=' :''} 
        {number.length !== 0 ?  number : 0} 
        
      
      </div>

     </div> 
      
      <div className="myContainerCalculator">
        <button onClick={resetAC} onTouchStart={handleOnTouchStart} onTouchEnd={handleOnTouchEnd} className={botonTocado? "myCalculator": "myCalculator primaryColor"}>AC</button>
        <button onClick={deleteNum} onTouchStart={handleOnTouchStart} onTouchEnd={handleOnTouchEnd} className={botonTocado? "myCalculator": "myCalculator primaryColor"}>←</button>
        <button onClick={padNumber}  onTouchStart={handleOnTouchStart} onTouchEnd={handleOnTouchEnd} className={botonTocado? "myCalculator": "myCalculator primaryColor"}>%</button>
        <button onClick={padNumber}  onTouchStart={handleOnTouchStart} onTouchEnd={handleOnTouchEnd} className={botonTocado? "myCalculator": "myCalculator primaryColor"}>÷</button>
        <button onClick={padNumber}  onTouchStart={handleOnTouchStart} onTouchEnd={handleOnTouchEnd} className={botonTocado? "myCalculator": "myCalculator"}>7</button>
        <button onClick={padNumber}  onTouchStart={handleOnTouchStart} onTouchEnd={handleOnTouchEnd} className={botonTocado? "myCalculator": "myCalculator"}>8</button>
        <button onClick={padNumber}  onTouchStart={handleOnTouchStart} onTouchEnd={handleOnTouchEnd} className={botonTocado? "myCalculator": "myCalculator"}>9</button>
        <button onClick={padNumber}  onTouchStart={handleOnTouchStart} onTouchEnd={handleOnTouchEnd} className={botonTocado? "myCalculator": "myCalculator primaryColor"}>x</button>
        <button onClick={padNumber}  onTouchStart={handleOnTouchStart} onTouchEnd={handleOnTouchEnd} className={botonTocado? "myCalculator": "myCalculator"}>4</button>
        <button onClick={padNumber}  onTouchStart={handleOnTouchStart} onTouchEnd={handleOnTouchEnd} className={botonTocado? "myCalculator": "myCalculator"}>5</button>
        <button onClick={padNumber}  onTouchStart={handleOnTouchStart} onTouchEnd={handleOnTouchEnd} className={botonTocado? "myCalculator": "myCalculator"}>6</button>
        <button onClick={padNumber}  onTouchStart={handleOnTouchStart} onTouchEnd={handleOnTouchEnd} className={botonTocado? "myCalculator": "myCalculator primaryColor"}>-</button>
        <button onClick={padNumber}  onTouchStart={handleOnTouchStart} onTouchEnd={handleOnTouchEnd} className={botonTocado? "myCalculator": "myCalculator"}>1</button>
        <button onClick={padNumber}  onTouchStart={handleOnTouchStart} onTouchEnd={handleOnTouchEnd} className={botonTocado? "myCalculator": "myCalculator"}>2</button>
        <button onClick={padNumber}  onTouchStart={handleOnTouchStart} onTouchEnd={handleOnTouchEnd} className={botonTocado? "myCalculator": "myCalculator"}>3</button>
        <button onClick={suma}  onTouchStart={handleOnTouchStart} onTouchEnd={handleOnTouchEnd} className={botonTocado? "myCalculator": "myCalculator primaryColor"}>+</button>
        <button onClick={padNumber}  onTouchStart={handleOnTouchStart} onTouchEnd={handleOnTouchEnd} className={botonTocado? "myCalculator": "myCalculator primaryColor"}><img src={raiz} alt="imagen" /></button>
        <button onClick={padNumber}  onTouchStart={handleOnTouchStart} onTouchEnd={handleOnTouchEnd} className={botonTocado? "myCalculator": "myCalculator"}>0</button>
        <button onClick={padNumber}  onTouchStart={handleOnTouchStart} onTouchEnd={handleOnTouchEnd} className={botonTocado? "myCalculator": "myCalculator"}>.</button>
        <button onClick={padNumber}  onTouchStart={handleOnTouchStart} onTouchEnd={handleOnTouchEnd} className={botonTocado? "myCalculator": "myCalculator"}>=</button>
      </div>
    </div>
  );
}
