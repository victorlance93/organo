import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'
import {useState} from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [funcao, setFuncao] = useState('');
    const [imagem, setImagem] = useState('');
    const [tripulacao, setTripulacao] = useState('');
    

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoPirataCadastrado({
            nome: nome,
            funcao: funcao,
            imagem: imagem,
            tripulacao: tripulacao
        })
    };

    return (
        <section  className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card da sua Tripulação</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                 />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Função" 
                    placeholder="Digite sua função no navio" 
                    valor={funcao}
                    aoAlterado={valor => setFuncao(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Tripulações" 
                    itens={props.tripulacoes}
                    valor={tripulacao}
                    aoAlterado={valor => setTripulacao(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
};

export default Formulario;