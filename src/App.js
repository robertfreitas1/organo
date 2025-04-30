
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time'


function App() {

const [colaboradores, setColaboradores] = useState ([])
const aoNovoColaboradorAdicionado = (colaborador) => {
  console.log(colaborador)

  setColaboradores([...colaboradores, colaborador])
}

  return (
    <div className="App">
      <header className="App-header">
       <Banner/>
      <Formulario  aoNovoColaboradorAdicionado={ colaborador => aoNovoColaboradorAdicionado(colaborador)} />
        <Time nome="programação" />
        <Time nome="Front-end" />
        <Time nome="Data-Science " />
     
      
      </header>
    </div>
  );
}

export default App;
