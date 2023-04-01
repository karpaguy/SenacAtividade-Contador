import styles from './styles.module.css'

type Props={
    texto:string
    aoClicar:() =>void
}

function Botao(props: Props) {
    return <button className={styles.Botao} onClick={props.aoClicar}>{props.texto}</button>
}

export default Botao;