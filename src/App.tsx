import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Numero from './components/numero/Numero';
import Botao from './components/botao/Botao';


function App() {
  const [cont,setValor]=useState(0);

  function botaoClicadoAdd() {
    setValor(cont+1)
  }

  function botaoClicadoRed() {
    setValor(cont-1)
  }
  
  function botaoClicadoReset() {
    setValor(cont-cont)
  }

  return (
    <div className="App">
      <Numero texto={cont}/>
      <div className="buttonBar"> 
        <Botao texto={'Contador'} aoClicar={botaoClicadoAdd}/>
        <Botao texto={'Reduzir'} aoClicar={botaoClicadoRed}/>
        <Botao texto={'Resetar'} aoClicar={botaoClicadoReset}/>
      </div>
    </div>
  );
}

export default App;
