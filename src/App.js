
import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto/CampoTexto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Banner/>
       <CampoTexto label="Nome" placeholder="Digite seu nome"/>
       <CampoTexto label="Cargo"  placeholder="Digite seu cargo"/>
       <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
     
      
      </header>
    </div>
  );
}

export default App;
