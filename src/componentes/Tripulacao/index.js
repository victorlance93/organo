import './Tripulacao.css'

const Tripulacao = (props) => {
    return(

        <section className='tripulacao' style={{ backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        </section>
    )
};

export default Tripulacao;