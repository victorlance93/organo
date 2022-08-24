import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = () => {

    const tripulacoes = [
        'Piratas do Chapéu de Palha',
        'Piratas do Arlong',
        'Piratas do Ruivo',
        'Piratas do Barba Branca',
        'Baroque Works',
        'Piratas da Big Mom',
        'Piratas do Barba Negra',
        'Piratas do DonQuixote',
        'Piratas do Buggy'
    ]

    return (
        <section  className="formulario">
            <form>
                <h2>Preencha os dados para criar o card da sua Tripulação</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Função" placeholder="Digite sua função no navio" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Tripulações" itens={tripulacoes}/>
            </form>
        </section>
    )
};

export default Formulario;