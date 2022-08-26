import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Tripulacao from './componentes/Tripulacao';

function App() {

  const tripulacoes = [ 
    {
      nome: 'Piratas do Chapéu de Palha',
      corPrimaria: '#B22222',
      corSecundaria: '#FA8072'
    },
    {
      nome: 'Piratas do Arlong',
      corPrimaria: '#4169E1',
      corSecundaria: '#87CEFA'
    },
    {
      nome: 'Piratas do Ruivo',
      corPrimaria: '#FF8C00',
      corSecundaria: '#FFA500'
    },
    {
      nome: 'Piratas do Barba Branca',
      corPrimaria: '#FFEBCD',
      corSecundaria: '#F5F5F5'
    },
    {
      nome: 'Baroque Works',
      corPrimaria: '	#4B0082',
      corSecundaria: '#9370DB'
    },
    {
      nome: 'Piratas da Big Mom',
      corPrimaria: '#FF69B4',
      corSecundaria: '#FFB6C1'
    },
    {
      nome: 'Piratas do Barba Negra',
      corPrimaria: '#696969',
      corSecundaria: '#A9A9A9'
    },
    {
      nome: 'Piratas do DonQuixote',
      corPrimaria: '#B0E0E6',
      corSecundaria: '#E0FFFF'
    },
    {
      nome: 'Piratas do Buggy',
      corPrimaria: '#DEB887',
      corSecundaria: '#F5DEB3'
    },
    
  ]

  const [piratas, setPiratas] = useState([]);

  const aoNovoPirataAdicionado = (pirata) => {
    console.log(pirata)
    setPiratas([...piratas, pirata])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario tripulacoes={tripulacoes.map(tripulacao => tripulacao.nome)} aoPirataCadastrado={pirata => aoNovoPirataAdicionado(pirata)}/>
      {tripulacoes.map(tripulacao => <Tripulacao key={tripulacao.nome} nome={tripulacao.nome} corPrimaria={tripulacao.corPrimaria} corSecundaria={tripulacao.corSecundaria}/>)}
    </div>
  );
}

export default App;
